"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";
import { useRouter } from "next/navigation";
import { formatCurrency, toDateInput } from "@/lib/types";

interface InvoiceDetail {
  id: string;
  invoice_number: string;
  status: string;
  from_name: string;
  from_email: string;
  from_phone: string;
  from_address: string;
  to_name: string;
  to_email: string;
  to_address: string;
  invoice_date: string;
  due_date: string;
  currency: string;
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  discount_rate: number;
  discount_amount: number;
  total: number;
  notes: string;
  items: { id: string; description: string; quantity: number; rate: number; amount: number }[];
}

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-gray-100 text-gray-700",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-green-100 text-green-700",
  overdue: "bg-red-100 text-red-700",
  cancelled: "bg-gray-100 text-gray-400",
};

export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  const [invoice, setInvoice] = useState<InvoiceDetail | null>(null);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const router = useRouter();

  useEffect(() => { loadInvoice(); }, []);

  async function loadInvoice() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;
    const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", authUser.id).single();
    setUser({ email: authUser.email!, isAdmin: profile?.is_admin || false });

    const { data: inv } = await supabase.from("invoices").select("*").eq("id", params.id).single();
    if (!inv) { router.push("/dashboard"); return; }

    const { data: items } = await supabase.from("invoice_items").select("*").eq("invoice_id", params.id).order("sort_order");
    setInvoice({ ...inv, items: items || [] });
  }

  async function updateStatus(status: string) {
    // toDateInput, not toISOString: marking an invoice paid on a weekday evening
    // west of UTC would otherwise record tomorrow's date as the payment date.
    await supabase.from("invoices").update({ status, ...(status === "paid" ? { paid_date: toDateInput(new Date()) } : {}) }).eq("id", params.id);
    loadInvoice();
  }

  async function handleDelete() {
    if (!confirm("Delete this invoice? This cannot be undone.")) return;
    await supabase.from("invoice_items").delete().eq("invoice_id", params.id);
    await supabase.from("invoices").delete().eq("id", params.id);
    router.push("/dashboard");
  }

  if (!invoice) {
    return <AppShell user={user || undefined}><div className="text-center py-12 text-gray-400">Loading...</div></AppShell>;
  }

  const fc = (n: number) => formatCurrency(n, invoice.currency);

  return (
    <AppShell user={user || undefined}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-gray-700 mb-2">&larr; Back</button>
          <h1 className="text-2xl font-bold">{invoice.invoice_number}</h1>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[invoice.status]}`}>{invoice.status}</span>
        </div>
        <div className="flex gap-2">
          {invoice.status !== "paid" && (
            <button onClick={() => updateStatus("paid")} className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Mark Paid
            </button>
          )}
          {invoice.status === "draft" && (
            <button onClick={() => updateStatus("sent")} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Mark Sent
            </button>
          )}
          <button onClick={() => window.print()} className="btn-secondary text-sm !py-2">Print / PDF</button>
          <button onClick={handleDelete} className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-2">Delete</button>
        </div>
      </div>

      {/* Invoice Preview */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-2xl font-bold">{invoice.from_name || "Your Business"}</h2>
            <p className="text-sm text-gray-500 mt-1">{invoice.from_email}</p>
            {invoice.from_phone && <p className="text-sm text-gray-500">{invoice.from_phone}</p>}
            <p className="text-sm text-gray-500 whitespace-pre-line">{invoice.from_address}</p>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-extrabold text-indigo-600">INVOICE</h1>
            <p className="text-sm text-gray-500 mt-1">{invoice.invoice_number}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Bill To</p>
            <p className="font-semibold">{invoice.to_name}</p>
            <p className="text-sm text-gray-500">{invoice.to_email}</p>
            <p className="text-sm text-gray-500 whitespace-pre-line">{invoice.to_address}</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm"><span className="text-gray-400">Date:</span> {invoice.invoice_date}</p>
            <p className="text-sm"><span className="text-gray-400">Due:</span> {invoice.due_date}</p>
            <p className="text-sm"><span className="text-gray-400">Status:</span> {invoice.status}</p>
          </div>
        </div>

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
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-3 text-sm">{item.description}</td>
                <td className="py-3 text-sm text-center">{item.quantity}</td>
                <td className="py-3 text-sm text-right">{fc(item.rate)}</td>
                <td className="py-3 text-sm text-right font-medium">{fc(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span>{fc(invoice.subtotal)}</span>
            </div>
            {invoice.tax_rate > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax ({invoice.tax_rate}%)</span>
                <span>{fc(invoice.tax_amount)}</span>
              </div>
            )}
            {invoice.discount_rate > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Discount ({invoice.discount_rate}%)</span>
                <span className="text-red-500">-{fc(invoice.discount_amount)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold border-t-2 border-gray-900 pt-2 mt-2">
              <span>Total</span>
              <span>{fc(invoice.total)}</span>
            </div>
          </div>
        </div>

        {invoice.notes && (
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Notes</p>
            <p className="text-sm text-gray-600 whitespace-pre-line">{invoice.notes}</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
