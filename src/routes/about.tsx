import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Factory, Globe2, ShieldCheck, Target, Eye } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | Sutures Manufacturing Company" },
    { name: "description", content: "Learn about Sutures Manufacturing Company, a Bengaluru surgical suture manufacturer established in 1993." },
    { property: "og:title", content: "About Sutures Manufacturing Company" },
    { property: "og:description", content: "Three decades of quality surgical suture manufacturing from Bengaluru, India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: AboutPage,
});

const strengths = [
  [ShieldCheck, "Quality Assured", "ISO 9001:2008 certified systems and quality-led manufacturing."],
  [Factory, "Established Expertise", "Manufacturing surgical sutures in Bengaluru since 1993."],
  [Award, "Licensed Operations", "Drugs Manufacturing License, Factory License and IE Code."],
  [Globe2, "Global Reach", "Serving American countries, South Africa, Caribbean Islands, Japan and South East Asia."],
] as const;

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-secondary/55 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">Our Company</p><h1 className="text-5xl font-bold text-medical-dark md:text-6xl">Precision Built Across Decades</h1></div>
          <p className="text-lg leading-relaxed text-muted-foreground">Sutures Manufacturing Company was established in 1993 in Bengaluru under the leadership of proprietor Mr. Shirish. We manufacture a focused range of surgical sutures and needles for medical institutions in India and international markets.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
            {strengths.map(([Icon, title, text], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-background p-7"><Icon className="mb-5 h-8 w-8 text-teal" /><h2 className="text-xl font-bold text-medical-dark">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></motion.div>)}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-16">
            <div><h2 className="text-3xl font-bold text-medical-dark">Built for dependable supply</h2><p className="mt-4 leading-relaxed text-muted-foreground">With a production capacity of approximately 1,000 boxes per month, our company combines established manufacturing experience with focused quality controls. Every product is developed to meet practical hospital and clinical requirements.</p></div>
            <div><h2 className="text-3xl font-bold text-medical-dark">International presence</h2><p className="mt-4 leading-relaxed text-muted-foreground">Our products reach markets across American countries, South Africa, the Caribbean Islands, Japan and South East Asian countries, reflecting the trust placed in our product quality and service.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-medical-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2">
          <div className="border-l-2 border-teal pl-7"><Eye className="mb-5 h-9 w-9 text-teal" /><h2 className="text-3xl font-bold">Our Vision</h2><p className="mt-4 leading-relaxed text-primary-foreground/75">To be a trusted global name in surgical sutures and needles, recognised for precision, consistency and meaningful contributions to better patient care.</p></div>
          <div className="border-l-2 border-teal pl-7"><Target className="mb-5 h-9 w-9 text-teal" /><h2 className="text-3xl font-bold">Our Mission</h2><p className="mt-4 leading-relaxed text-primary-foreground/75">To manufacture dependable medical products through disciplined quality systems, responsible processes and close attention to the needs of healthcare professionals.</p></div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-[0.7fr_1.3fr]">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">Common Questions</p><h2 className="text-4xl font-bold text-medical-dark">Frequently asked questions</h2></div>
          <Accordion type="single" collapsible className="border-t border-border">
            <AccordionItem value="one"><AccordionTrigger>When was Sutures Manufacturing Company established?</AccordionTrigger><AccordionContent className="text-muted-foreground">The company was established in 1993 in Bengaluru, Karnataka, India.</AccordionContent></AccordionItem>
            <AccordionItem value="two"><AccordionTrigger>Which products do you manufacture?</AccordionTrigger><AccordionContent className="text-muted-foreground">We manufacture absorbable chromic catgut sutures, non-absorbable silk sutures, needled sutures and surgical needles.</AccordionContent></AccordionItem>
            <AccordionItem value="three"><AccordionTrigger>Do you supply international markets?</AccordionTrigger><AccordionContent className="text-muted-foreground">Yes. Our export markets include American countries, South Africa, Caribbean Islands, Japan and South East Asian countries.</AccordionContent></AccordionItem>
            <AccordionItem value="four"><AccordionTrigger>How can I request product pricing?</AccordionTrigger><AccordionContent className="text-muted-foreground">Use the Request a Quote button on any product or submit the inquiry form on our Contact page with the product and quantity required.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}