export default function ForgotPasswordPage() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center">
      <form className="card w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <input className="w-full rounded border p-2" placeholder="Email" />
        <button className="w-full rounded bg-brand-500 p-2 text-white">Kirim Link Reset</button>
      </form>
    </main>
  );
}
