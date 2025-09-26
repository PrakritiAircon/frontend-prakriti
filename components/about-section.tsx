"use client"

import { CheckCircle, Users, Award, Clock, Target, Eye, Heart } from "lucide-react"
import { useEffect, useRef } from "react"

export function AboutSection() {
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

  return (
    <section id="about" className="py-24 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                About Our Company
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Prakriti Aircon</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              We are India's leading provider of comprehensive HVAC solutions, delivering high-quality,
              energy-efficient, and sustainable climate control systems for both residential and commercial clients.
              With over a decade of excellence, we've transformed thousands of spaces into comfortable, healthy
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize the HVAC industry by providing innovative, eco-friendly, and energy-efficient climate
                  solutions that enhance comfort while protecting our environment. We strive to exceed customer
                  expectations through superior service and cutting-edge technology.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the most trusted and innovative HVAC company in India, setting new standards for
                  sustainability, efficiency, and customer satisfaction. We envision a future where every space we touch
                  contributes to a greener, more comfortable world.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Premium Quality Assurance",
                    description: "ISO certified materials and rigorous testing standards ensure lasting performance",
                  },
                  {
                    icon: Heart,
                    title: "Eco-Friendly Solutions",
                    description: "Sustainable, energy-efficient systems that reduce carbon footprint by up to 40%",
                  },
                  {
                    icon: Users,
                    title: "Expert Professional Team",
                    description: "Certified technicians with 10+ years experience and continuous training",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors">
                    <item.icon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              {[
                { icon: Users, number: "500+", label: "Happy Clients", color: "text-primary" },
                { icon: Award, number: "50+", label: "Industry Awards", color: "text-secondary" },
                { icon: Clock, number: "24/7", label: "Support Available", color: "text-accent" },
                { icon: CheckCircle, number: "99.8%", label: "Success Rate", color: "text-primary" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="gradient-card p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon
                    className={`h-16 w-16 ${stat.color} mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  />
                  <h4 className="text-4xl font-bold text-foreground mb-3">{stat.number}</h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold gradient-text mb-4">Our Core Values</h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every service we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "Continuously adopting cutting-edge technologies and sustainable practices to deliver superior HVAC solutions.",
                },
                {
                  title: "Integrity",
                  description:
                    "Building trust through transparent communication, honest pricing, and reliable service delivery.",
                },
                {
                  title: "Excellence",
                  description:
                    "Maintaining the highest standards in every project, from initial consultation to final installation and beyond.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h4 className="text-2xl font-bold text-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
