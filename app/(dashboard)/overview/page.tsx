import { AnalyticsChart } from "@/components/ui/analytics-chart";
import { StatCard } from "@/components/ui/stat-card";

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid gap-4 md:grid-cols-5">
        <StatCard label="Total Invitations" value="12" />
        <StatCard label="Total RSVP" value="245" />
        <StatCard label="Guest Messages" value="189" />
        <StatCard label="Invitation Views" value="3,284" />
        <StatCard label="Attendance Rate" value="72%" />
      </div>
      <AnalyticsChart />
    </div>
  );
}
