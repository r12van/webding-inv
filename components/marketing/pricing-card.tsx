export function PricingCard({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="my-3 text-3xl font-bold">{price}</p>
      <ul className="space-y-2 text-sm">{features.map((f) => <li key={f}>• {f}</li>)}</ul>
      <button className="mt-4 w-full rounded bg-brand-500 py-2 text-white">Pilih Plan</button>
    </div>
  );
}
