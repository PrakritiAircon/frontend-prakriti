import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
