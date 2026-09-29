import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us | Sutures Manufacturing Company" },
    { name: "description", content: "Contact Sutures Manufacturing Company in Peenya, Bengaluru for surgical suture and needle quotations." },
    { property: "og:title", content: "Contact Sutures Manufacturing Company" },
    { property: "og:description", content: "Request product details and pricing from our Bengaluru manufacturing team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-secondary/55 py-14 md:py-20"><div className="container mx-auto px-6"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">Talk to our team</p><h1 className="text-5xl font-bold text-medical-dark md:text-6xl">Contact Us</h1><p className="mt-5 max-w-2xl text-lg text-muted-foreground">Tell us the product, specifications and quantity you need. Our team will respond with availability and quotation details.</p></div></section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-medical-dark">Company details</h2>
            <div className="mt-8 space-y-7">
              <div className="flex gap-4"><MapPin className="mt-1 h-6 w-6 shrink-0 text-teal" /><div><h3 className="font-bold">Registered Address</h3><p className="mt-1 leading-relaxed text-muted-foreground">45-46, First Floor, Sri Maruthi Industrial Town IV Phase, Peenya, Bengaluru Urban, Bengaluru – 560 058, Karnataka, India</p></div></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 shrink-0 text-teal" /><div><h3 className="font-bold">Phone</h3><a className="mt-1 block text-muted-foreground hover:text-medical" href="tel:+919242400119">+91 92424 00119</a></div></div>
              <div className="flex gap-4"><Mail className="h-6 w-6 shrink-0 text-teal" /><div><h3 className="font-bold">Email</h3><a className="mt-1 block text-muted-foreground hover:text-medical" href="mailto:info@suturesmfg.com">info@suturesmfg.com</a></div></div>
            </div>
            <div className="mt-9 flex gap-3">
              <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-md border border-border text-medical-dark transition-colors hover:border-teal hover:text-teal"><Facebook className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="grid h-10 w-10 place-items-center rounded-md border border-border text-medical-dark transition-colors hover:border-teal hover:text-teal"><Linkedin className="h-4 w-4" /></a>
              <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-md border border-border text-medical-dark transition-colors hover:border-teal hover:text-teal"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          <form className="rounded-md border border-border bg-background p-7 shadow-premium md:p-10" onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-3xl font-bold text-medical-dark">Request a Quote</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required placeholder="Your full name" /></div>
              <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" placeholder="Company name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required placeholder="you@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" required placeholder="Phone number" /></div>
              <div className="space-y-2 sm:col-span-2"><Label htmlFor="product">Product required</Label><Input id="product" name="product" required placeholder="Product name and quantity" /></div>
              <div className="space-y-2 sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} placeholder="Share specifications or delivery requirements" /></div>
            </div>
            <Button type="submit" size="lg" className="mt-6 h-11 px-8">Submit Inquiry</Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}