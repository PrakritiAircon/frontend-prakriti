import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SEOStructuredData } from "@/components/seo-structured-data"
import { 
  Wind, 
  Fan, 
  Snowflake, 
  Wrench, 
  Building2, 
  Factory, 
  Home, 
  Shield,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "HVAC Ducting Services - GI Sheet Fabrication & Symphony Coolers | Prakriti Aircon",
  description: "Professional HVAC ducting installation, GI sheet fabrication, Symphony evaporative coolers, and industrial fan systems. Expert commercial and residential HVAC solutions with 24/7 support.",
  keywords: "HVAC ducting services, GI sheet fabrication, Symphony coolers installation, industrial fans, ductwork contractors, commercial HVAC, residential air conditioning, evaporative cooling systems, ventilation solutions, HVAC maintenance, duct installation, galvanized iron sheets, cooling tower services, chiller installation, AHU systems, FCU installation, VRF systems, split AC services, central air conditioning, energy efficient HVAC, indoor air quality, exhaust systems, fresh air ventilation, smoke extraction systems, clean room HVAC, data center cooling, hospital ventilation, warehouse cooling, office air conditioning, retail HVAC, restaurant ventilation, hotel air conditioning, manufacturing facility cooling, pharmaceutical HVAC, laboratory ventilation, server room cooling, precision air conditioning, cold storage systems, freezer room installation, kitchen exhaust systems, parking garage ventilation, basement ventilation, attic ventilation, whole house ventilation, zone control systems, smart HVAC controls, building automation, energy management systems, preventive maintenance, emergency HVAC repair, 24/7 HVAC service, licensed HVAC contractors, certified technicians, quality installation, warranty service, cost-effective HVAC solutions, sustainable cooling, green building HVAC, LEED compliance, energy audit, load calculation, HVAC consultation, turnkey HVAC projects, multi-story building HVAC, high-rise air conditioning, custom ductwork, duct cleaning services, air filtration systems, thermal insulation, duct insulation, HVAC accessories, duct fittings, flexible ducts, rigid ducts, spiral ducts, rectangular ducts, round ducts, sheet metal work, HVAC tools, duct cutting, duct bending, fabrication services, project management, installation training, safety compliance, environmental compliance, refrigerant handling, EPA certification, NATE certification, customer satisfaction, testimonials, case studies, free estimates, site surveys, system design, engineering services, CAD drawings, 3D modeling, testing commissioning, startup services, operation manuals, maintenance schedules, genuine parts, OEM parts, replacement parts, filters, motors, compressors, coils, fans, pumps, valves, controls, sensors, thermostats"
}

const services = [
  {
    icon: Wind,
    title: "HVAC Ducting Installation",
    description: "Professional ductwork design and installation using premium GI sheets",
    features: ["Rectangular & Round Ducts", "Spiral Ductwork", "Flexible Ducts", "Custom Fabrication"],
    applications: ["Commercial Buildings", "Industrial Facilities", "Residential Complexes", "Healthcare Facilities"]
  },
  {
    icon: Fan,
    title: "Symphony Evaporative Coolers",
    description: "Energy-efficient Symphony cooling systems for optimal comfort",
    features: ["Desert Coolers", "Air Coolers", "Industrial Coolers", "Portable Units"],
    applications: ["Warehouses", "Factories", "Offices", "Residential Spaces"]
  },
  {
    icon: Factory,
    title: "Industrial Fan Systems",
    description: "Heavy-duty ventilation fans for industrial applications",
    features: ["Exhaust Fans", "Centrifugal Fans", "Axial Fans", "Roof Ventilators"],
    applications: ["Manufacturing Units", "Warehouses", "Commercial Kitchens", "Parking Garages"]
  },
  {
    icon: Shield,
    title: "GI Sheet Fabrication",
    description: "Custom galvanized iron sheet work for HVAC components",
    features: ["Corrosion Resistant", "Custom Shapes", "Precision Cutting", "Welding Services"],
    applications: ["Ductwork", "Ventilation Systems", "Cooling Towers", "Equipment Housings"]
  },
  {
    icon: Snowflake,
    title: "Commercial Air Conditioning",
    description: "Complete commercial HVAC solutions for all building types",
    features: ["VRF Systems", "Chiller Plants", "AHU Installation", "Central AC"],
    applications: ["Office Buildings", "Shopping Malls", "Hotels", "Hospitals"]
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance & Repair",
    description: "Comprehensive maintenance and emergency repair services",
    features: ["Preventive Maintenance", "Emergency Repairs", "System Optimization", "Parts Replacement"],
    applications: ["All HVAC Systems", "24/7 Support", "Service Contracts", "Warranty Service"]
  }
]

const specializations = [
  {
    icon: Building2,
    title: "Commercial HVAC",
    description: "Office buildings, shopping malls, hotels, and retail spaces"
  },
  {
    icon: Factory,
    title: "Industrial Cooling",
    description: "Manufacturing facilities, warehouses, and production units"
  },
  {
    icon: Home,
    title: "Residential AC",
    description: "Apartments, villas, and residential complexes"
  },
  {
    icon: Shield,
    title: "Clean Room Systems",
    description: "Hospitals, laboratories, and pharmaceutical facilities"
  }
]

const benefits = [
  "Energy Efficient Solutions",
  "Cost-Effective Installation", 
  "24/7 Emergency Support",
  "Licensed & Certified Technicians",
  "Quality Materials & Equipment",
  "Comprehensive Warranty",
  "Free Site Survey & Estimates",
  "Preventive Maintenance Programs"
]

export default function HVACServicesPage() {
  return (
    <>
      <SEOStructuredData />
      <main className="min-h-screen w-full">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional HVAC Ducting & Cooling Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert installation of HVAC ducting systems, GI sheet fabrication, Symphony evaporative coolers, 
                and industrial fan solutions for commercial and residential projects across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">HVAC Ducting</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">GI Sheet Fabrication</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Symphony Coolers</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Industrial Fans</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">24/7 Support</Badge>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive HVAC Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From ducting installation to evaporative cooling systems, we provide complete HVAC solutions 
                using premium materials and advanced techniques.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Specializations
              </h2>
              <p className="text-lg text-gray-600">
                Tailored HVAC solutions for different industry requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <spec.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                    <CardDescription>{spec.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Prakriti Aircon?
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the difference with our professional HVAC services
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your HVAC System?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert consultation and free quotes for your HVAC ducting, cooling, and ventilation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Site Visit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Call Now: +91-XXXXXXXXXX
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}