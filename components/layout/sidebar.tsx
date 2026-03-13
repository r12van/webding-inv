import Link from "next/link";

const menu = [
  ["Overview", "/overview"],
  ["Invitations", "/invitations"],
  ["Create Invitation", "/create-invitation"],
  ["RSVP Management", "/rsvp"],
  ["Guest Messages", "/guest-messages"],
  ["Digital Gift Settings", "/digital-gift"],
  ["Theme Settings", "/theme-settings"],
  ["Analytics", "/analytics"],
  ["Subscription", "/subscription"],
  ["White Label", "/white-label"],
  ["Account Settings", "/account-settings"]
];

export function Sidebar() {
  return (
    <aside className="h-full w-72 border-r border-slate-200 bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Dashboard</h2>
      <div className="space-y-1">
        {menu.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100">
            {label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
