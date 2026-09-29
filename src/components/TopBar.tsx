import { Facebook, Linkedin, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-topbar-gradient text-white text-xs">
      <div className="container mx-auto px-6 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a href="mailto:info@suturesmfg.com" className="flex items-center gap-2 hover:text-teal transition-colors">
            <i className="fas fa-envelope text-[14px]" />
            <span>info@suturesmfg.com</span>
          </a>
          <span className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[14px]" />
            <span>Peenya, Bangalore, India</span>
          </span>
          <span className="flex items-center gap-2">
            <i className="fas fa-clock text-[14px]" />
            <span>Mon - Sat: 9AM - 7PM</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919242400119" className="flex items-center gap-2 hover:text-teal transition-colors">
            <i className="fas fa-phone text-[14px]" />
            <span>+91 92424 00119</span>
          </a>
          <div className="h-4 w-px bg-white/30" />
          <a href="#" aria-label="Facebook" className="hover:text-teal transition-colors"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-teal transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-teal transition-colors"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}
