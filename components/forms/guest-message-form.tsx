export function GuestMessageForm() {
  return (
    <form className="card grid gap-3" action="#">
      <input className="rounded border p-2" placeholder="Nama" />
      <textarea className="rounded border p-2" placeholder="Ucapan" />
      <button className="rounded bg-brand-500 p-2 text-white">Kirim Ucapan</button>
    </form>
  );
}
