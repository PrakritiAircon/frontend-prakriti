"use client"

import { Shield, Star, DollarSign, Clock, Users, Award } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Expertise & Quality",
      description: "15+ years of industry experience with certified professionals and premium materials.",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Symphony Official Dealer",
      description: "Authorized dealer providing genuine Symphony products with full warranty and expert installation.",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "100% customer satisfaction rate with personalized service and ongoing support.",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with no hidden costs and flexible payment options.",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time project completion with efficient workflow and reliable scheduling.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Skilled technicians and engineers committed to excellence in every project.",
      color: "text-indigo-600"
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Choose Prakriti Aircon?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We combine technical expertise with customer-focused service to deliver exceptional HVAC solutions that
              exceed expectations. As Symphony's official dealer, we guarantee authentic products with complete warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-100 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <IconComponent className={`h-8 w-8 ${reason.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground text-pretty leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}