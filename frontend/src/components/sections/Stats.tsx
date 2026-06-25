import { stats } from "@/data/siteData"

export function Stats() {
  return (
    <section className="section-shell-sm bg-wine relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#c9a961_1px,_transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4 sm:py-0">
              <p className="text-5xl md:text-6xl font-semibold text-gold mb-2">{stat.value}</p>
              <p className="text-white/70 text-xs uppercase tracking-[0.25em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
