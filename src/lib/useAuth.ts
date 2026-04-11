"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

interface AuthUser {
  id: string;
  email: string;
  isAdmin: boolean;
}

export function useAuth(requireAuth: boolean = true) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) {
        if (requireAuth) {
          window.location.href = "/login";
          return;
        }
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", authUser.id)
        .single();

      setUser({
        id: authUser.id,
        email: authUser.email!,
        isAdmin: profile?.is_admin || false,
      });
      setLoading(false);
    }

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && requireAuth) {
        window.location.href = "/login";
      }
    });

    return () => subscription.unsubscribe();
  }, [requireAuth]);

  return { user, loading };
}
