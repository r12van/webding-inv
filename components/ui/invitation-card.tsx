export function InvitationCard({ title, slug, status }: { title: string; slug: string; status: string }) {
  return (
    <div className="card space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-500">/{slug}</p>
      <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-xs">{status}</span>
    </div>
  );
}
