import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";

export default function RSVPManagementPage() {
  return <div className="space-y-4"><h1 className="text-2xl font-bold">RSVP Management</h1><div className="grid gap-4 md:grid-cols-4"><StatCard label="Total RSVP" value="245"/><StatCard label="Attending" value="180"/><StatCard label="Declined" value="45"/><StatCard label="Pending" value="20"/></div><DataTable headers={["Name","WA","Guests","Status","Message"]} rows={[["Tamu A","08xxx","2","attending","Sampai jumpa"],["Tamu B","08xxx","1","not attending","Maaf berhalangan"]]} /></div>;
}
