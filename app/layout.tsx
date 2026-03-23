import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SEOStructuredData } from "@/components/seo-structured-data"
import { Suspense } from "react"
import "@/lib/crypto-polyfill"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prakriti Aircon - HVAC Ducting, GI Sheets, Symphony Coolers, HVLS Fans & Industrial Cooling Solutions",
  description:
    "Leading HVAC contractor in Indore specializing in ducting work, GI sheet fabrication, Symphony evaporative coolers, HVLS fans, industrial fans, duct coolers, exhaust fans, and complete air conditioning solutions. Expert installation, maintenance & repair services across commercial and residential projects.",
  keywords: "HVAC ducting, GI sheets, Symphony coolers, HVLS fans, industrial fans, duct coolers, exhaust fans, air conditioning, ductwork installation, HVAC contractors Indore, evaporative cooling, ventilation systems, commercial HVAC, residential AC, duct fabrication, air conditioning repair, HVAC maintenance, cooling solutions, heating systems, air quality, energy efficient HVAC, duct cleaning, HVAC design, industrial cooling, warehouse ventilation, office air conditioning, hospital HVAC, clean room systems, data center cooling, shopping mall HVAC, luxury villa AC, eco-friendly cooling, professional HVAC installation, HVAC materials, duct materials, galvanized iron sheets, HVAC equipment, cooling tower, chiller systems, AHU installation, FCU systems, VRF systems, split AC, central air conditioning, packaged units, rooftop units, heat pumps, refrigeration, thermal insulation, duct insulation, HVAC controls, building automation, energy management, indoor air quality, air filtration, exhaust systems, fresh air systems, smoke extraction, fire dampers, volume dampers, grilles and diffusers, HVAC accessories, duct fittings, flexible ducts, rigid ducts, spiral ducts, rectangular ducts, round ducts, duct joints, duct sealants, HVAC tools, duct cutting, duct bending, sheet metal work, fabrication services, custom ductwork, HVAC consultation, energy audit, load calculation, HVAC troubleshooting, preventive maintenance, emergency repair, 24/7 HVAC service, licensed HVAC contractor, certified technicians, quality installation, warranty service, cost-effective solutions, sustainable HVAC, green building, LEED compliance, building codes, safety standards, project management, turnkey solutions, multi-story buildings, high-rise HVAC, industrial HVAC, manufacturing facility cooling, warehouse climate control, retail store AC, restaurant ventilation, hotel HVAC, school air conditioning, healthcare HVAC, pharmaceutical clean rooms, laboratory ventilation, server room cooling, telecom shelter cooling, food processing HVAC, cold storage, freezer rooms, precision air conditioning, computer room AC, UPS room cooling, generator room ventilation, electrical panel cooling, transformer cooling, motor cooling, compressor cooling, pump room ventilation, boiler room ventilation, kitchen exhaust, bathroom exhaust, parking garage ventilation, stairwell pressurization, elevator machine room cooling, mechanical room ventilation, utility room HVAC, basement ventilation, attic ventilation, crawl space ventilation, whole house ventilation, zone control systems, smart thermostats, programmable controls, remote monitoring, IoT HVAC, predictive maintenance, condition monitoring, performance optimization, energy savings, utility rebates, tax incentives, financing options, service contracts, maintenance agreements, extended warranties, customer support, technical training, installation training, safety training, OSHA compliance, environmental compliance, refrigerant handling, EPA certification, NATE certification, trade associations, industry standards, best practices, quality assurance, customer satisfaction, testimonials, case studies, project portfolio, before after photos, installation videos, maintenance tips, troubleshooting guides, FAQ, blog articles, news updates, industry trends, technology updates, product launches, seasonal promotions, special offers, free estimates, site surveys, load calculations, system design, engineering services, CAD drawings, 3D modeling, project planning, scheduling, coordination, supervision, quality control, testing commissioning, startup services, training programs, documentation, operation manuals, maintenance schedules, parts inventory, genuine parts, OEM parts, aftermarket parts, replacement parts, spare parts, consumables, filters, belts, motors, compressors, coils, fans, pumps, valves, controls, sensors, thermostats, switches, relays, contactors, fuses, breakers, wiring, cables, conduits, supports, hangers, brackets, fasteners, sealants, adhesives, tapes, labels, tags, tools, equipment, instruments, gauges, meters, testers, analyzers, software, apps, databases, records, reports, certificates, permits, inspections, approvals, compliance, documentation, training, education, certification, licensing, insurance, bonding, safety, health, environment, sustainability, efficiency, performance, reliability, durability, longevity, value, ROI, payback, lifecycle cost, total cost ownership, budget, financing, leasing, rental, service, support, warranty, guarantee, satisfaction, peace of mind, Indore HVAC services, Madhya Pradesh HVAC contractor, high volume low speed fans, industrial coolers Indore, duct coolers installation, exhaust fan systems, warehouse cooling Indore, factory ventilation Indore, commercial HVAC Indore, residential AC Indore, HVAC maintenance Indore, emergency HVAC repair Indore, 24/7 HVAC service Indore, licensed HVAC contractor Indore, certified technicians Indore, quality HVAC installation Indore, warranty HVAC service Indore, cost-effective HVAC solutions Indore, sustainable HVAC Indore, green building HVAC Indore, energy efficient cooling Indore, indoor air quality Indore, air filtration systems Indore, thermal insulation Indore, duct insulation Indore, HVAC accessories Indore, duct fittings Indore, sheet metal work Indore, fabrication services Indore, custom ductwork Indore, HVAC consultation Indore, energy audit Indore, load calculation Indore, HVAC troubleshooting Indore, preventive maintenance Indore",
  authors: [{ name: "Prakriti Aircon" }],
  creator: "Prakriti Aircon",
  publisher: "Prakriti Aircon",
  robots: "index, follow",
  icons: {
    icon: "/companyLogo.png",
    shortcut: "/companyLogo.png",
    apple: "/companyLogo.png"
  },
  openGraph: {
    title: "Prakriti Aircon - Professional HVAC Ducting, HVLS Fans & Industrial Cooling Solutions in Indore",
    description: "Expert HVAC contractors in Indore providing ducting work, GI sheet fabrication, Symphony coolers, HVLS fans, industrial fans, duct coolers, exhaust fans, and complete air conditioning solutions for commercial and residential projects.",
    type: "website",
    locale: "en_US",
    siteName: "Prakriti Aircon",
    images: ["/companyLogo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakriti Aircon - HVAC Ducting, HVLS Fans & Industrial Cooling Experts in Indore",
    description: "Professional HVAC services in Indore including ducting, GI sheets, Symphony coolers, HVLS fans, industrial fans, duct coolers, exhaust fans, and air conditioning solutions.",
    images: ["/companyLogo.png"]
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <SEOStructuredData />
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
