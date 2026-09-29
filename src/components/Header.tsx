import logo from "@/assets/suturelogo.webp";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Absorbable Surgical Sutures", to: "/absorbable-surgical-sutures" as const },
  { label: "Surgical Sutures", to: "/surgical-sutures" as const },
  { label: "Surgical Needles", to: "/surgical-needles" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between min-h-20 gap-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="SMC Logo" className="h-14 w-14 object-contain transition-transform group-hover:scale-110 group-hover:rotate-3" />
          <div className="leading-tight">
            <div className="font-sanss font-bold text-xl text-medical-dark">Sutures Manufacturing Company</div>
            <div className="text-[10px] tracking-[0.2em] text-teal uppercase">Precision · Excellence</div>
          </div>
        </Link>
        </motion.div>

        <nav className="hidden xl:flex items-center justify-center gap-0.5">
          {nav.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link to={item.to} activeOptions={{ exact: item.to === "/" }} className="relative block px-2.5 py-3 text-[13px] font-bold uppercase text-foreground/80 hover:text-medical transition-colors group" activeProps={{ className: "text-medical" }}>
              {item.label}
              <span className=" bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-medical to-teal group-hover:w-3/4 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* <Link to="/contact" className="hidden xl:inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold uppercase text-primary-foreground shadow-premium hover:shadow-glow hover:scale-105 transition-all">
          Request Quote
        </Link> */}

        <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="lg:hidden border-t bg-white overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map(item => <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="py-2.5 text-xs font-bold uppercase text-foreground/80 hover:text-medical">{item.label}</Link>)}
          </div>
        </motion.div>
      )}
    </header>
  );
}
