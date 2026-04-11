-- InvoiceQuick Database Schema
-- Run this in your Supabase SQL Editor

-- User profiles (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  business_name text default '',
  business_email text default '',
  business_phone text default '',
  business_address text default '',
  logo_url text default '',
  default_currency text default 'USD',
  default_tax_rate numeric(5,2) default 0,
  default_payment_terms text default 'Net 30',
  default_notes text default '',
  plan text default 'free' check (plan in ('free', 'pro', 'business')),
  is_admin boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Clients
create table if not exists public.clients (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  email text default '',
  phone text default '',
  address text default '',
  notes text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Invoices
create table if not exists public.invoices (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  client_id uuid references public.clients(id) on delete set null,
  invoice_number text not null,
  status text default 'draft' check (status in ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  -- Sender info (snapshot at creation time)
  from_name text default '',
  from_email text default '',
  from_phone text default '',
  from_address text default '',
  -- Client info (snapshot)
  to_name text default '',
  to_email text default '',
  to_address text default '',
  -- Dates
  invoice_date date default current_date,
  due_date date default (current_date + interval '30 days'),
  paid_date date,
  -- Financials
  currency text default 'USD',
  subtotal numeric(12,2) default 0,
  tax_rate numeric(5,2) default 0,
  tax_amount numeric(12,2) default 0,
  discount_rate numeric(5,2) default 0,
  discount_amount numeric(12,2) default 0,
  total numeric(12,2) default 0,
  -- Extra
  notes text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Invoice line items
create table if not exists public.invoice_items (
  id uuid default gen_random_uuid() primary key,
  invoice_id uuid references public.invoices(id) on delete cascade not null,
  description text default '',
  quantity numeric(10,2) default 1,
  rate numeric(12,2) default 0,
  amount numeric(12,2) default 0,
  sort_order int default 0
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.invoices enable row level security;
alter table public.invoice_items enable row level security;

-- RLS Policies: users can only access their own data
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "Users can view own clients" on public.clients for select using (auth.uid() = user_id);
create policy "Users can insert own clients" on public.clients for insert with check (auth.uid() = user_id);
create policy "Users can update own clients" on public.clients for update using (auth.uid() = user_id);
create policy "Users can delete own clients" on public.clients for delete using (auth.uid() = user_id);

create policy "Users can view own invoices" on public.invoices for select using (auth.uid() = user_id);
create policy "Users can insert own invoices" on public.invoices for insert with check (auth.uid() = user_id);
create policy "Users can update own invoices" on public.invoices for update using (auth.uid() = user_id);
create policy "Users can delete own invoices" on public.invoices for delete using (auth.uid() = user_id);

create policy "Users can view own invoice items" on public.invoice_items for select using (
  exists (select 1 from public.invoices where invoices.id = invoice_items.invoice_id and invoices.user_id = auth.uid())
);
create policy "Users can insert own invoice items" on public.invoice_items for insert with check (
  exists (select 1 from public.invoices where invoices.id = invoice_items.invoice_id and invoices.user_id = auth.uid())
);
create policy "Users can update own invoice items" on public.invoice_items for update using (
  exists (select 1 from public.invoices where invoices.id = invoice_items.invoice_id and invoices.user_id = auth.uid())
);
create policy "Users can delete own invoice items" on public.invoice_items for delete using (
  exists (select 1 from public.invoices where invoices.id = invoice_items.invoice_id and invoices.user_id = auth.uid())
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Admin view for all users (only accessible by admin users via API)
create or replace view public.admin_stats as
select
  (select count(*) from public.profiles) as total_users,
  (select count(*) from public.invoices) as total_invoices,
  (select count(*) from public.invoices where status = 'paid') as paid_invoices,
  (select count(*) from public.clients) as total_clients,
  (select coalesce(sum(total), 0) from public.invoices where status = 'paid') as total_revenue_processed,
  (select count(*) from public.profiles where created_at > now() - interval '7 days') as new_users_7d,
  (select count(*) from public.profiles where created_at > now() - interval '30 days') as new_users_30d,
  (select count(*) from public.profiles where plan = 'pro') as pro_users,
  (select count(*) from public.profiles where plan = 'business') as business_users;
