"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Settings, Wind, ArrowRight, CheckCircle, Zap, Shield, Leaf } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function ServicesSection() {
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
              }, index * 200)
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

  const services = [
    {
      icon: <Wrench className="h-16 w-16 text-primary" />,
      title: "Premium Ducting Materials",
      description:
        "Industry-leading GI and SS ducting materials engineered for maximum durability, corrosion resistance, and optimal performance in any environment.",
      features: [
        "Galvanized Iron (GI) Ducts - Superior corrosion resistance",
        "Stainless Steel (SS) Ducts - Premium grade materials",
        "Insulated Ducting Systems - Energy efficient solutions",
        "Custom Fabrication - Tailored to your specifications",
      ],
      benefits: ["15-year warranty", "Energy savings up to 30%", "Noise reduction technology"],
      color: "border-primary/20 hover:border-primary/60",
      bgGradient: "from-blue-50 to-blue-100",
      image: "/modern-hvac-ducting-materials.jpg",
    },
    {
      icon: <Settings className="h-16 w-16 text-secondary" />,
      title: "Professional Ducting Work",
      description:
        "Complete end-to-end ducting solutions from expert system design to precision installation and comprehensive maintenance services.",
      features: [
        "Advanced System Design - CAD-based planning",
        "Expert Installation - Certified technicians",
        "Preventive Maintenance - Regular service programs",
        "Performance Optimization - Efficiency improvements",
      ],
      benefits: ["24/7 emergency support", "Performance guarantee", "Certified installations"],
      color: "border-secondary/20 hover:border-secondary/60",
      bgGradient: "from-green-50 to-green-100",
      image: "/professional-hvac-installation-work.jpg",
    },
    {
      icon: <Wind className="h-16 w-16 text-accent" />,
      title: "Eco-Friendly Evaporative Coolers",
      description:
        "Revolutionary evaporative cooling systems that deliver superior comfort while reducing energy consumption and environmental impact significantly.",
      features: [
        "Energy Efficient Technology - 80% less power consumption",
        "Eco-Friendly Operation - Zero harmful emissions",
        "Superior Air Quality - Natural air purification",
        "Cost-Effective Cooling - Lowest operating costs",
      ],
      benefits: ["90% energy savings", "Improved air quality", "Eco-friendly operation"],
      color: "border-accent/20 hover:border-accent/60",
      bgGradient: "from-teal-50 to-teal-100",
      image: "/eco-friendly-evaporative-cooling-system.jpg",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-24 bg-background w-full overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-20 animate-on-scroll">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold">
                Our Premium Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gradient-text px-2">Comprehensive HVAC Solutions</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed px-4">
              From cutting-edge ducting materials to professional installation and eco-friendly cooling systems, we
              deliver complete HVAC solutions that exceed expectations and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 ${service.color} bg-gradient-to-br ${service.bgGradient} hover:scale-105 animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground text-center text-pretty leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-secondary" />
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 sm:mt-20 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-4xl font-bold gradient-text mb-4">Why Choose Our Services?</h3>
                <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-4">
                  We combine cutting-edge technology with decades of expertise to deliver unmatched HVAC solutions
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {[
                  { icon: Shield, title: "Quality Assured", desc: "ISO certified processes" },
                  { icon: Zap, title: "Energy Efficient", desc: "Up to 40% savings" },
                  { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable solutions" },
                  { icon: CheckCircle, title: "Guaranteed", desc: "100% satisfaction" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 sm:p-6 rounded-xl hover:bg-card/50 transition-colors">
                    <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-4" />
                    <h4 className="text-sm sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
