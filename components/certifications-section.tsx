"use client"

import { Award, Shield, CheckCircle, Star, Trophy, FileCheck } from "lucide-react"
import { useEffect, useRef } from "react"

const certs = [
  {
    icon: Award,
    title: "Symphony Official Dealer",
    desc: "Authorized dealership certificate for Symphony evaporative cooling systems",
    year: "2025", status: "Active",
    from: "from-amber-500", to: "to-orange-500",
    borderLight: "border-amber-100", borderDark: "dark:border-amber-500/12",
    badgeLight: "bg-amber-100 text-amber-700", badgeDark: "dark:bg-amber-500/12 dark:text-amber-400",
    bgLight: "bg-gradient-to-br from-amber-50/70 to-orange-50/40",
    bgDark: "dark:bg-gradient-to-br dark:from-amber-950/20 dark:to-transparent",
  },
  {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    desc: "Quality management system certification for comprehensive HVAC services",
    year: "2025", status: "Certified",
    from: "from-emerald-500", to: "to-teal-500",
    borderLight: "border-emerald-100", borderDark: "dark:border-emerald-500/12",
    badgeLight: "bg-emerald-100 text-emerald-700", badgeDark: "dark:bg-emerald-500/12 dark:text-emerald-400",
    bgLight: "bg-gradient-to-br from-emerald-50/70 to-teal-50/40",
    bgDark: "dark:bg-gradient-to-br dark:from-emerald-950/20 dark:to-transparent",
  },
  {
    icon: FileCheck,
    title: "HVAC Excellence Certificate",
    desc: "Professional certification for heating, ventilation and air conditioning engineering",
    year: "2018", status: "Certified",
    from: "from-violet-500", to: "to-purple-600",
    borderLight: "border-violet-100", borderDark: "dark:border-violet-500/12",
    badgeLight: "bg-violet-100 text-violet-700", badgeDark: "dark:bg-violet-500/12 dark:text-violet-400",
    bgLight: "bg-gradient-to-br from-violet-50/70 to-purple-50/40",
    bgDark: "dark:bg-gradient-to-br dark:from-violet-950/20 dark:to-transparent",
  },
  {
    icon: Trophy,
    title: "Best HVAC Service Provider",
    desc: "Regional industry award for outstanding customer service and quality workmanship",
    year: "2023", status: "Winner",
    from: "from-blue-500", to: "to-indigo-600",
    borderLight: "border-blue-100", borderDark: "dark:border-blue-500/12",
    badgeLight: "bg-blue-100 text-blue-700", badgeDark: "dark:bg-blue-500/12 dark:text-blue-400",
    bgLight: "bg-gradient-to-br from-blue-50/70 to-indigo-50/40",
    bgDark: "dark:bg-gradient-to-br dark:from-blue-950/20 dark:to-transparent",
  },
]

const trackRecord = [
  { icon: CheckCircle, number: "1,000+", label: "Projects Completed"  },
  { icon: Star,        number: "15+",    label: "Years Experience"    },
  { icon: Trophy,      number: "99.8%",  label: "Satisfaction Rate"   },
  { icon: Shield,      number: "24 / 7", label: "Support Available"   },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 90)
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
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0f1629]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Certifications &amp; Awards
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            Trusted &amp; Certified Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our certifications and awards reflect our unwavering commitment to quality, professionalism,
            and customer satisfaction across the HVAC industry.
          </p>
        </div>

        {/* ── CERT CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {certs.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className={`animate-on-scroll group ${c.bgLight} ${c.bgDark} border ${c.borderLight} ${c.borderDark} rounded-2xl p-6 sm:p-8 hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-350`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">{c.title}</h3>
                      <span className={`text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full ${c.badgeLight} ${c.badgeDark}`}>{c.status}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-[0.82rem] leading-relaxed mb-2.5">{c.desc}</p>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-600 text-[0.75rem] font-medium">
                      <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                      Since {c.year}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── TRACK RECORD ── */}
        <div className="animate-on-scroll">
          <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 sm:p-12 overflow-hidden border border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(6,182,212,1), transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,99,235,1), transparent 50%)" }} />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">Our Track Record</h3>
                <p className="text-slate-500 text-sm">Numbers that demonstrate our commitment to excellence</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
                {trackRecord.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/8 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-5.5 w-5.5 text-cyan-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">{t.number}</div>
                      <div className="text-slate-500 text-xs font-medium">{t.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
