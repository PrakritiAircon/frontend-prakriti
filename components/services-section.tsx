"use client"

import { Wrench, Settings, Wind, ArrowRight, CheckCircle, Zap, Shield, Leaf } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    icon: Wrench,
    title: "Premium Ducting Materials",
    description:
      "Industry-leading GI and SS ducting materials engineered for maximum durability, corrosion resistance, and optimal performance in every environment.",
    features: [
      "Galvanized Iron (GI) Ducts — Superior corrosion resistance",
      "Stainless Steel (SS) Ducts — Premium grade material",
      "Insulated Ducting Systems — Maximum energy efficiency",
      "Custom Fabrication — Built to your exact specifications",
    ],
    benefits: ["15-yr warranty", "30% energy savings", "Noise reduction"],
    image: "/modern-hvac-ducting-materials.jpg",
    accent: "#06b6d4",
    iconGradient: "from-cyan-500 to-cyan-700",
    borderLight: "border-cyan-100 hover:border-cyan-300",
    borderDark: "dark:border-cyan-500/10 dark:hover:border-cyan-500/30",
    badgeLight: "bg-cyan-50 text-cyan-700",
    badgeDark: "dark:bg-cyan-500/10 dark:text-cyan-400",
    bgLight: "bg-gradient-to-b from-cyan-50/60 to-white",
    bgDark: "dark:bg-gradient-to-b dark:from-cyan-950/20 dark:to-slate-900/60",
  },
  {
    icon: Settings,
    title: "Professional Ducting Work",
    description:
      "Complete end-to-end ducting solutions from expert system design through precision installation to ongoing maintenance programs.",
    features: [
      "Advanced System Design — CAD-based planning & simulation",
      "Expert Installation — Certified HVAC technicians",
      "Preventive Maintenance — Scheduled service programs",
      "Performance Optimization — Ongoing efficiency audits",
    ],
    benefits: ["24/7 support", "Perf. guarantee", "Certified install"],
    image: "/professional-hvac-installation-work.jpg",
    accent: "#2563eb",
    iconGradient: "from-blue-500 to-blue-700",
    borderLight: "border-blue-100 hover:border-blue-300",
    borderDark: "dark:border-blue-500/10 dark:hover:border-blue-500/30",
    badgeLight: "bg-blue-50 text-blue-700",
    badgeDark: "dark:bg-blue-500/10 dark:text-blue-400",
    bgLight: "bg-gradient-to-b from-blue-50/60 to-white",
    bgDark: "dark:bg-gradient-to-b dark:from-blue-950/20 dark:to-slate-900/60",
  },
  {
    icon: Wind,
    title: "Symphony Evaporative Coolers",
    description:
      "Authorized Symphony dealer offering genuine evaporative cooling systems delivering superior comfort while reducing energy consumption significantly.",
    features: [
      "Genuine Symphony Products — Authentic, full warranty",
      "Energy Efficient Tech — Up to 80% less power consumption",
      "Eco-Friendly Operation — Zero harmful emissions",
      "Natural Air Purification — Superior indoor air quality",
    ],
    benefits: ["Official warranty", "90% energy saving", "Eco-friendly"],
    image: "/eco-friendly-evaporative-cooling-system.jpg",
    accent: "#10b981",
    iconGradient: "from-emerald-500 to-teal-600",
    borderLight: "border-emerald-100 hover:border-emerald-300",
    borderDark: "dark:border-emerald-500/10 dark:hover:border-emerald-500/30",
    badgeLight: "bg-emerald-50 text-emerald-700",
    badgeDark: "dark:bg-emerald-500/10 dark:text-emerald-400",
    bgLight: "bg-gradient-to-b from-emerald-50/60 to-white",
    bgDark: "dark:bg-gradient-to-b dark:from-emerald-950/20 dark:to-slate-900/60",
  },
]

const highlights = [
  { icon: Shield,       title: "Quality Assured",  desc: "ISO certified processes" },
  { icon: Zap,          title: "Energy Efficient", desc: "Up to 40% cost savings"  },
  { icon: Leaf,         title: "Eco-Friendly",     desc: "Sustainable solutions"   },
  { icon: CheckCircle,  title: "Guaranteed",       desc: "100% satisfaction"       },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 120)
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
    <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0f1629]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            Comprehensive HVAC Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge ducting materials to professional installation and authentic Symphony cooling
            systems — we guarantee genuine products, expert installation, and full warranty support.
          </p>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className={`animate-on-scroll group ${svc.bgLight} ${svc.bgDark} border ${svc.borderLight} ${svc.borderDark} rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-2xl dark:hover:shadow-black/40 hover:-translate-y-1.5 flex flex-col`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={svc.image || "/placeholder.svg"}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${svc.iconGradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-5.5 w-5.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{svc.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-5 flex-1">
                    {svc.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: svc.accent }} />
                        <span className="text-slate-600 dark:text-slate-400 text-[0.82rem] leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefit chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.benefits.map((b, bi) => (
                      <span key={bi} className={`${svc.badgeLight} ${svc.badgeDark} text-xs font-semibold px-2.5 py-1 rounded-full`}>
                        {b}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${svc.accent}e0, ${svc.accent})` }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── WHY CHOOSE HIGHLIGHT ── */}
        <div className="animate-on-scroll">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 sm:p-10 border border-white/5">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Why Our Services Stand Apart</h3>
              <p className="text-slate-500 text-sm">Enterprise-grade solutions for every scale of project</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <div key={i} className="text-center p-4 rounded-xl bg-white/4 hover:bg-white/8 transition-colors duration-300 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="font-bold text-white text-sm mb-0.5">{h.title}</div>
                    <div className="text-slate-500 text-xs">{h.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
