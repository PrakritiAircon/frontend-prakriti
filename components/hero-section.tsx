"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wind, Thermometer, Leaf, Play } from "lucide-react"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 animate-gradient"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 animate-float">
          <Wind className="h-20 w-20 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
          <Thermometer className="h-16 w-16 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Leaf className="h-18 w-18 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                🌿 India's Leading HVAC Solutions Provider
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight">
              <span className="block">Prakriti</span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                Aircon
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light text-blue-100">Premium HVAC Solutions & Services</p>
            <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform your space with our comprehensive HVAC solutions. From advanced ducting systems to eco-friendly
              evaporative coolers, we deliver comfort, efficiency, and sustainability in every project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-on-scroll">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll">
            {[
              { number: "1000+", label: "Projects Completed", icon: "🏢" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "99.8%", label: "Customer Satisfaction", icon: "😊" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-on-scroll">
            <p className="text-white/70 mb-6 text-sm">Trusted by leading companies across India</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-20 h-12 bg-white/20 rounded-lg backdrop-blur-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
