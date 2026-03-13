# WedSaaS

Aplikasi SaaS production-ready untuk undangan pernikahan digital berbasis Next.js App Router, TypeScript, Tailwind CSS, dan Supabase.

## Area utama
- Marketing website (`/(marketing)`)
- Authentication (`/(auth)`)
- Dashboard user (`/(dashboard)`)
- Public invitation (`/invite/[slug]`)
- Admin panel (`/admin`)

## Setup
1. Copy `.env.example` ke `.env.local`.
2. Jalankan migration dan seed SQL ke project Supabase.
3. Install dependencies dan jalankan aplikasi.

## Struktur penting
- `app/` route groups dan halaman utama
- `components/` reusable UI components
- `lib/supabase/` helper client/server
- `supabase/migrations/001_init.sql` schema + RLS + storage buckets
- `supabase/seed/seed.sql` dummy seed data
