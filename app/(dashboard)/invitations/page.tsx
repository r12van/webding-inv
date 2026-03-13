import { InvitationCard } from "@/components/ui/invitation-card";

export default function InvitationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Invitations</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <InvitationCard title="Ayu & Bima" slug="ayu-bima" status="published" />
        <InvitationCard title="Rina & Dito" slug="rina-dito" status="draft" />
      </div>
    </div>
  );
}
