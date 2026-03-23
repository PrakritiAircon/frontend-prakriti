"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Star, Trophy, FileCheck } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      icon: Award,
      title: "Symphony Official Dealer",
      description: "Authorized dealer certificate for Symphony evaporative cooling systems",
      year: "2025",
      status: "Active",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification for HVAC services",
      year: "2025",
      status: "Certified",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: FileCheck,
      title: "HVAC Excellence Certification",
      description: "Professional certification for heating, ventilation, and air conditioning",
      year: "2018",
      status: "Certified",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Trophy,
      title: "Best HVAC Service Provider",
      description: "Regional award for outstanding customer service and quality work",
      year: "2023",
      status: "Winner",
      color: "bg-yellow-50 border-yellow-200"
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "15+", label: "Years Experience", icon: Star },
    { number: "99.8%", label: "Customer Satisfaction", icon: Trophy },
    { number: "24/7", label: "Support Available", icon: Shield }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                Certifications & Awards
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Trusted & Certified Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our certifications and awards reflect our commitment to quality, professionalism, 
              and customer satisfaction in the HVAC industry.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card key={index} className={`${cert.color} border-2`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-full bg-white shadow-lg">
                        <IconComponent className="h-12 w-12 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 text-pretty">
                          {cert.description}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          Year: {cert.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">Our Track Record</h3>
              <p className="text-muted-foreground text-lg">
                Numbers that speak for our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="p-4 rounded-full bg-primary/10 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
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