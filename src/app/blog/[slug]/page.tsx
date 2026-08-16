import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";
import { articles } from "@/lib/blog-articles";
import { publishedAt } from "@/lib/blog-published-at";
import { getTradeByGuideSlug } from "@/lib/invoice-template-trades";

const INLINE_LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const BOLD_RE = /\*\*([^*]+)\*\*/g;
// Italic content must start and end with a non-space, non-asterisk char, so a
// stray or arithmetic asterisk never opens a span and bold markers (already
// consumed upstream) can't be mis-parsed.
const ITALIC_RE = /\*([^*\s](?:[^*]*[^*\s])?)\*/g;

// Strip lightweight markdown (links → label, **bold**/*italic* → text) for use
// in metadata and JSON-LD, where raw markers would otherwise leak as literal
// characters into SERP snippets and FAQ rich results.
function stripMarkdown(text: string): string {
  return text.replace(INLINE_LINK_RE, "$1").replace(BOLD_RE, "$1").replace(ITALIC_RE, "$1");
}

// Render *italic* spans within a plain (link-free, bold-free) text run.
function renderItalic(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  ITALIC_RE.lastIndex = 0;
  while ((match = ITALIC_RE.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <em key={`${keyBase}-i${match.index}`} className="italic">
        {match[1]}
      </em>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

// Render **bold** spans within a plain (link-free) text run, handing the
// remaining plain runs to renderItalic. Bold is resolved before italic so the
// shared `*` delimiter never causes the two to fight.
function renderEmphasis(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  BOLD_RE.lastIndex = 0;
  while ((match = BOLD_RE.exec(text)) !== null) {
    if (match.index > lastIndex)
      nodes.push(...renderItalic(text.slice(lastIndex, match.index), `${keyBase}-${lastIndex}`));
    nodes.push(
      <strong key={`${keyBase}-b${match.index}`} className="font-semibold text-gray-900">
        {match[1]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(...renderItalic(text.slice(lastIndex), `${keyBase}-${lastIndex}`));
  return nodes;
}

function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  INLINE_LINK_RE.lastIndex = 0;
  while ((match = INLINE_LINK_RE.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) nodes.push(...renderEmphasis(text.slice(lastIndex, match.index), `t${lastIndex}`));
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={`${match.index}-${href}`} href={href} className="text-indigo-600 hover:text-indigo-700 underline">
          {renderEmphasis(label, `l${match.index}`)}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={`${match.index}-${href}`} href={href} className="text-indigo-600 hover:text-indigo-700 underline" target="_blank" rel="noopener noreferrer">
          {renderEmphasis(label, `l${match.index}`)}
        </a>,
      );
    }
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) nodes.push(...renderEmphasis(text.slice(lastIndex), `t${lastIndex}`));
  return nodes.length ? nodes : text;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | InvoiceQuick Blog`,
    description: stripMarkdown(article.description),
    keywords: article.keywords,
    alternates: {
      canonical: `https://invoicequick-phi.vercel.app/blog/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const canonical = `https://invoicequick-phi.vercel.app/blog/${slug}`;
  const published = publishedAt[slug];

  // If this guide is the long-form article behind a trade template page, the
  // end-of-post CTA becomes trade-specific: the reader gets the template built
  // for the work they just read about, opened with that trade's line items,
  // instead of a generic blank invoice. Undefined for the other ~60 posts,
  // which keep the generic CTA below.
  const trade = getTradeByGuideSlug(slug);

  // Place the mid-article CTA before the section heading nearest the body's
  // midpoint, excluding the opening heading. Skipped on short posts (<2 content
  // headings), where the end-of-post CTA already sits within easy scroll reach.
  const headingPositions = article.body
    .map((p, idx) => (p.startsWith("## ") ? idx : -1))
    .filter((idx) => idx > 0);
  const midpoint = article.body.length / 2;
  const inlineCtaIndex =
    headingPositions.length >= 2
      ? headingPositions.reduce((best, idx) =>
          Math.abs(idx - midpoint) < Math.abs(best - midpoint) ? idx : best,
        )
      : -1;

  return (
    <div className="min-h-screen">
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: stripMarkdown(article.description),
            keywords: article.keywords,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            url: canonical,
            inLanguage: "en-US",
            isAccessibleForFree: true,
            datePublished: published,
            dateModified: published,
            author: { "@type": "Organization", name: "InvoiceQuick", url: "https://invoicequick-phi.vercel.app" },
            publisher: {
              "@type": "Organization",
              name: "InvoiceQuick",
              url: "https://invoicequick-phi.vercel.app",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicequick-phi.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://invoicequick-phi.vercel.app/blog" },
              { "@type": "ListItem", position: 3, name: article.title, item: canonical },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      {article.faqs && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: stripMarkdown(faq.a) },
              })),
            }),
          }}
        />
      )}

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-xl">InvoiceQuick</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Blog</Link>
            <Link href="/create" className="btn-primary text-sm !py-2 !px-4">Create Invoice</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 pt-16 pb-20">
        <div className="mb-4">
          <Link href="/blog" className="text-indigo-600 text-sm hover:text-indigo-700 transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">{article.title}</h1>
        <div className="prose prose-lg max-w-none">
          {article.body.map((paragraph, i) => {
            const node = paragraph.startsWith("## ") ? (
              <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                {renderEmphasis(paragraph.replace("## ", ""), `h${i}`)}
              </h2>
            ) : (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {renderInline(paragraph)}
              </p>
            );
            // Mid-article inline CTA: catch readers who get value but never reach
            // the end-of-post CTA. Rendered once, just before a section break near
            // the middle of long posts (the flagged blog→/create conversion gap).
            if (i === inlineCtaIndex) {
              return (
                <Fragment key={`cta-${i}`}>
                  <div className="not-prose my-10 flex flex-col gap-4 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-4 sm:flex-row sm:items-center">
                    {trade ? (
                      // The end-of-post CTA has been trade-specific since the
                      // template pages shipped, but this one — the CTA that
                      // exists precisely because most readers never reach the
                      // end — stayed generic on the guides where the trade is
                      // known, sending a reader halfway through a 4,000-word
                      // hauling guide to a blank invoice. Same seeded
                      // destination as the end CTA; the labels differ so the
                      // two are separable in analytics (the delegated listener
                      // records the anchor text and the ?trade= dimension).
                      <>
                        <p className="flex-1 text-sm text-gray-700">
                          <strong className="text-gray-900">Stop reading, start billing.</strong>{" "}
                          The {trade.trade.toLowerCase()} template opens with these lines already
                          on it &mdash; free, no sign-up.
                        </p>
                        <Link
                          href={`/create?trade=${trade.slug}`}
                          className="btn-primary self-start whitespace-nowrap text-sm !px-5 !py-2.5 sm:self-auto"
                        >
                          Open the {trade.trade} Template &rarr;
                        </Link>
                      </>
                    ) : (
                      <>
                        <p className="flex-1 text-sm text-gray-700">
                          <strong className="text-gray-900">Stop reading, start billing.</strong>{" "}
                          Create a clean, professional invoice in about 60 seconds &mdash; free, no sign-up.
                        </p>
                        <Link
                          href="/create"
                          className="btn-primary self-start whitespace-nowrap text-sm !px-5 !py-2.5 sm:self-auto"
                        >
                          Create Free Invoice &rarr;
                        </Link>
                      </>
                    )}
                  </div>
                  {node}
                </Fragment>
              );
            }
            return node;
          })}
        </div>

        {/* FAQ */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {article.faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{renderInline(faq.a)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Article CTA — trade-specific where this guide backs a template page */}
        {trade ? (
          <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">{trade.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to send a {trade.trade.toLowerCase()} invoice?
            </h3>
            <p className="text-gray-600 mb-5 max-w-xl mx-auto">
              Open the {trade.trade.toLowerCase()} template and the lines above are already listed &mdash;
              edit the wording, add your rates, download the PDF.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href={`/create?trade=${trade.slug}`} className="btn-primary inline-block">
                Start a {trade.trade} Invoice &rarr;
              </Link>
              <Link
                href={`/invoice-template/${trade.slug}`}
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm underline underline-offset-4"
              >
                See the {trade.trade.toLowerCase()} invoice template
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">No sign-up &middot; No credit card &middot; Free forever</p>
          </div>
        ) : (
          <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to create your invoice?</h3>
            <p className="text-gray-600 mb-5">Build a professional invoice in under 60 seconds. Free forever, no sign-up required.</p>
            <Link href="/create" className="btn-primary inline-block">
              Create Free Invoice &rarr;
            </Link>
            <p className="mt-4 text-xs text-gray-500">No sign-up &middot; No credit card &middot; Free forever</p>
          </div>
        )}
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} InvoiceQuick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
