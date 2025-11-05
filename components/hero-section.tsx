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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              India's Leading HVAC Solutions Provider
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-gray-900 leading-none tracking-tight">
            Prakriti Aircon
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl mb-6 text-gray-700 font-light">Creating Your Climate of Comfort</p>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your space with our comprehensive HVAC solutions. From advanced ducting systems to eco-friendly evaporative coolers, we deliver comfort and efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Our Work
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "1000+", label: "Projects Completed", icon: "🏢" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "99.8%", label: "Customer Satisfaction", icon: "😊" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
