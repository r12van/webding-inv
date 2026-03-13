import { GuestMessageForm } from "@/components/forms/guest-message-form";
import { RSVPForm } from "@/components/forms/rsvp-form";
import { GiftCard } from "@/components/ui/gift-card";

export default async function PublicInvitationPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ to?: string }> }) {
  const { slug } = await params;
  const { to } = await searchParams;

  return (
    <main className="mx-auto max-w-2xl space-y-5 p-4">
      <section className="card text-center">
        <p className="text-sm uppercase tracking-wide">Opening Cover</p>
        {to ? <p className="mt-2 font-medium">Kepada Yth. {to}</p> : null}
        <h1 className="mt-3 text-3xl font-bold">Ayu & Bima</h1>
        <p className="text-slate-500">Slug: {slug}</p>
      </section>
      <section className="card">Couple names • wedding date • countdown timer</section>
      <section className="card">Love story</section>
      <section className="card">Event details + maps link</section>
      <section className="card">Gallery (Supabase Storage image URLs)</section>
      <RSVPForm />
      <GuestMessageForm />
      <GiftCard />
      <section className="card">Closing section</section>
    </main>
  );
}
