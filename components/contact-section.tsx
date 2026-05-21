"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Award, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteVisitForm } from "@/components/site-visit-form"
import { contactAPI, type ContactFormData } from "@/lib/api"

const contactDetails = [
  { icon: Phone, title: "Call Us",       lines: ["+91 9303178304", "+91 9171743927"],             gradient: "from-cyan-500 to-cyan-700",   href: "tel:+919303178304" },
  { icon: Mail,  title: "Email Us",      lines: ["sales@prakritiaircon.com","info@prakritiaircon.in"], gradient: "from-blue-500 to-blue-700",  href: "mailto:sales@prakritiaircon.com" },
  { icon: MapPin,title: "Visit Us",      lines: ["120 A Pulak City, Silicon City","Indore, MP 452001"],  gradient: "from-violet-500 to-violet-700", href: "#" },
  { icon: Clock, title: "Business Hours",lines: ["Mon–Fri: 9 AM – 7 PM","Sat: 9 AM – 5 PM · Sun: Emergency"], gradient: "from-emerald-500 to-teal-600", href: "#" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) =>
              setTimeout(() => el.classList.add("animate"), i * 90)
            )
          }
        })
      },
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await contactAPI.submitContact(formData as ContactFormData)
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setIsSubmitted(false)
      }, 4000)
    } catch {
      alert("Failed to submit. Please call us directly at +91 9303178304.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-[#0a0f1a]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-5">
            <span className="section-badge-dot" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-5 mb-5 gradient-text tracking-tight">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with premium HVAC solutions? Our expert team provides
            personalized consultation and competitive quotes for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── FORM ── */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7 pb-6 border-b border-slate-100 dark:border-white/6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send Us a Message</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-[0.82rem]">We respond within 24 hours on business days</p>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Full Name *</label>
                      <Input
                        name="name" type="text" required value={formData.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="h-11 bg-white dark:bg-slate-800/60 border-slate-200 dark:border-white/10 focus:border-cyan-400 dark:focus:border-cyan-500 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Phone Number *</label>
                      <Input
                        name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-11 bg-white dark:bg-slate-800/60 border-slate-200 dark:border-white/10 focus:border-cyan-400 dark:focus:border-cyan-500 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Email Address *</label>
                      <Input
                        name="email" type="email" required value={formData.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="h-11 bg-white dark:bg-slate-800/60 border-slate-200 dark:border-white/10 focus:border-cyan-400 dark:focus:border-cyan-500 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Service Required *</label>
                      <Select onValueChange={(v) => setFormData((p) => ({ ...p, service: v }))} required>
                        <SelectTrigger className="h-11 bg-white dark:bg-slate-800/60 border-slate-200 dark:border-white/10 focus:border-cyan-400 dark:focus:border-cyan-500 rounded-xl text-slate-900 dark:text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl">
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
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Project Details *</label>
                    <Textarea
                      name="message" required value={formData.message} onChange={handleChange}
                      placeholder="Describe your HVAC requirements, project size, timeline, and any specific needs..."
                      rows={5}
                      className="bg-white dark:bg-slate-800/60 border-slate-200 dark:border-white/10 focus:border-cyan-400 dark:focus:border-cyan-500 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-14">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Thank you. We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-2 space-y-4 animate-on-scroll">

            {/* Symphony badge */}
            <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 overflow-hidden border border-white/5">
              <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(6,182,212,1), transparent 60%)" }} />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-black text-base mb-1">Symphony Official Dealer</h3>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-500 text-[0.78rem] mb-4">Authorized dealer for Symphony evaporative coolers &amp; air cooling</p>
                <div className="bg-white/6 border border-white/8 rounded-xl p-3">
                  <p className="text-cyan-400 text-[0.72rem] font-semibold tracking-wide">✓ Genuine Products &nbsp;·&nbsp; ✓ Full Warranty &nbsp;·&nbsp; ✓ Expert Install</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactDetails.map((info, i) => {
                const Icon = info.icon
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-start gap-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/6 rounded-xl p-4 hover:border-slate-200 dark:hover:border-white/12 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-300 group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 text-[0.83rem] mb-1">{info.title}</div>
                      {info.lines.map((l, li) => (
                        <div key={li} className="text-slate-500 dark:text-slate-500 text-[0.75rem]">{l}</div>
                      ))}
                    </div>
                  </a>
                )
              })}
            </div>

            {/* WhatsApp + Site Visit */}
            <div className="space-y-2.5">
              <button
                onClick={() => window.open("https://wa.me/919171743927", "_blank")}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-px shadow-md hover:shadow-lg"
              >
                <MessageSquare className="h-4 w-4" />
                Chat on WhatsApp
              </button>
              <SiteVisitForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
