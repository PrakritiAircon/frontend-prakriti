"use client"

import { CheckCircle, Users, Award, Clock, Target, Eye, Leaf, Zap } from "lucide-react"
import { useEffect, useRef } from "react"

const stats = [
  { icon: Users,       number: "500+",  label: "Happy Clients",  from: "from-cyan-500",   to: "to-cyan-700"   },
  { icon: Award,       number: "50+",   label: "Industry Awards", from: "from-blue-500",  to: "to-blue-700"   },
  { icon: Clock,       number: "24 / 7",label: "Support",        from: "from-indigo-500", to: "to-indigo-700" },
  { icon: CheckCircle, number: "99.8%", label: "Success Rate",   from: "from-violet-500", to: "to-violet-700" },
]

const qualities = [
  { icon: CheckCircle, title: "Premium Quality Assurance", desc: "ISO certified materials and rigorous testing ensure lasting performance across every installation.", color: "text-cyan-500" },
  { icon: Leaf,        title: "Eco-Friendly Solutions",    desc: "Sustainable, energy-efficient systems that reduce carbon footprint by up to 40%.",              color: "text-emerald-500" },
  { icon: Users,       title: "Expert Professional Team",  desc: "Certified technicians with 10+ years of experience and ongoing industry training.",             color: "text-blue-500" },
]

const coreValues = [
  { icon: Zap,         title: "Innovation",  desc: "Continuously adopting cutting-edge technologies and sustainable practices to deliver superior solutions.", color: "text-cyan-400",   bg: "bg-cyan-500/10 dark:bg-cyan-500/8"   },
  { icon: CheckCircle, title: "Integrity",   desc: "Building trust through transparent communication, honest pricing, and reliable service delivery.",        color: "text-blue-400",   bg: "bg-blue-500/10 dark:bg-blue-500/8"   },
  { icon: Award,       title: "Excellence",  desc: "Maintaining the highest standards in every project, from initial consultation to final installation.",    color: "text-violet-400", bg: "bg-violet-500/10 dark:bg-violet-500/8" },
]

export function AboutSection() {
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
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0a0f1a]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            About Our Company
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            About Prakriti Aircon
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            India&apos;s leading provider of comprehensive HVAC solutions — delivering energy-efficient,
            sustainable climate control for residential and commercial clients since 2009.
            Authorized Symphony Official Dealer with genuine products and complete warranty.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">

          {/* LEFT: Mission / Vision / Qualities */}
          <div className="lg:col-span-3 space-y-5 animate-on-scroll">
            {/* Mission */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-7 hover:border-cyan-200 dark:hover:border-cyan-500/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/12 flex items-center justify-center">
                  <Target className="h-4.5 w-4.5 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                To revolutionize the HVAC industry through innovative, eco-friendly, and energy-efficient
                climate solutions that enhance comfort while protecting our environment. As Symphony&apos;s
                trusted partner, we deliver authentic cooling with complete warranty support.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-7 hover:border-blue-200 dark:hover:border-blue-500/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/12 flex items-center justify-center">
                  <Eye className="h-4.5 w-4.5 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                To become India&apos;s most trusted and innovative HVAC company, setting new standards for
                sustainability, efficiency, and customer satisfaction — making every space we touch
                greener and more comfortable.
              </p>
            </div>

            {/* Quality points */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-7">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-5">Why Clients Trust Us</h4>
              <div className="space-y-5">
                {qualities.map((q, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <q.icon className={`h-4.5 w-4.5 ${q.color} mt-0.5 flex-shrink-0`} />
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{q.title}</div>
                      <div className="text-slate-500 dark:text-slate-500 text-[0.8rem] mt-0.5 leading-relaxed">{q.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Stats grid */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={i}
                    className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center hover:border-cyan-200 dark:hover:border-cyan-500/20 hover:shadow-lg dark:hover:shadow-cyan-500/5 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.from} ${s.to} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5.5 w-5.5 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">{s.number}</div>
                    <div className="text-slate-500 dark:text-slate-500 text-xs font-medium">{s.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── CORE VALUES ── */}
        <div className="animate-on-scroll">
          <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 sm:p-12 overflow-hidden border border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(6,182,212,1), transparent 55%), radial-gradient(circle at 80% 50%, rgba(37,99,235,1), transparent 55%)" }} />

            <div className="relative z-10 text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Our Core Values</h3>
              <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
                The principles that guide every project, every conversation, and every installation.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {coreValues.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="border border-white/8 rounded-xl p-6 hover:bg-white/4 transition-colors duration-300">
                    <div className={`w-9 h-9 rounded-lg ${v.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-4.5 w-4.5 ${v.color}`} />
                    </div>
                    <h4 className="font-bold text-white text-base mb-2">{v.title}</h4>
                    <p className="text-slate-500 text-[0.82rem] leading-relaxed">{v.desc}</p>
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
