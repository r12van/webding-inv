export default function RegisterPage() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center">
      <form className="card w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold">Register</h1>
        <input className="w-full rounded border p-2" placeholder="Nama" />
        <input className="w-full rounded border p-2" placeholder="Email" />
        <input className="w-full rounded border p-2" placeholder="Password" type="password" />
        <button className="w-full rounded bg-brand-500 p-2 text-white">Daftar</button>
      </form>
    </main>
  );
}
