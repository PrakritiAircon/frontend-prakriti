"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Industries",
    role: "Factory Owner",
    rating: 5,
    text: "Prakriti Aircon transformed our factory's ventilation completely. The team was professional, on-schedule, and delivered exceptional quality. Our energy costs dropped 30% within two months.",
    image: "/professional-indian-businessman.png",
    highlight: "30% energy cost reduction",
    highlightColor: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Residency",
    role: "Homeowner",
    rating: 5,
    text: "The Symphony evaporative cooling system they installed is outstanding. Being an official dealer, they provided genuine products with full warranty. Eco-friendly and perfectly comfortable even in peak summer.",
    image: "/professional-indian-woman-homeowner.jpg",
    highlight: "Genuine Symphony products",
    highlightColor: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    name: "Dr. Amit Patel",
    company: "City Hospital",
    role: "Hospital Administrator",
    rating: 5,
    text: "For our hospital's critical HVAC requirements, Prakriti Aircon delivered well beyond expectations. The precision, clean-room compliance, and attention to detail is truly commendable.",
    image: "/indian-doctor-medical-professional.jpg",
    highlight: "Critical healthcare compliance",
    highlightColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    name: "Suresh Gupta",
    company: "Metro Mall",
    role: "Operations Manager",
    rating: 5,
    text: "Managing climate control for our large shopping complex was a challenge until we partnered with Prakriti Aircon. Their multi-zone system is flawless and the energy savings are remarkable.",
    image: "/indian-business-manager-retail.jpg",
    highlight: "Multi-zone perfection",
    highlightColor: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 100)
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
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our work speaks through the experiences of our clients across residential, commercial,
            industrial and healthcare projects.
          </p>
        </div>

        {/* ── AGGREGATE RATING ── */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-5 bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl px-7 py-5 shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 dark:text-white leading-none mb-1.5">4.9</div>
              <div className="flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-white/8" />
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">Based on 200+ reviews</div>
              <div className="text-slate-500 dark:text-slate-500 text-xs mt-0.5">Google · Justdial · Direct referrals</div>
            </div>
          </div>
        </div>

        {/* ── REVIEWS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll group relative bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-6 sm:p-8 hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-350 overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Hover gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/60 group-hover:to-blue-50/20 dark:group-hover:from-cyan-500/4 dark:group-hover:to-blue-500/2 transition-all duration-400 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Quote icon + stars */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Quote className="h-4.5 w-4.5 text-white fill-white/60" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight badge */}
                <span className={`inline-flex items-center gap-1.5 ${t.highlightColor} text-[0.72rem] font-semibold px-2.5 py-1 rounded-full mb-4`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  {t.highlight}
                </span>

                {/* Review text */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={t.image || "/placeholder-user.jpg"}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-slate-500 dark:text-slate-500 text-[0.75rem]">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 animate-on-scroll">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(6,182,212,1), transparent 55%)" }} />
            <div className="relative z-10">
              <div className="text-white font-black text-2xl sm:text-3xl mb-3 tracking-tight">
                Join 500+ Satisfied Clients
              </div>
              <p className="text-slate-500 mb-7 max-w-lg mx-auto text-sm sm:text-base">
                Experience the Prakriti Aircon difference — premium quality, genuine Symphony products, expert installation.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-px shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
              >
                Get Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
