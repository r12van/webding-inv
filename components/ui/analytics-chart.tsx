export function AnalyticsChart() {
  return (
    <div className="card">
      <h3 className="mb-3 font-semibold">Analytics Trend</h3>
      <div className="grid h-32 grid-cols-7 items-end gap-2">
        {[40, 65, 55, 80, 70, 90, 75].map((v, i) => (
          <div key={i} className="rounded-t bg-brand-500" style={{ height: `${v}%` }} />
        ))}
      </div>
    </div>
  );
}
