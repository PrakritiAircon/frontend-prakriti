"use client"

import { Shield, Star, DollarSign, Clock, Users, Award } from "lucide-react"
import { useEffect, useRef } from "react"

const reasons = [
  {
    icon: Shield,
    num: "01",
    title: "Expertise & Quality",
    desc: "15+ years of industry experience with certified professionals and premium, ISO-tested materials.",
    from: "from-cyan-500", to: "to-cyan-700",
    ring: "hover:ring-cyan-200 dark:hover:ring-cyan-500/20",
    bg: "hover:bg-cyan-50/60 dark:hover:bg-cyan-500/5",
  },
  {
    icon: Award,
    num: "02",
    title: "Symphony Official Dealer",
    desc: "Authorized dealer providing genuine Symphony products with full manufacturer warranty and certified installation.",
    from: "from-amber-500", to: "to-orange-600",
    ring: "hover:ring-amber-200 dark:hover:ring-amber-500/20",
    bg: "hover:bg-amber-50/60 dark:hover:bg-amber-500/5",
  },
  {
    icon: Star,
    num: "03",
    title: "Customer Satisfaction",
    desc: "100% customer satisfaction rate — backed by personalized service, transparent communication, and ongoing support.",
    from: "from-emerald-500", to: "to-teal-600",
    ring: "hover:ring-emerald-200 dark:hover:ring-emerald-500/20",
    bg: "hover:bg-emerald-50/60 dark:hover:bg-emerald-500/5",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "Competitive Pricing",
    desc: "Fair, transparent pricing with zero hidden costs, detailed written quotes, and flexible payment options.",
    from: "from-violet-500", to: "to-purple-600",
    ring: "hover:ring-violet-200 dark:hover:ring-violet-500/20",
    bg: "hover:bg-violet-50/60 dark:hover:bg-violet-500/5",
  },
  {
    icon: Clock,
    num: "05",
    title: "Timely Delivery",
    desc: "On-time project completion with rigorous workflow management, milestone tracking, and reliable scheduling.",
    from: "from-orange-500", to: "to-red-500",
    ring: "hover:ring-orange-200 dark:hover:ring-orange-500/20",
    bg: "hover:bg-orange-50/60 dark:hover:bg-orange-500/5",
  },
  {
    icon: Users,
    num: "06",
    title: "Professional Team",
    desc: "Skilled, factory-trained technicians and engineers committed to safety, quality, and excellence on every project.",
    from: "from-blue-500", to: "to-indigo-600",
    ring: "hover:ring-blue-200 dark:hover:ring-blue-500/20",
    bg: "hover:bg-blue-50/60 dark:hover:bg-blue-500/5",
  },
]

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 80)
            )
          }
        })
      },
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0a0f1a]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Our Advantages
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            Why Choose Prakriti Aircon?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with customer-focused service to deliver exceptional HVAC solutions.
            As Symphony&apos;s official dealer, we guarantee authentic products with complete warranty support.
          </p>
        </div>

        {/* ── REASONS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={i}
                className={`animate-on-scroll group bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/6 rounded-2xl p-6 sm:p-7 ring-1 ring-transparent transition-all duration-350 hover:shadow-lg dark:hover:shadow-black/30 hover:-translate-y-1 ${r.ring} ${r.bg}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.from} ${r.to} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5.5 w-5.5 text-white" />
                  </div>
                  <span className="text-3xl font-black text-slate-100 dark:text-white/5 select-none leading-none">{r.num}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2.5 leading-snug">{r.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-[0.83rem] leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

        {/* ── STATS STRIP ── */}
        <div className="mt-12 animate-on-scroll">
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/6 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-200 dark:divide-white/6">
              {[
                { number: "15+",   label: "Years of Excellence" },
                { number: "1,000+",label: "Projects Completed"  },
                { number: "500+",  label: "Happy Clients"       },
                { number: "24 / 7",label: "Support Available"   },
              ].map((s, i) => (
                <div key={i} className="text-center px-4 sm:px-8 py-2">
                  <div className="text-2xl sm:text-3xl font-black gradient-text mb-0.5 tracking-tight">{s.number}</div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs sm:text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
