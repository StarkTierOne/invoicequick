import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder"
    );
  }
  return _client;
}

// Convenience alias
export const supabase = {
  get auth() { return getSupabaseClient().auth; },
  from(table: string) { return getSupabaseClient().from(table); },
};
