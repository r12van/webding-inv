create extension if not exists "pgcrypto";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  plan text default 'FREE',
  created_at timestamptz default now()
);

create table if not exists invitations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  slug text not null unique,
  theme text not null default 'Classic Elegant',
  status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists invitation_couples (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  bride_name text,
  groom_name text,
  bride_parents text,
  groom_parents text,
  love_story text
);

create table if not exists invitation_events (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  akad_date date,
  akad_time text,
  akad_venue text,
  reception_date date,
  reception_time text,
  reception_venue text,
  maps_link text
);

create table if not exists invitation_gallery (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  image_url text not null,
  sort_order int default 0
);

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  name text not null,
  whatsapp text,
  guest_count int default 1,
  status text not null default 'pending',
  message text,
  created_at timestamptz default now()
);

create table if not exists guest_messages (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  name text not null,
  message text not null,
  is_hidden boolean default false,
  created_at timestamptz default now()
);

create table if not exists gift_accounts (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  bank_name text,
  account_number text,
  account_holder text,
  wallet_name text,
  wallet_number text
);

create table if not exists gift_confirmations (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references invitations(id) on delete cascade,
  sender_name text,
  amount numeric,
  note text,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  plan text not null,
  status text not null default 'active',
  current_period_end timestamptz
);

create table if not exists white_label_settings (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  brand_name text,
  logo_url text,
  custom_domain text
);

alter table profiles enable row level security;
alter table invitations enable row level security;
alter table rsvps enable row level security;
alter table guest_messages enable row level security;
alter table gift_accounts enable row level security;

create policy "users manage own profile" on profiles for all using (auth.uid() = id);
create policy "users manage own invitations" on invitations for all using (auth.uid() = user_id);
create policy "users manage own rsvp" on rsvps for all using (
  invitation_id in (select id from invitations where user_id = auth.uid())
);
create policy "users manage own messages" on guest_messages for all using (
  invitation_id in (select id from invitations where user_id = auth.uid())
);
create policy "users manage own gifts" on gift_accounts for all using (
  invitation_id in (select id from invitations where user_id = auth.uid())
);

insert into storage.buckets (id, name, public) values
  ('cover-images', 'cover-images', true),
  ('couple-photos', 'couple-photos', true),
  ('gallery-images', 'gallery-images', true),
  ('white-label-logo', 'white-label-logo', true)
on conflict (id) do nothing;
