import { Shield, Star, DollarSign, Clock, Users } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Expertise & Quality",
      description: "15+ years of industry experience with certified professionals and premium materials.",
    },
    {
      icon: <Star className="h-8 w-8 text-secondary" />,
      title: "Customer Satisfaction",
      description: "100% customer satisfaction rate with personalized service and ongoing support.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with no hidden costs and flexible payment options.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "On-time project completion with efficient workflow and reliable scheduling.",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Professional Team",
      description: "Skilled technicians and engineers committed to excellence in every project.",
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
              exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-muted group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-pretty">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
