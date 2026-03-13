import { Navbar } from "@/components/layout/navbar";
import { PricingCard } from "@/components/marketing/pricing-card";

export default function MarketingPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20 text-center">
        <p className="text-sm text-brand-700">Platform Undangan Pernikahan Digital</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold">Bangun undangan elegan dalam hitungan menit dengan WedSaaS</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">Solusi multi-tenant untuk membuat, mengelola, dan menganalisis undangan pernikahan digital secara production-ready.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="rounded-xl bg-brand-500 px-6 py-3 text-white" href="/register">Coba Gratis</a>
          <a className="rounded-xl border px-6 py-3" href="/invite/demo-wedding">Lihat Demo</a>
        </div>
      </section>

      <section id="fitur" className="container-shell grid gap-4 py-14 md:grid-cols-3">
        {[
          "Template showcase & builder visual",
          "RSVP, ucapan tamu, amplop digital",
          "Analytics real-time + conversion"
        ].map((item) => <div key={item} className="card">{item}</div>)}
      </section>

      <section className="container-shell py-12">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{["Pilih template", "Isi data pasangan & acara", "Publish & bagikan link"].map((s) => <div key={s} className="card">{s}</div>)}</div>
      </section>

      <section className="container-shell py-12">
        <h2 className="text-3xl font-bold">Template Showcase</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">{["Classic Elegant", "Minimal Modern", "Romantic Floral", "Luxury Gold"].map((t) => <div key={t} className="card">{t}</div>)}</div>
      </section>

      <section className="container-shell py-12"><div className="card">RSVP & Analytics Showcase dengan grafik konversi dan keterlibatan tamu.</div></section>

      <section id="harga" className="container-shell py-12">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PricingCard name="FREE" price="Rp0" features={["1 invitation", "basic theme", "watermark"]} />
          <PricingCard name="PREMIUM" price="Rp149k" features={["premium themes", "digital gift", "analytics"]} />
          <PricingCard name="BUSINESS" price="Rp349k" features={["multi invitation", "white label", "custom domain placeholder"]} />
        </div>
      </section>

      <section className="container-shell py-12"><div className="card">Testimonials startup-style dari pasangan bahagia.</div></section>
      <section id="faq" className="container-shell py-12"><div className="card">FAQ: Integrasi pembayaran, batas tamu, dan dukungan custom domain.</div></section>
      <footer className="border-t py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} WedSaaS</footer>
    </main>
  );
}
