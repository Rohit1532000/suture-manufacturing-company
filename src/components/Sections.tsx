import { motion } from "framer-motion";
import { Shield, Microscope, Globe2, Award, Activity, Stethoscope, FlaskConical, HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";
import factory from "@/assets/factory.jpeg";
import surgery from "@/assets/Surgical Suture Needle.jpeg";
import suture from "@/assets/Silk Black Braided Suture.jpeg";
import { Quote } from "lucide-react";
import lifechrome from "@/assets/Chromic Catgut Suture.jpeg";

import { Link } from "@tanstack/react-router";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`py-24 ${className}`}>{children}</section>;
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-medical-light text-medical text-xs font-semibold tracking-widest uppercase mb-4">{kicker}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">{title}</h2>
      {desc && <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let r = 0;
    const id = setInterval(() => {
      r += end / 50;
      if (r >= end) { setV(end); clearInterval(id); } else setV(Math.floor(r));
    }, 30);
    return () => clearInterval(id);
  }, [end]);
  return <span>{v}{suffix}</span>;
}

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-white to-secondary/40">
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-premium">
        <img
          src={factory}
          alt="Manufacturing facility"
          className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-8 -right-6 bg-white rounded-2xl p-6 shadow-premium border border-medical-light w-56"
      >
        <div className="text-4xl font-bold text-gradient">
          <Counter end={30} suffix="+" />
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          Years of Manufacturing Legacy
        </div>
      </motion.div>
      <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-teal/20 blur-3xl" />
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-medical-light text-medical text-xs font-semibold tracking-widest uppercase mb-4">
        About Us
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
        Precision in <span className="text-gradient">Surgical Excellence</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Incepted in 1993 at Bengaluru, Sutures Manufacturing Company is an ISO 9001:2008 certified manufacturer and exporter dedicated to producing high-grade sutures, catgut, and surgical products.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Backed by valid Drugs and Factory Manufacturing Licenses, our precision-tested products reliably serve government and private hospitals across the Americas, South Africa, Japan, and Southeast Asia.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {[
          { n: 1993, s: "", l: "Year Established" },
          { n: 1000, s: "+", l: "Monthly Box Capacity" },
          { n: 100, s: "%", l: "ISO Quality Tested" },
        ].map((x, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="text-center p-4 rounded-xl bg-white shadow-sm border"
          >
            <div className="text-3xl font-bold text-medical">
              <Counter end={x.n} suffix={x.s} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">{x.l}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</Section>
  );
}

const pillars = [
  { icon: Shield, t: "Safety-First Design", d: "Every thread is crafted to minimize tissue trauma." },
  { icon: Microscope, t: "Technological Advancement", d: "Pioneers in Triclosan-coated antibacterial suture technology." },
  { icon: Globe2, t: "Global Reach, Local Expertise", d: "Delivering world-class surgical solutions from India to hospitals around the globe." },
];

export function WhoWeAre() {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle kicker="Who We Are" title="A Commitment to Excellence" desc="We are more than just a manufacturer; we are a dedicated partner to the global medical community, leveraging cutting-edge technology to produce sutures that meet international biocompatibility standards." />
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div key={p.t} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="card-hover group relative p-8 rounded-3xl bg-gradient-to-br from-white to-secondary/50 border border-border overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-medical/10 to-teal/10 transition-transform duration-700 group-hover:scale-150" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-hero-gradient text-white shadow-glow mb-5 transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-medical-dark mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const products = [
  {
    icon: Activity,
    img: lifechrome,
    t: "Absorbable Sutures",
    d: "Engineered for seamless integration and tissue support during critical healing phases.",
    tag: "Catgut Chromic",
    to: "/absorbable-surgical-sutures" as const,
  },
  {
    icon: Stethoscope,
    img: suture,
    t: "Non-Absorbable Sutures",
    d: "Crafted for maximum durability in high-tension surgical environments.",
    tag: "Silk",
    to: "/surgical-sutures" as const,
  },
  {
    icon: FlaskConical,
    img: surgery,
    t: "Surgical Needles",
    d: "High-grade, laser-drilled needles ensure minimal tissue drag and superior surgeon handling.",
    tag: "Laser-Drilled",
    to: "/surgical-needles" as const,
  },
];

export function Products() {
  return (
    <Section id="products" className="bg-gradient-to-b from-secondary/40 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          kicker="What We Do"
          title="Advanced Surgical Solutions"
          desc="A diverse portfolio of sutures designed for high-tensile strength and predictable absorption profiles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Link key={p.t} to={p.to} className="block group">
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-hover bg-white rounded-3xl overflow-hidden border border-border flex flex-col h-full transition-all duration-300 group-hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-medical-light">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-medical uppercase tracking-wider">
                    {p.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-white/95 shadow-md flex items-center justify-center text-medical">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-medical-dark mb-2 group-hover:text-medical transition-colors">
                    {p.t}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

const why = [
  { icon: Activity, t: "Clinical Efficacy", d: "Antibacterial coating clinically proven to reduce SSI rates by up to 30%, decreasing hospital readmissions." },
  { icon: Award, t: "Stringent Quality Control", d: "Adherence to strict global safety standards ensures consistent tensile strength and needle stability." },
  { icon: Globe2, t: "Cost-Effectiveness", d: "Competitive pricing helps hospitals optimize budgets without compromising patient safety." },
  { icon: HeartPulse, t: "Customized Solutions", d: "Tailored solutions for gastrointestinal, orthopedic, OB/GYN and other high-risk procedures." },
];

export function WhyUs() {
  return (
    <Section id="why-us" className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      <div className="container mx-auto px-6 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold tracking-widest uppercase mb-4">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineered for the Surgeon. Designed for the Patient.</h2>
          <p className="text-white/80 text-lg">Our preventative approach embeds broad-spectrum antibacterial agents into the suture, creating a sterile zone of inhibition at the wound site.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((w, i) => (
            <motion.div key={w.t} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-2">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">{w.t}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const testimonials = [
  {
    quote:
      "The tensile strength and knot security of SMC catgut and silk sutures are exceptional. They offer consistent knotting performance in critical surgical procedures.",
    name: "Dr. Rajesh Kumar Sharma",
    role: "Chief of General Surgery, New Delhi",
  },
  {
    quote:
      "We have been procuring surgical sutures from SMC for over five years. Their strict adherence to ISO standards and consistent needle sharpness ensure reliable clinical outcomes.",
    name: "Dr. Arvind Swaminathan",
    role: "Senior Consultant Surgeon, Bengaluru",
  },
  {
    quote:
      "Minimal tissue drag and reliable tensile strength make these sutures our primary choice during emergency and trauma closures. Highly dependable quality.",
    name: "Dr. Priya Nair",
    role: "Head of General & Laparoscopic Surgery, Kochi",
  },
  {
    quote:
      "Excellent batch-to-batch consistency. The needles hold edge sharpness exceptionally well through dense connective tissue without compromising control.",
    name: "Dr. Amitav Mukherjee",
    role: "Director of Surgical Services, Kolkata",
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentPair = testimonials.slice(page * 2, page * 2 + 2);

  return (
    <Section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <SectionTitle
          kicker="Testimonials"
          title="Trusted by Surgeons Worldwide"
        />

        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[260px]">
            {currentPair.map((item, idx) => (
              <motion.div
                key={`${page}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white via-secondary/40 to-medical-light/30 rounded-3xl p-8 shadow-premium border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-medical/40" />
                    <span className="text-xs font-semibold tracking-wider text-teal uppercase bg-teal/10 px-3 py-1 rounded-full">
                      Verified Clinical Review
                    </span>
                  </div>
                  <p className="text-foreground/85 text-base md:text-lg italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="font-bold text-medical-dark text-lg">
                    {item.name}
                  </div>
                  <div className="text-sm font-medium text-teal">
                    {item.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                aria-label={`Page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === page ? "w-10 bg-medical" : "w-2.5 bg-medical/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// Small helper for AnimatePresence import
import { AnimatePresence } from "framer-motion";
function AnimatePresenceWrap({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

export function VisionMission() {
  return (
    <Section className="bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle kicker="Our Purpose" title="Vision & Mission" desc="Guided by a commitment to surgical excellence and patient safety." />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-hover group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary/50 p-8 md:p-10"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-medical/10 to-teal/10 transition-transform duration-700 group-hover:scale-150" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-hero-gradient text-white shadow-glow mb-5 transition-transform group-hover:rotate-6 group-hover:scale-110">
                <i className="fas fa-eye text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted global name in surgical sutures and needles, recognised for precision, consistency and meaningful contributions to better patient care.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-hover group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary/50 p-8 md:p-10"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-medical/10 to-teal/10 transition-transform duration-700 group-hover:scale-150" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-hero-gradient text-white shadow-glow mb-5 transition-transform group-hover:rotate-6 group-hover:scale-110">
                <i className="fas fa-bullseye text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To manufacture dependable medical products through disciplined quality systems, responsible processes and close attention to the needs of healthcare professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export function CTA() {
  return (
    <Section id="contact" className="bg-gradient-to-br from-secondary/40 to-medical-light/30">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-white shadow-premium">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-medical/40 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-4">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner with Us for <span className="text-teal">Safer Surgeries</span>.</h2>
              <p className="text-white/85 text-lg mb-6">We invite surgeons, hospital procurement teams, and distributors to explore our advanced suture technology.</p>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-teal text-lg" />
                  <span>45-46, First Floor, Sri Maruthi Industrial Town IV Phase, Peenya, Bangalore 560058</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-teal text-lg" />
                  <span>+91 92424 00119</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-teal text-lg" />
                  <span>info@suturesmfg.com</span>
                </div>
              </div>
            </div>
            <form className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
              <input className="w-full bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal" placeholder="Your Name" />
              <input className="w-full bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal" placeholder="Hospital / Clinic Name" />
              <input className="w-full bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal" placeholder="Requirements" />
              <textarea rows={3} className="w-full bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal" placeholder="Message" />
              <button type="button" className="w-full bg-white text-medical-dark font-bold py-3 rounded-xl hover:bg-teal hover:text-white transition-all hover:scale-[1.02] shadow-glow">Send Inquiry</button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

import logo from "@/assets/suturelogo.webp";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const productLinks = [
  { label: "Absorbable Surgical Sutures", to: "/absorbable-surgical-sutures" as const },
  { label: "Surgical Sutures", to: "/surgical-sutures" as const },
  { label: "Surgical Needles", to: "/surgical-needles" as const },
];

export function Footer() {
  return (
    <footer className="bg-medical-dark text-white/80">
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SMC" className="h-12 w-12 bg-white rounded-lg p-1 object-contain" />
            <div>
              <div className="font-display font-bold text-white">Sutures Manufacturing Co.</div>
              <div className="text-[10px] tracking-widest text-teal uppercase">Precision · Excellence</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">Surgical Sutures & Needles Manufacturer in India, trusted by surgeons worldwide.</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(item => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-teal transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            {productLinks.map(item => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-teal transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li>Peenya, Bangalore 560058</li>
            <li>+91 92424 00119</li>
            <li>info@suturesmfg.com</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 border border-white/20">ISO 9001</span>
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 border border-white/20">CE Mark</span>
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 border border-white/20">GMP</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Sutures Manufacturing Company. All Rights Reserved.
      </div>
    </footer>
  );
}
