import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";

export default function AdminPage() {
  return (
    <main className="container-shell py-8 space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total Users" value="1,230" />
        <StatCard label="Active Invitations" value="3,450" />
        <StatCard label="MRR" value="Rp120jt" />
        <StatCard label="Churn" value="3.2%" />
      </div>
      <DataTable headers={["Tenant", "Plan", "Invitations", "Status"]} rows={[["Studio A","BUSINESS","22","active"],["Wedding Co","PREMIUM","7","active"]]} />
    </main>
  );
}
