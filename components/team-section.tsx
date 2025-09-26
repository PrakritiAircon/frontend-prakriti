"use client"

import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function TeamSection() {
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

  const teamMembers = [
    {
      name: "Anurag Sharma",
      // position: "Founder & CEO",
      phone: "9171743927",
      email: "anurag@prakritiaircon.com",
      address: "Mumbai, Maharashtra",
      specialization: "HVAC Systems Design & Strategy",
      experience: "15+ Years",
      image: "/professional-indian-businessman-in-suit-smiling.jpg",
    },
    {
      name: "Prafull Atre",
      // position: "Technical Director",
      phone: "9876543210",
      email: "prafull@prakritiaircon.com",
      address: "Pune, Maharashtra",
      specialization: "Ducting & Installation",
      experience: "12+ Years",
      image: "/professional-indian-engineer-with-hard-hat.jpg",
    },
    {
      name: "Shivam Dave",
      // position: "Operations Manager",
      phone: "9123456789",
      email: "shivam@prakritiaircon.com",
      address: "Delhi, NCR",
      specialization: "Project Management",
      experience: "10+ Years",
      image: "/professional-indian-manager-in-business-attire.jpg",
    },
    {
      name: "Sourabh Patidar",
      // position: "Service Head",
      phone: "9234567890",
      email: "sourabh@prakritiaircon.com",
      address: "Indore, Madhya Pradesh",
      specialization: "Maintenance & Support",
      experience: "8+ Years",
      image: "/professional-indian-technician-with-tools.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                Meet Our Experts
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Professional Team</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Meet the dedicated professionals who make Prakriti Aircon the leading HVAC solution provider. Our team
              combines decades of experience with cutting-edge expertise to deliver exceptional results.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll gradient-card border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      {/* <p className="text-primary font-semibold mb-2">{member.position}</p> */}
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full">
                          {member.experience}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">{member.specialization}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors truncate"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{member.address}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Work with Our Experts?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with our professional team for personalized HVAC solutions tailored to your needs.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
