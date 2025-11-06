"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, Clock, MapPin } from "lucide-react"
import { siteVisitAPI, type SiteVisitFormData } from "@/lib/api"

interface SiteVisitFormProps {
  trigger?: React.ReactNode;
}

export function SiteVisitForm({ trigger }: SiteVisitFormProps) {
  const [formData, setFormData] = useState<SiteVisitFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferred_date: "",
    preferred_time: "",
    service_type: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await siteVisitAPI.scheduleSiteVisit(formData)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          preferred_date: "",
          preferred_time: "",
          service_type: "",
          message: "",
        })
        setIsSubmitted(false)
        setIsOpen(false)
      }, 3000)
    } catch (error) {
      console.error('Error scheduling site visit:', error)
      alert('Failed to schedule site visit. Please try again.')
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const defaultTrigger = (
    <Button
      variant="outline"
      className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-4 rounded-full font-semibold bg-transparent"
    >
      <Calendar className="mr-2 h-5 w-5" />
      Schedule Site Visit
    </Button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Schedule Site Visit
          </DialogTitle>
        </DialogHeader>

        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
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
                      className="h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
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
                      className="h-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
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
                    className="h-10"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Site Address *
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete address where site visit is required"
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferred_date" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      id="preferred_date"
                      name="preferred_date"
                      type="date"
                      required
                      value={formData.preferred_date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferred_time" className="block text-sm font-semibold text-foreground mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('preferred_time', value)} required>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00-11:00">9:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11:00-13:00">11:00 AM - 1:00 PM</SelectItem>
                        <SelectItem value="14:00-16:00">2:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="16:00-18:00">4:00 PM - 6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service_type" className="block text-sm font-semibold text-foreground mb-2">
                    Service Type *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('service_type', value)} required>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ducting-materials">Ducting Materials</SelectItem>
                      <SelectItem value="ducting-work">Ducting Work</SelectItem>
                      <SelectItem value="evaporative-coolers">Evaporative Coolers</SelectItem>
                      <SelectItem value="maintenance">Maintenance Services</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                      <SelectItem value="installation">New Installation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or additional information..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Scheduling Visit...
                    </>
                  ) : (
                    <>
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Site Visit
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Site Visit Scheduled!</h3>
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours to confirm the appointment details.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}