"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Let's Start Your Project</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Ready to transform your space with premium HVAC solutions? Our expert team is here to provide personalized
              consultation and competitive quotes for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 gradient-card animate-on-scroll">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="h-12 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="h-12 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="h-12 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-3">
                            Service Required *
                          </label>
                          <Select onValueChange={handleServiceChange} required>
                            <SelectTrigger className="h-12 border-2 focus:border-primary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ducting-materials">Ducting Materials</SelectItem>
                              <SelectItem value="ducting-work">Ducting Work</SelectItem>
                              <SelectItem value="evaporative-coolers">Evaporative Coolers</SelectItem>
                              <SelectItem value="maintenance">Maintenance Services</SelectItem>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your HVAC requirements, project size, timeline, and any specific needs..."
                          rows={6}
                          className="border-2 focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  content: (
                    <>
                      <p className="text-muted-foreground mb-2">
                        <strong>Head Office:</strong>
                        <br />
                        Pulak City
                        <br />
                        Silicon City, Indore, MadhyaPradesh 452001
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Branch Office:</strong>
                        <br />
                        Devas Naka, Indore, MadhyaPradesh
                      </p>
                    </>
                  ),
                  color: "text-primary",
                },
                {
                  icon: Phone,
                  title: "Call Us Now",
                  content: (
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong>Anurag Sharma :</strong>
                        <br />
                        <a href="tel:+919171743927" className="text-primary hover:underline">
                          +91 9171743927
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Emergency Service:</strong>
                        <br />
                        <a href="tel:+911800123456" className="text-primary hover:underline">
                          1800-123-456 (Toll Free)
                        </a>
                      </p>
                    </div>
                  ),
                  color: "text-secondary",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: (
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong>General Inquiries:</strong>
                        <br />
                        <a href="mailto:info@prakritiaircon.com" className="text-primary hover:underline">
                          info@prakritiaircon.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Sales & Quotes:</strong>
                        <br />
                        <a href="mailto:sales@prakritiaircon.com" className="text-primary hover:underline">
                          sales@prakritiaircon.com
                        </a>
                      </p>
                    </div>
                  ),
                  color: "text-accent",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: (
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM
                        <br />
                        <strong>Saturday:</strong> 9:00 AM - 5:00 PM
                        <br />
                        <strong>Sunday:</strong> Emergency Service Only
                      </p>
                      <p className="text-sm text-primary font-medium">24/7 Emergency Support Available</p>
                    </div>
                  ),
                  color: "text-primary",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 gradient-card border-0 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-primary/10 ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
                        {item.content}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="space-y-4 animate-on-scroll">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold"
                  onClick={() => window.open("https://wa.me/919171743927", "_blank")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-full font-semibold bg-transparent"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
