"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-3 px-4 text-sm animate-gradient">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 9171743927</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@prakritiaircon.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">🌿 Your Eco-Friendly HVAC Partner</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Prakriti Aircon</h1>
              <p className="text-xs text-muted-foreground">Premium HVAC Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-primary to-secondary text-white w-fit mx-4">
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
