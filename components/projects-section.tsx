"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  { title: "Commercial Office Complex", category: "Commercial",  description: "Complete HVAC system for 50,000 sq ft office with energy-efficient ducting and smart zoning.", image: "/modern-office-hvac.png",                       tags: ["Ducting","Commercial","Energy Efficient"], year: "2024" },
  { title: "Residential Villa Project",  category: "Residential", description: "Custom Symphony evaporative cooling for a luxury villa with smart climate control integration.", image: "/luxury-villa-air-conditioning-system.jpg",    tags: ["Symphony Cooling","Residential","Smart Controls"], year: "2024" },
  { title: "Industrial Warehouse",       category: "Industrial",  description: "Large-scale ducting for warehouse with specialized ventilation and positive pressure zones.",   image: "/industrial-warehouse-ventilation-system.jpg", tags: ["Industrial","Ventilation","Large Scale"], year: "2023" },
  { title: "Hospital HVAC System",       category: "Healthcare",  description: "Critical-environment HVAC with HEPA filtration and precise temperature/humidity control.",      image: "/hospital-hvac-clean-room-system.jpg",         tags: ["Healthcare","Clean Room","Precision"], year: "2023" },
  { title: "Shopping Mall Climate",      category: "Commercial",  description: "Multi-zone climate system for large retail complex with automated energy optimization.",        image: "/shopping-mall-air-conditioning-system.jpg",   tags: ["Multi-Zone","Commercial","Energy Optimization"], year: "2023" },
  { title: "Data Center Cooling",        category: "Technology",  description: "Precision N+1 redundant cooling for a data center with 24/7 monitoring integration.",         image: "/data-center-cooling-system-servers.jpg",      tags: ["Data Center","Precision","Monitoring"], year: "2022" },
]

const filters = ["All", "Commercial", "Residential", "Industrial", "Healthcare", "Technology"]

const catColors: Record<string,string> = {
  Commercial:  "bg-blue-500",
  Residential: "bg-emerald-500",
  Industrial:  "bg-orange-500",
  Healthcare:  "bg-pink-500",
  Technology:  "bg-violet-500",
}

export function ProjectsSection() {
  const [active, setActive] = useState("All")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 70)
            )
          }
        })
      },
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const list = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#0a0f1a]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of successful HVAC installations across industries — from precision data centers
            to large commercial complexes and Symphony-cooled residential properties.
          </p>
        </div>

        {/* ── FILTER TABS ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-250 ${
                active === f
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {list.map((p, i) => (
            <div
              key={p.title}
              className="animate-on-scroll group bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-black/50 hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="h-4.5 w-4.5 text-white" />
                  </div>
                </div>
                {/* Category pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`inline-flex items-center gap-1.5 ${catColors[p.category] || "bg-slate-600"} text-white text-[0.7rem] font-bold px-2.5 py-1 rounded-full`}>
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5">
                  <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[0.7rem] font-medium px-2 py-0.5 rounded-full">{p.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-500 text-[0.82rem] leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag, ti) => (
                    <span key={ti} className="bg-slate-100 dark:bg-white/6 text-slate-600 dark:text-slate-400 text-[0.7rem] font-medium px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA STRIP ── */}
        <div className="mt-14 animate-on-scroll">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-6 sm:p-8">
            <div>
              <div className="text-slate-900 dark:text-white font-bold text-lg mb-1">Ready to start your project?</div>
              <div className="text-slate-500 dark:text-slate-500 text-sm">Get a free site consultation and competitive quote today</div>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-px whitespace-nowrap"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
