import { AnalyticsChart } from "@/components/ui/analytics-chart";
import { StatCard } from "@/components/ui/stat-card";

export default function AnalyticsPage() {
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Analytics</h1><div className="grid gap-4 md:grid-cols-4"><StatCard label="Views" value="3284"/><StatCard label="RSVP Conversion" value="28%"/><StatCard label="Message Count" value="189"/><StatCard label="Gift Confirmations" value="33"/></div><AnalyticsChart /></div>;
}
