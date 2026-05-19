"use client";
export const dynamic = "force-dynamic";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";
import {
  InvoiceData, InvoiceItem, CURRENCIES, PAYMENT_TERMS,
  defaultInvoice, createEmptyItem,
  calcSubtotal, calcTax, calcDiscount, calcTotal, formatCurrency, calcDueDate,
} from "@/lib/types";

// ── Invoice Form ──
function InvoiceForm({ data, onChange }: { data: InvoiceData; onChange: (d: InvoiceData) => void }) {
  const set = (patch: Partial<InvoiceData>) => onChange({ ...data, ...patch });
  const setItem = (id: string, patch: Partial<InvoiceItem>) => {
    onChange({ ...data, items: data.items.map((i) => (i.id === id ? { ...i, ...patch } : i)) });
  };
  const addItem = () => onChange({ ...data, items: [...data.items, createEmptyItem()] });
  const removeItem = (id: string) => {
    if (data.items.length <= 1) return;
    onChange({ ...data, items: data.items.filter((i) => i.id !== id) });
  };

  return (
    <div className="space-y-6">
      {/* From / To */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-3">From (Your Details)</h3>
          <div className="space-y-3">
            <input className="input" placeholder="Your Name / Business" value={data.fromName} onChange={(e) => set({ fromName: e.target.value })} />
            <input className="input" placeholder="Email" value={data.fromEmail} onChange={(e) => set({ fromEmail: e.target.value })} />
            <textarea className="input" placeholder="Address" rows={2} value={data.fromAddress} onChange={(e) => set({ fromAddress: e.target.value })} />
            <input className="input" placeholder="Phone" value={data.fromPhone} onChange={(e) => set({ fromPhone: e.target.value })} />
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-3">Bill To (Client)</h3>
          <div className="space-y-3">
            <input className="input" placeholder="Client Name / Business" value={data.toName} onChange={(e) => set({ toName: e.target.value })} />
            <input className="input" placeholder="Client Email" value={data.toEmail} onChange={(e) => set({ toEmail: e.target.value })} />
            <textarea className="input" placeholder="Client Address" rows={2} value={data.toAddress} onChange={(e) => set({ toAddress: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Invoice Meta */}
      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="label">Invoice #</label>
            <input className="input" value={data.invoiceNumber} onChange={(e) => set({ invoiceNumber: e.target.value })} />
          </div>
          <div>
            <label className="label">Invoice Date</label>
            <input className="input" type="date" value={data.invoiceDate} onChange={(e) => {
              const newDate = e.target.value;
              const term = PAYMENT_TERMS.find(t => t.label === data.paymentTerms);
              const patch: Partial<InvoiceData> = { invoiceDate: newDate };
              if (term && term.days !== null) patch.dueDate = calcDueDate(newDate, term.days);
              set(patch);
            }} />
          </div>
          <div>
            <label className="label">Currency</label>
            <select className="input" value={data.currency} onChange={(e) => set({ currency: e.target.value })}>
              {Object.entries(CURRENCIES).map(([code, c]) => (
                <option key={code} value={code}>{code} — {c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Payment Terms</label>
            <select className="input" value={data.paymentTerms} onChange={(e) => {
              const label = e.target.value;
              const term = PAYMENT_TERMS.find(t => t.label === label);
              const patch: Partial<InvoiceData> = { paymentTerms: label };
              if (term && term.days !== null) patch.dueDate = calcDueDate(data.invoiceDate, term.days);
              set(patch);
            }}>
              {PAYMENT_TERMS.map(t => <option key={t.label} value={t.label}>{t.label}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Due Date</label>
            <input className="input" type="date" value={data.dueDate} onChange={(e) => set({ dueDate: e.target.value, paymentTerms: "Custom" })} />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div className="card">
        <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-3">Items</h3>
        <div className="space-y-3">
          <div className="hidden md:grid grid-cols-[1fr_80px_100px_100px_40px] gap-2 text-xs text-gray-500 font-medium px-1">
            <span>Description</span><span>Qty</span><span>Rate</span><span>Amount</span><span></span>
          </div>
          {data.items.map((item) => (
            <div key={item.id} className="grid md:grid-cols-[1fr_80px_100px_100px_40px] gap-2 items-center">
              <input className="input" placeholder="Item description" value={item.description} onChange={(e) => setItem(item.id, { description: e.target.value })} />
              <input className="input text-center" type="number" min="1" value={item.quantity} onChange={(e) => setItem(item.id, { quantity: Number(e.target.value) || 0 })} />
              <input className="input" type="number" min="0" step="0.01" placeholder="0.00" value={item.rate || ""} onChange={(e) => setItem(item.id, { rate: Number(e.target.value) || 0 })} />
              <div className="text-right font-medium pr-2">{formatCurrency(item.quantity * item.rate, data.currency)}</div>
              <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 text-xl leading-none" title="Remove">×</button>
            </div>
          ))}
          <button onClick={addItem} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2">+ Add Item</button>
        </div>
      </div>

      {/* Tax, Discount, Notes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-3">Notes</h3>
          <textarea className="input" rows={3} placeholder="Payment terms, thank you note, etc." value={data.notes} onChange={(e) => set({ notes: e.target.value })} />
          <p className="text-xs text-gray-500 mt-2">
            Tip: reference your contract so AP can approve faster — e.g. <button type="button" onClick={() => set({ notes: data.notes ? `${data.notes}\nPer agreement dated [DATE].` : "Per agreement dated [DATE]." })} className="text-indigo-600 hover:text-indigo-700 underline">&ldquo;Per agreement dated [DATE]&rdquo;</button>, <button type="button" onClick={() => set({ notes: data.notes ? `${data.notes}\nPer Statement of Work signed [DATE].` : "Per Statement of Work signed [DATE]." })} className="text-indigo-600 hover:text-indigo-700 underline">&ldquo;Per Statement of Work signed [DATE]&rdquo;</button>, or <button type="button" onClick={() => set({ notes: data.notes ? `${data.notes}\nReflects updated rate per agreement amendment dated [DATE].` : "Reflects updated rate per agreement amendment dated [DATE]." })} className="text-indigo-600 hover:text-indigo-700 underline">&ldquo;Reflects updated rate per agreement amendment dated [DATE]&rdquo;</button>.
          </p>
        </div>
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <label className="label w-24">Tax %</label>
            <input className="input w-24" type="number" min="0" step="0.5" value={data.taxRate || ""} onChange={(e) => set({ taxRate: Number(e.target.value) || 0 })} />
          </div>
          <div className="flex items-center gap-3">
            <label className="label w-24">Discount %</label>
            <input className="input w-24" type="number" min="0" step="0.5" value={data.discountRate || ""} onChange={(e) => set({ discountRate: Number(e.target.value) || 0 })} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Invoice Preview ──
function InvoicePreview({ data }: { data: InvoiceData }) {
  const sub = calcSubtotal(data.items);
  const tax = calcTax(sub, data.taxRate);
  const discount = calcDiscount(sub, data.discountRate);
  const total = calcTotal(data.items, data.taxRate, data.discountRate);
  const fc = (n: number) => formatCurrency(n, data.currency);

  return (
    <div id="invoice-preview" className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto border">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{data.fromName || "Your Business"}</h2>
          <p className="text-sm text-gray-500 whitespace-pre-line mt-1">{data.fromEmail}{data.fromPhone ? `\n${data.fromPhone}` : ""}</p>
          <p className="text-sm text-gray-500 whitespace-pre-line">{data.fromAddress}</p>
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-extrabold text-indigo-600">INVOICE</h1>
          <p className="text-sm text-gray-500 mt-1">{data.invoiceNumber}</p>
        </div>
      </div>

      {/* Bill To + Dates */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Bill To</p>
          <p className="font-semibold">{data.toName || "Client Name"}</p>
          <p className="text-sm text-gray-500">{data.toEmail}</p>
          <p className="text-sm text-gray-500 whitespace-pre-line">{data.toAddress}</p>
        </div>
        <div className="text-right space-y-1">
          <p className="text-sm"><span className="text-gray-400">Date:</span> {data.invoiceDate}</p>
          <p className="text-sm"><span className="text-gray-400">Due:</span> {data.dueDate}</p>
          {data.paymentTerms && (
            <p className="text-sm"><span className="text-gray-400">Terms:</span> {data.paymentTerms}</p>
          )}
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3 text-xs text-gray-400 uppercase font-semibold">Description</th>
            <th className="text-center py-3 text-xs text-gray-400 uppercase font-semibold w-20">Qty</th>
            <th className="text-right py-3 text-xs text-gray-400 uppercase font-semibold w-28">Rate</th>
            <th className="text-right py-3 text-xs text-gray-400 uppercase font-semibold w-28">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.filter(i => i.description || i.rate > 0).map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 text-sm">{item.description || "—"}</td>
              <td className="py-3 text-sm text-center">{item.quantity}</td>
              <td className="py-3 text-sm text-right">{fc(item.rate)}</td>
              <td className="py-3 text-sm text-right font-medium">{fc(item.quantity * item.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span>{fc(sub)}</span>
          </div>
          {data.taxRate > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span>{fc(tax)}</span>
            </div>
          )}
          {data.discountRate > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Discount ({data.discountRate}%)</span>
              <span className="text-red-500">-{fc(discount)}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold border-t-2 border-gray-900 pt-2 mt-2">
            <span>Total</span>
            <span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Notes</p>
          <p className="text-sm text-gray-600 whitespace-pre-line">{data.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-10 pt-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">Generated with InvoiceQuick — invoicequick.com</p>
      </div>
    </div>
  );
}

// ── Main Page ──
export default function CreateInvoice() {
  const [data, setData] = useState<InvoiceData>(defaultInvoice());
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean; id: string } | null>(null);
  const [clients, setClients] = useState<{ id: string; name: string; email: string; address: string }[]>([]);
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    loadUserData();
  }, []);

  async function loadUserData() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", authUser.id).single();
    if (profile) {
      setUser({ email: authUser.email!, isAdmin: profile.is_admin || false, id: authUser.id });
      // Auto-fill from profile
      if (profile.business_name || profile.business_email) {
        setData(prev => ({
          ...prev,
          fromName: profile.business_name || prev.fromName,
          fromEmail: profile.business_email || authUser.email || prev.fromEmail,
          fromPhone: profile.business_phone || prev.fromPhone,
          fromAddress: profile.business_address || prev.fromAddress,
          currency: profile.default_currency || prev.currency,
          taxRate: profile.default_tax_rate || prev.taxRate,
          notes: profile.default_notes || prev.notes,
        }));
      }
    }
    // Load clients for quick-fill
    const { data: clientList } = await supabase.from("clients").select("id, name, email, address").eq("user_id", authUser.id).order("name");
    setClients(clientList || []);
  }

  async function handleSave() {
    if (!user) return;
    setSaving(true);
    const sub = calcSubtotal(data.items);
    const tax = calcTax(sub, data.taxRate);
    const discount = calcDiscount(sub, data.discountRate);
    const total = calcTotal(data.items, data.taxRate, data.discountRate);

    const { data: invoice, error } = await supabase.from("invoices").insert({
      user_id: user.id,
      invoice_number: data.invoiceNumber,
      from_name: data.fromName,
      from_email: data.fromEmail,
      from_phone: data.fromPhone,
      from_address: data.fromAddress,
      to_name: data.toName,
      to_email: data.toEmail,
      to_address: data.toAddress,
      invoice_date: data.invoiceDate,
      due_date: data.dueDate,
      currency: data.currency,
      subtotal: sub,
      tax_rate: data.taxRate,
      tax_amount: tax,
      discount_rate: data.discountRate,
      discount_amount: discount,
      total: total,
      notes: data.notes,
      status: "draft",
    }).select().single();

    if (invoice) {
      const items = data.items.filter(i => i.description || i.rate > 0).map((item, idx) => ({
        invoice_id: invoice.id,
        description: item.description,
        quantity: item.quantity,
        rate: item.rate,
        amount: item.quantity * item.rate,
        sort_order: idx,
      }));
      if (items.length > 0) {
        await supabase.from("invoice_items").insert(items);
      }
      router.push(`/invoices/${invoice.id}`);
    } else {
      alert(error?.message || "Failed to save invoice");
    }
    setSaving(false);
  }

  const handlePrint = () => { window.print(); };

  const fillClient = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setData(prev => ({ ...prev, toName: client.name, toEmail: client.email, toAddress: client.address }));
    }
  };

  const content = (
    <>
      {/* Top actions */}
      <div className="no-print flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Create Invoice</h1>
          {clients.length > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-500">Quick fill client:</span>
              <select onChange={(e) => fillClient(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-2 py-1" defaultValue="">
                <option value="">Select a saved client...</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-lg p-0.5 flex">
            <button onClick={() => setView("edit")} className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${view === "edit" ? "bg-white shadow-sm text-gray-900" : "text-gray-500"}`}>Edit</button>
            <button onClick={() => setView("preview")} className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${view === "preview" ? "bg-white shadow-sm text-gray-900" : "text-gray-500"}`}>Preview</button>
          </div>
          <button onClick={handleSave} disabled={saving} className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg disabled:opacity-50">
            {saving ? "Saving..." : "Save Invoice"}
          </button>
          <button onClick={handlePrint} className="btn-secondary text-sm !py-2 !px-4">
            PDF
          </button>
        </div>
      </div>

      {view === "edit" ? (
        <InvoiceForm data={data} onChange={setData} />
      ) : (
        <div ref={printRef}>
          <InvoicePreview data={data} />
        </div>
      )}

      <div className="hidden print:block">
        <InvoicePreview data={data} />
      </div>

      <style jsx global>{`
        .input {
          display: block; width: 100%; padding: 0.5rem 0.75rem;
          border: 1px solid #e5e7eb; border-radius: 0.5rem;
          font-size: 0.875rem; outline: none; transition: border-color 0.15s;
        }
        .input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        .label {
          display: block; font-size: 0.75rem; font-weight: 500;
          color: #6b7280; margin-bottom: 0.25rem;
        }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
        }
      `}</style>
    </>
  );

  // If logged in, wrap in AppShell. If not, show standalone.
  if (user) {
    return <AppShell user={user}>{content}</AppShell>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">IQ</div>
            <span className="font-bold text-lg">InvoiceQuick</span>
          </Link>
          <div className="flex gap-2">
            <Link href="/login" className="btn-secondary text-sm !py-2">Sign In</Link>
            <Link href="/signup" className="btn-primary text-sm !py-2">Sign Up Free</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">{content}</div>
    </div>
  );
}
