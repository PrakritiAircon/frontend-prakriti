"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 w-full overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="hidden sm:inline">India's Leading HVAC Solutions Provider</span>
              <span className="sm:hidden">Leading HVAC Provider</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 text-gray-900 leading-none tracking-tight px-2">
            Prakriti Aircon
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-700 font-light px-2">Creating Your Climate of Comfort</p>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Transform your space with our comprehensive HVAC solutions. From advanced ducting systems to eco-friendly evaporative coolers, we deliver comfort and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200 hover:from-sky-300 hover:via-blue-300 hover:to-indigo-300 text-slate-700 hover:text-slate-800 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="hidden sm:inline">Get Free Consultation</span>
              <span className="sm:hidden">Free Consultation</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Watch Our Work
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto px-4">
            {[
              { number: "1000+", label: "Projects Completed", icon: "🏢" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "99.8%", label: "Customer Satisfaction", icon: "😊" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}