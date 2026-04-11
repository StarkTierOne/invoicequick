"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";
import Link from "next/link";

interface Invoice {
  id: string;
  invoice_number: string;
  to_name: string;
  total: number;
  currency: string;
  status: string;
  invoice_date: string;
  due_date: string;
}

interface Stats {
  totalInvoices: number;
  totalRevenue: number;
  paidCount: number;
  pendingCount: number;
  overdueCount: number;
}

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-gray-100 text-gray-700",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-green-100 text-green-700",
  overdue: "bg-red-100 text-red-700",
  cancelled: "bg-gray-100 text-gray-400",
};

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$", EUR: "€", GBP: "£", CAD: "CA$", AUD: "A$", JPY: "¥", MXN: "MX$", BRL: "R$", INR: "₹", CHF: "CHF",
};

export default function DashboardPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [stats, setStats] = useState<Stats>({ totalInvoices: 0, totalRevenue: 0, paidCount: 0, pendingCount: 0, overdueCount: 0 });
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;

    const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", authUser.id).single();
    setUser({ email: authUser.email!, isAdmin: profile?.is_admin || false });

    const { data: invs } = await supabase
      .from("invoices")
      .select("id, invoice_number, to_name, total, currency, status, invoice_date, due_date")
      .eq("user_id", authUser.id)
      .order("created_at", { ascending: false })
      .limit(20);

    const invoiceList = invs || [];
    setInvoices(invoiceList);

    setStats({
      totalInvoices: invoiceList.length,
      totalRevenue: invoiceList.filter(i => i.status === "paid").reduce((s, i) => s + (i.total || 0), 0),
      paidCount: invoiceList.filter(i => i.status === "paid").length,
      pendingCount: invoiceList.filter(i => i.status === "sent" || i.status === "draft").length,
      overdueCount: invoiceList.filter(i => i.status === "overdue").length,
    });

    setLoading(false);
  }

  const fc = (amount: number, currency: string = "USD") => `${CURRENCY_SYMBOLS[currency] || "$"}${amount.toFixed(2)}`;

  if (loading) {
    return (
      <AppShell user={user || undefined}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell user={user || undefined}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500 text-sm">Overview of your invoicing activity</p>
        </div>
        <Link href="/create" className="btn-primary text-sm !py-2.5">
          + New Invoice
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Total Invoices</p>
          <p className="text-2xl font-bold mt-1">{stats.totalInvoices}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Revenue (Paid)</p>
          <p className="text-2xl font-bold mt-1 text-green-600">{fc(stats.totalRevenue)}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Pending</p>
          <p className="text-2xl font-bold mt-1 text-amber-600">{stats.pendingCount}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Overdue</p>
          <p className="text-2xl font-bold mt-1 text-red-600">{stats.overdueCount}</p>
        </div>
      </div>

      {/* Invoice List */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Recent Invoices</h2>
        </div>

        {invoices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-2">No invoices yet</p>
            <p className="text-gray-400 text-sm mb-4">Create your first invoice to get started</p>
            <Link href="/create" className="btn-primary text-sm">Create Invoice</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Invoice</th>
                  <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Client</th>
                  <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Amount</th>
                  <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Status</th>
                  <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Due Date</th>
                  <th className="text-right py-3 text-xs text-gray-500 font-medium uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-3 text-sm font-medium">{inv.invoice_number}</td>
                    <td className="py-3 text-sm text-gray-600">{inv.to_name || "—"}</td>
                    <td className="py-3 text-sm font-medium">{fc(inv.total, inv.currency)}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[inv.status] || ""}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-500">{inv.due_date}</td>
                    <td className="py-3 text-right">
                      <Link href={`/invoices/${inv.id}`} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppShell>
  );
}
