"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppShell from "@/components/AppShell";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  created_at: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Client | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;
    const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", authUser.id).single();
    setUser({ email: authUser.email!, isAdmin: profile?.is_admin || false });
    const { data } = await supabase.from("clients").select("*").eq("user_id", authUser.id).order("name");
    setClients(data || []);
    setLoading(false);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;

    if (editing) {
      await supabase.from("clients").update(form).eq("id", editing.id);
    } else {
      await supabase.from("clients").insert({ ...form, user_id: authUser.id });
    }
    setShowForm(false);
    setEditing(null);
    setForm({ name: "", email: "", phone: "", address: "", notes: "" });
    loadData();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this client? This cannot be undone.")) return;
    await supabase.from("clients").delete().eq("id", id);
    loadData();
  }

  function startEdit(client: Client) {
    setEditing(client);
    setForm({ name: client.name, email: client.email, phone: client.phone, address: client.address, notes: client.notes });
    setShowForm(true);
  }

  return (
    <AppShell user={user || undefined}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Clients</h1>
          <p className="text-gray-500 text-sm">{clients.length} client{clients.length !== 1 ? "s" : ""} saved</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditing(null); setForm({ name: "", email: "", phone: "", address: "", notes: "" }); }} className="btn-primary text-sm !py-2.5">
          + Add Client
        </button>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">{editing ? "Edit Client" : "Add New Client"}</h2>
            <form onSubmit={handleSave} className="space-y-3">
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Client Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Address" rows={2} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Notes" rows={2} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
              <div className="flex gap-2 pt-2">
                <button type="submit" className="btn-primary text-sm flex-1">Save Client</button>
                <button type="button" onClick={() => { setShowForm(false); setEditing(null); }} className="btn-secondary text-sm flex-1">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Client List */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : clients.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-400 text-lg mb-2">No clients yet</p>
          <p className="text-gray-400 text-sm">Add your first client to auto-fill invoices faster</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="card hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  {client.email && <p className="text-sm text-gray-500">{client.email}</p>}
                  {client.phone && <p className="text-sm text-gray-500">{client.phone}</p>}
                  {client.address && <p className="text-sm text-gray-400 mt-1 whitespace-pre-line">{client.address}</p>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(client)} className="text-indigo-600 hover:text-indigo-700 text-sm">Edit</button>
                  <button onClick={() => handleDelete(client.id)} className="text-red-400 hover:text-red-600 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
