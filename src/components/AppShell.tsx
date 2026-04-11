"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/create", label: "New Invoice", icon: "➕" },
  { href: "/clients", label: "Clients", icon: "👥" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export default function AppShell({ children, user }: { children: React.ReactNode; user?: { email: string; isAdmin?: boolean } }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-40 hidden md:flex">
        <div className="p-5 border-b border-gray-100">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-lg">InvoiceQuick</span>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          {user?.isAdmin && (
            <Link
              href="/admin"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === "/admin"
                  ? "bg-red-50 text-red-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>🔑</span>
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 mb-2 truncate">{user?.email}</div>
          <button onClick={handleSignOut} className="text-sm text-red-600 hover:text-red-700 font-medium">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">IQ</div>
          <span className="font-bold">InvoiceQuick</span>
        </Link>
        <div className="flex gap-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`p-2 rounded-lg text-sm ${pathname === item.href ? "bg-indigo-50" : ""}`}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-64 mt-14 md:mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
