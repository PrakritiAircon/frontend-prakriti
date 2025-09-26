import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Industries",
      rating: 5,
      text: "Prakriti Aircon transformed our factory's ventilation system. The team was professional, timely, and delivered exceptional quality work. Our energy costs have reduced by 30%!",
      image: "/professional-indian-businessman.png",
    },
    {
      name: "Priya Sharma",
      company: "Sharma Residency",
      rating: 5,
      text: "The evaporative cooling system they installed in our home is amazing. It's eco-friendly, cost-effective, and keeps our house perfectly comfortable even in peak summer.",
      image: "/professional-indian-woman-homeowner.jpg",
    },
    {
      name: "Dr. Amit Patel",
      company: "City Hospital",
      rating: 5,
      text: "For our hospital's critical HVAC requirements, Prakriti Aircon delivered beyond expectations. The precision and attention to detail in their work is commendable.",
      image: "/indian-doctor-medical-professional.jpg",
    },
    {
      name: "Suresh Gupta",
      company: "Metro Mall",
      rating: 5,
      text: "Managing climate control for our large shopping complex was challenging until we partnered with Prakriti Aircon. Their multi-zone system works flawlessly.",
      image: "/indian-business-manager-retail.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our satisfied customers have to say about our HVAC solutions
              and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-pretty mb-6 leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
