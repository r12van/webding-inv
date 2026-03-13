export function RSVPForm() {
  return (
    <form className="card grid gap-3" action="#">
      <input className="rounded border p-2" placeholder="Nama" />
      <input className="rounded border p-2" placeholder="WhatsApp" />
      <input className="rounded border p-2" placeholder="Jumlah tamu" type="number" />
      <select className="rounded border p-2"><option>attending</option><option>not attending</option></select>
      <textarea className="rounded border p-2" placeholder="Pesan" />
      <button className="rounded bg-brand-500 p-2 text-white">Kirim RSVP</button>
    </form>
  );
}
