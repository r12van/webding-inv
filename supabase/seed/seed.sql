insert into profiles (id, full_name, plan)
values ('11111111-1111-1111-1111-111111111111', 'Demo User', 'PREMIUM')
on conflict (id) do nothing;

insert into invitations (id, user_id, title, slug, theme, status, published_at)
values
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Ayu & Bima Wedding', 'demo-wedding', 'Romantic Floral', 'published', now())
on conflict (id) do nothing;

insert into rsvps (invitation_id, name, whatsapp, guest_count, status, message)
values
  ('22222222-2222-2222-2222-222222222222', 'Tamu Demo', '08123456789', 2, 'attending', 'Selamat ya!');

insert into guest_messages (invitation_id, name, message)
values
  ('22222222-2222-2222-2222-222222222222', 'Sahabat', 'Happy wedding!');
