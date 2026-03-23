"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar, Award, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteVisitForm } from "@/components/site-visit-form"
import { contactAPI, type ContactFormData } from "@/lib/api"

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

    try {
      await contactAPI.submitContact(formData as ContactFormData)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Failed to submit contact form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
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
              
              {/* Contact Info Below Form */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-accent">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-3 text-lg">Email Us</h3>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            <strong>General:</strong><br />
                            <a href="mailto:info@prakritiaircon.in" className="text-primary hover:underline">
                              info@prakritiaircon.in
                            </a>
                          </p>
                          <p className="text-muted-foreground">
                            <strong>Sales:</strong><br />
                            <a href="mailto:sales@prakritiaircon.com" className="text-primary hover:underline">
                              sales@prakritiaircon.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-3 text-lg">Business Hours</h3>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            <strong>Mon-Fri:</strong> 9:00 AM - 7:00 PM<br />
                            <strong>Saturday:</strong> 9:00 AM - 5:00 PM<br />
                            <strong>Sunday:</strong> Emergency Only
                          </p>
                          <p className="text-sm text-primary font-medium">24/7 Emergency Support</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              {/* Symphony Official Dealer Badge */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-on-scroll bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
                        <Award className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Symphony Official Dealer
                    </h3>
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Authorized dealer for Symphony evaporative coolers and air cooling solutions
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-700 shadow-inner">
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        ✓ Genuine Products ✓ Warranty Support ✓ Expert Installation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4 animate-on-scroll">
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-full font-semibold"
                  onClick={() => window.open("https://wa.me/919171743927", "_blank")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <SiteVisitForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}