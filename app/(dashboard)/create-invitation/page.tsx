import { BuilderSection } from "@/components/ui/builder-section";
import { ThemeSelector } from "@/components/ui/theme-selector";

const input = "w-full rounded border p-2";

export default function CreateInvitationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Invitation Builder</h1>
      <BuilderSection title="Basic Info"><div className="grid gap-3 md:grid-cols-3"><input className={input} placeholder="Title"/><input className={input} placeholder="Slug"/><select className={input}><option>draft</option><option>published</option></select></div></BuilderSection>
      <BuilderSection title="Couple Info"><div className="grid gap-3 md:grid-cols-2"><input className={input} placeholder="Bride name"/><input className={input} placeholder="Groom name"/><input className={input} placeholder="Bride parents"/><input className={input} placeholder="Groom parents"/><textarea className={`${input} md:col-span-2`} placeholder="Love story"/></div></BuilderSection>
      <BuilderSection title="Event Details"><div className="grid gap-3 md:grid-cols-2"><input className={input} placeholder="Akad date"/><input className={input} placeholder="Akad time"/><input className={input} placeholder="Akad venue"/><input className={input} placeholder="Reception date"/><input className={input} placeholder="Reception time"/><input className={input} placeholder="Reception venue"/><input className={input} placeholder="Maps link"/></div></BuilderSection>
      <BuilderSection title="Additional Content"><div className="grid gap-3 md:grid-cols-2"><input className={input} placeholder="Opening quote"/><input className={input} placeholder="Closing message"/><input className={input} placeholder="Wedding hashtag"/><input className={input} placeholder="Livestream link"/><input className={input} placeholder="Background music"/></div></BuilderSection>
      <BuilderSection title="Gallery"><p>Upload/reorder gallery images via Supabase Storage.</p></BuilderSection>
      <BuilderSection title="RSVP Settings"><div className="grid gap-3 md:grid-cols-3"><select className={input}><option>Enable RSVP</option><option>Disable RSVP</option></select><input className={input} placeholder="Max guests"/><input className={input} placeholder="Deadline"/></div></BuilderSection>
      <BuilderSection title="Theme Settings"><ThemeSelector /></BuilderSection>
      <BuilderSection title="Publish Settings"><div className="grid gap-3 md:grid-cols-2"><input className={input} placeholder="Preview link"/><select className={input}><option>Publish</option><option>Unpublish</option></select></div></BuilderSection>
    </div>
  );
}
