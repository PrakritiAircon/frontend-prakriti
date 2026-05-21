import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Award, Wind } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { href: "#home",     label: "Home"     },
  { href: "#about",    label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
]

const services = [
  "Ducting Materials",
  "Ducting Work",
  "Symphony Evaporative Coolers",
  "System Maintenance",
  "Energy Audits",
]

const socials = [
  { icon: Facebook,  href: "#", label: "Facebook"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative">
      {/* Gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(circle, #2563eb, transparent)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* ── BRAND ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-md">
                <Image src="/companyLogo.png" alt="Prakriti Aircon" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-black text-white text-base leading-tight">Prakriti Aircon</div>
                <div className="text-slate-600 text-[0.7rem] mt-0.5">HVAC Solutions · Indore</div>
              </div>
            </a>

            <p className="text-slate-500 text-[0.83rem] leading-relaxed mb-5">
              Your trusted HVAC partner for residential and commercial spaces.
              Authorized Symphony Official Dealer with genuine products and complete warranty support.
            </p>

            {/* Symphony badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-500/8 border border-amber-500/15 rounded-xl px-3 py-2 mb-5">
              <Award className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-amber-400 text-[0.72rem] font-semibold tracking-wide">Symphony Official Dealer</span>
            </div>

            {/* Socials */}
            <div className="flex gap-1.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/8 hover:border-cyan-500/20 transition-all duration-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h4 className="text-white font-bold text-[0.7rem] uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-[0.83rem] group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <h4 className="text-white font-bold text-[0.7rem] uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-500 text-[0.83rem]">
                  <Wind className="h-3 w-3 text-cyan-600 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h4 className="text-white font-bold text-[0.7rem] uppercase tracking-widest mb-5">Contact Info</h4>
            <div className="space-y-3.5">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 group">
                <MapPin className="h-3.5 w-3.5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-500 text-[0.8rem] leading-snug group-hover:text-slate-400 transition-colors">
                  120 A Pulak City, Silicon City<br />
                  Indore, Madhya Pradesh 452001
                </p>
              </a>
              <a href="tel:+919303178304" className="flex items-center gap-2.5 group">
                <Phone className="h-3.5 w-3.5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-500 text-[0.8rem] group-hover:text-cyan-400 transition-colors">+91 9303178304</span>
              </a>
              <a href="mailto:sales@prakritiaircon.com" className="flex items-center gap-2.5 group">
                <Mail className="h-3.5 w-3.5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-500 text-[0.8rem] group-hover:text-cyan-400 transition-colors">sales@prakritiaircon.com</span>
              </a>
            </div>

            {/* Hours mini card */}
            <div className="mt-5 bg-white/4 border border-white/6 rounded-xl p-3.5">
              <div className="text-white text-[0.72rem] font-semibold mb-1.5 uppercase tracking-wide">Business Hours</div>
              <div className="text-slate-500 text-[0.75rem] space-y-0.5">
                <div>Mon–Fri: 9:00 AM – 7:00 PM</div>
                <div>Saturday: 9:00 AM – 5:00 PM</div>
                <div className="text-cyan-500 font-medium mt-1">24 / 7 Emergency Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="h-px bg-white/6 mb-7" />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[0.78rem]">
            © 2025 Prakriti Aircon. All rights reserved. &nbsp;·&nbsp; Indore, India
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-slate-600 hover:text-cyan-400 transition-colors text-[0.78rem]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
