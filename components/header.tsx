"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Sun, Moon, Award, Star, ChevronRight, Wind } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30)
      // Active section tracking
      const sections = ["home", "about", "services", "projects", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* ── TOP UTILITY BAR ─────────────────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="bg-slate-950 dark:bg-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between">
            {/* Left contacts */}
            <div className="flex items-center divide-x divide-white/10">
              <a
                href="tel:+919303178304"
                className="flex items-center gap-1.5 pr-4 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium"
              >
                <Phone className="h-3 w-3" />
                +91 9303178304
              </a>
              <a
                href="mailto:sales@prakritiaircon.com"
                className="hidden sm:flex items-center gap-1.5 pl-4 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium"
              >
                <Mail className="h-3 w-3" />
                sales@prakritiaircon.com
              </a>
            </div>
            {/* Right badge + tagline */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                <Award className="h-3 w-3 text-amber-400" />
                <span className="text-amber-300 text-xs font-semibold tracking-wide">Symphony Official Dealer</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="hidden xl:block text-slate-500 text-xs">India&apos;s Premier HVAC Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION ─────────────────────────────── */}
      <div
        className={`transition-all duration-400 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/8 dark:shadow-black/40 border-b border-slate-200/60 dark:border-white/6"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">

            {/* ── LOGO ── */}
            <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isScrolled ? "w-9 h-9 shadow-md" : "w-10 h-10 shadow-lg shadow-black/20"
                }`}>
                  <Image
                    src="/companyLogo.png"
                    alt="Prakriti Aircon"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Active indicator dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-500 rounded-full border-2 border-white dark:border-slate-950 shadow" />
              </div>
              <div className="hidden xs:block">
                <div className={`font-black leading-none transition-all duration-300 ${
                  isScrolled
                    ? "text-slate-900 dark:text-white text-[1.1rem]"
                    : "text-white text-[1.2rem]"
                }`}>
                  Prakriti Aircon
                </div>
                <div className={`text-[0.7rem] font-medium mt-0.5 tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-slate-400 dark:text-slate-500" : "text-white/50"
                }`}>
                  HVAC Solutions · Indore
                </div>
              </div>
            </a>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                      isActive
                        ? isScrolled
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-white"
                        : isScrolled
                          ? "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/6"
                          : "text-white/70 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Theme toggle */}
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {isDark
                  ? <Sun className="h-[1.05rem] w-[1.05rem]" />
                  : <Moon className="h-[1.05rem] w-[1.05rem]" />
                }
              </button>

              {/* CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-px"
              >
                Get Free Quote
                <ChevronRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile hamburger */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/8"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen
                  ? <X className="h-5 w-5" />
                  : <Menu className="h-5 w-5" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-350 ${
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/6 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                    isActive
                      ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronRight className={`h-4 w-4 transition-colors ${isActive ? "text-cyan-400" : "text-slate-300 dark:text-slate-600"}`} />
                </a>
              )
            })}

            <div className="pt-3 pb-1 space-y-3">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Wind className="h-4 w-4" />
                Get Free Quote
              </a>
              <div className="flex items-center justify-center gap-3 pt-1 pb-1 border-t border-slate-100 dark:border-white/6">
                <a href="tel:+919303178304" className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                  <Phone className="h-3 w-3" />
                  +91 9303178304
                </a>
                <span className="text-slate-200 dark:text-slate-700">·</span>
                <button
                  onClick={() => { setTheme(isDark ? "light" : "dark"); setIsMobileMenuOpen(false) }}
                  className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs"
                >
                  {isDark ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
                  {isDark ? "Light mode" : "Dark mode"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
