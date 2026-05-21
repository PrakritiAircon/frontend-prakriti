"use client"

import { ArrowRight, Play, Wind, Zap, Shield, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { number: "1,000+", label: "Projects Delivered", icon: Wind },
  { number: "15+",    label: "Years of Excellence", icon: Zap },
  { number: "99.8%",  label: "Client Satisfaction", icon: Users },
  { number: "24 / 7", label: "Technical Support", icon: Shield },
]

const trustedBrands = [
  "Symphony", "GI Ducting", "SS Ducting", "HVAC Systems", "Evaporative Cooling", "Energy Audits",
  "Symphony", "GI Ducting", "SS Ducting", "HVAC Systems", "Evaporative Cooling", "Energy Audits",
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll(".animate-on-scroll")
          els.forEach((el, i) => setTimeout(() => el.classList.add("animate"), i * 140))
        }
      },
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-hero"
    >
      {/* ── ANIMATED ORBS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-orb-1 absolute top-[18%] left-[8%] w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 68%)", filter: "blur(48px)" }} />
        <div className="animate-orb-2 absolute top-[25%] right-[10%] w-[380px] h-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 68%)", filter: "blur(48px)" }} />
        <div className="animate-orb-3 absolute bottom-[15%] left-[45%] w-[340px] h-[340px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 68%)", filter: "blur(56px)" }} />
      </div>

      {/* ── GRID OVERLAY ── */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-36 pb-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow badge */}
          <div className={`mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              Symphony Official Dealer &nbsp;·&nbsp; India&apos;s Premier HVAC Provider
            </span>
          </div>

          {/* Headline */}
          <div className={`mb-5 transition-all duration-700 delay-75 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h1 className="font-black leading-[0.92] tracking-tight">
              <span className="block text-white text-[clamp(2.8rem,8vw,6rem)]">Prakriti</span>
              <span className="block gradient-text-light text-[clamp(2.8rem,8vw,6rem)]">Aircon</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className={`mb-5 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-lg sm:text-2xl text-white/60 font-light tracking-wide">
              Creating Your Climate of Comfort
            </p>
          </div>

          {/* Description */}
          <div className={`mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-[0.95rem] sm:text-[1.05rem] text-white/40 max-w-2xl mx-auto leading-relaxed">
              From precision ducting systems to authentic Symphony evaporative coolers —
              we engineer comfortable, energy-efficient environments for residential, commercial
              and industrial clients across India.
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Request Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-white/25 w-full sm:w-auto justify-center"
            >
              <span className="w-8 h-8 rounded-full bg-white/12 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
              </span>
              View Our Projects
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  className="glass rounded-xl p-4 sm:p-5 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-cyan-400 mx-auto mb-2.5" />
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight mb-0.5">{s.number}</div>
                  <div className="text-[0.7rem] sm:text-xs text-white/45 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── TRUSTED BY TICKER ── */}
      <div className="relative z-10 border-t border-white/6 mt-4 py-4 overflow-hidden">
        <div className="flex items-center gap-0 whitespace-nowrap animate-ticker">
          {trustedBrands.map((brand, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-white/25 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ── BOTTOM FADE — adapts to light/dark ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white dark:from-[#0a0f1a] to-transparent pointer-events-none" />
    </section>
  )
}
