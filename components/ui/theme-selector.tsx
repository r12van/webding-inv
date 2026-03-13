const themes = ["Classic Elegant", "Minimal Modern", "Romantic Floral", "Luxury Gold"];

export function ThemeSelector() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {themes.map((theme) => <button key={theme} className="card text-left hover:border-brand-500">{theme}</button>)}
    </div>
  );
}
