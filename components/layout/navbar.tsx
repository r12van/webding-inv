import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-700">WedSaaS</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#fitur">Fitur</a>
          <a href="#harga">Harga</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="flex gap-2">
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm">Masuk</Link>
          <Link href="/register" className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">Coba Gratis</Link>
        </div>
      </div>
    </header>
  );
}
