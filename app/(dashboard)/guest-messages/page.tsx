import { DataTable } from "@/components/ui/data-table";

export default function GuestMessagesPage() {
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Guest Messages</h1><DataTable headers={["Name","Message","Visibility"]} rows={[["Andi","Selamat ya!","show"],["Budi","Happy wedding","hidden"]]} /></div>;
}
