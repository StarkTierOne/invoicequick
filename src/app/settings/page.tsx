"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";
import { CURRENCIES } from "@/lib/types";

export default function SettingsPage() {
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [profile, setProfile] = useState({
    business_name: "", business_email: "", business_phone: "", business_address: "",
    default_currency: "USD", default_tax_rate: 0, default_payment_terms: "Net 30", default_notes: "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { loadProfile(); }, []);

  async function loadProfile() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;
    const { data } = await supabase.from("profiles").select("*").eq("id", authUser.id).single();
    if (data) {
      setUser({ email: authUser.email!, isAdmin: data.is_admin || false });
      setProfile({
        business_name: data.business_name || "",
        business_email: data.business_email || authUser.email || "",
        business_phone: data.business_phone || "",
        business_address: data.business_address || "",
        default_currency: data.default_currency || "USD",
        default_tax_rate: data.default_tax_rate || 0,
        default_payment_terms: data.default_payment_terms || "Net 30",
        default_notes: data.default_notes || "",
      });
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;
    await supabase.from("profiles").update(profile).eq("id", authUser.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AppShell user={user || undefined}>
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-gray-500 text-sm mb-8">Configure your business details — these auto-fill on new invoices</p>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        <div className="card">
          <h2 className="font-semibold text-lg mb-4">Business Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.business_name} onChange={e => setProfile({ ...profile, business_name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.business_email} onChange={e => setProfile({ ...profile, business_email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.business_phone} onChange={e => setProfile({ ...profile, business_phone: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" rows={3} value={profile.business_address} onChange={e => setProfile({ ...profile, business_address: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg mb-4">Invoice Defaults</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.default_currency} onChange={e => setProfile({ ...profile, default_currency: e.target.value })}>
                  {Object.entries(CURRENCIES).map(([code, c]) => (
                    <option key={code} value={code}>{code} — {c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Tax Rate (%)</label>
                <input type="number" step="0.5" min="0" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.default_tax_rate || ""} onChange={e => setProfile({ ...profile, default_tax_rate: Number(e.target.value) })} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={profile.default_payment_terms} onChange={e => setProfile({ ...profile, default_payment_terms: e.target.value })}>
                <option>Net 15</option>
                <option>Net 30</option>
                <option>Net 45</option>
                <option>Net 60</option>
                <option>Due on Receipt</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Invoice Notes</label>
              <textarea className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="e.g., Thank you for your business! Payment due within 30 days." value={profile.default_notes} onChange={e => setProfile({ ...profile, default_notes: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
            {saving ? "Saving..." : "Save Settings"}
          </button>
          {saved && <span className="text-green-600 text-sm font-medium">Settings saved!</span>}
        </div>
      </form>
    </AppShell>
  );
}
