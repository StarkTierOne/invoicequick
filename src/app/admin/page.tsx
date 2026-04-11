"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";
import { useRouter } from "next/navigation";

interface AdminStats {
  total_users: number;
  total_invoices: number;
  paid_invoices: number;
  total_clients: number;
  total_revenue_processed: number;
  new_users_7d: number;
  new_users_30d: number;
  pro_users: number;
  business_users: number;
}

interface UserRow {
  id: string;
  email: string;
  business_name: string;
  plan: string;
  created_at: string;
}

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => { loadAdmin(); }, []);

  async function loadAdmin() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) { router.push("/login"); return; }

    const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", authUser.id).single();
    if (!profile?.is_admin) { router.push("/dashboard"); return; }

    setUser({ email: authUser.email!, isAdmin: true });

    // Load admin stats
    const { data: statsData } = await supabase.from("admin_stats").select("*").single();
    if (statsData) setStats(statsData);

    // Load all users (admin only via RLS bypass or service role)
    const { data: usersData } = await supabase
      .from("profiles")
      .select("id, email, business_name, plan, created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    setUsers(usersData || []);

    setLoading(false);
  }

  if (loading) {
    return (
      <AppShell user={user || undefined}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-gray-400">Loading admin panel...</div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell user={user || undefined}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-600">Admin Panel</h1>
        <p className="text-gray-500 text-sm">Business metrics and user management</p>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card border-l-4 border-indigo-500">
            <p className="text-xs text-gray-500 uppercase font-medium">Total Users</p>
            <p className="text-3xl font-bold mt-1">{stats.total_users}</p>
          </div>
          <div className="card border-l-4 border-green-500">
            <p className="text-xs text-gray-500 uppercase font-medium">Revenue Processed</p>
            <p className="text-3xl font-bold mt-1 text-green-600">${stats.total_revenue_processed.toLocaleString()}</p>
          </div>
          <div className="card border-l-4 border-blue-500">
            <p className="text-xs text-gray-500 uppercase font-medium">Total Invoices</p>
            <p className="text-3xl font-bold mt-1">{stats.total_invoices}</p>
            <p className="text-xs text-gray-400">{stats.paid_invoices} paid</p>
          </div>
          <div className="card border-l-4 border-amber-500">
            <p className="text-xs text-gray-500 uppercase font-medium">Total Clients</p>
            <p className="text-3xl font-bold mt-1">{stats.total_clients}</p>
          </div>
        </div>
      )}

      {/* Growth Metrics */}
      {stats && (
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="card bg-indigo-50 border-indigo-200">
            <p className="text-sm text-indigo-600 font-medium">New Users (7 days)</p>
            <p className="text-2xl font-bold text-indigo-700">{stats.new_users_7d}</p>
          </div>
          <div className="card bg-indigo-50 border-indigo-200">
            <p className="text-sm text-indigo-600 font-medium">New Users (30 days)</p>
            <p className="text-2xl font-bold text-indigo-700">{stats.new_users_30d}</p>
          </div>
          <div className="card bg-green-50 border-green-200">
            <p className="text-sm text-green-600 font-medium">Paid Plans</p>
            <p className="text-2xl font-bold text-green-700">{stats.pro_users} Pro / {stats.business_users} Business</p>
          </div>
        </div>
      )}

      {/* User List */}
      <div className="card">
        <h2 className="font-semibold text-lg mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Email</th>
                <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Business</th>
                <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Plan</th>
                <th className="text-left py-3 text-xs text-gray-500 font-medium uppercase">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-gray-50">
                  <td className="py-3 text-sm">{u.email}</td>
                  <td className="py-3 text-sm text-gray-600">{u.business_name || "—"}</td>
                  <td className="py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      u.plan === "pro" ? "bg-indigo-100 text-indigo-700" :
                      u.plan === "business" ? "bg-green-100 text-green-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {u.plan}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-500">{new Date(u.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
