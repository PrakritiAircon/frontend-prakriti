export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface SiteVisitFormData {
  name: string
  email: string
  phone: string
  address: string
  preferred_date: string
  preferred_time: string
  service_type: string
  message?: string
}

export const contactAPI = {
  async submitContact(data: ContactFormData) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      throw new Error(err.error || "Failed to submit contact form")
    }
    return response.json()
  },
}

export const siteVisitAPI = {
  async scheduleSiteVisit(data: SiteVisitFormData) {
    const response = await fetch("/api/site-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      throw new Error(err.error || "Failed to schedule site visit")
    }
    return response.json()
  },
}
