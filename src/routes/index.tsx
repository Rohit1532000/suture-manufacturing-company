import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { About, VisionMission, WhoWeAre, Products, WhyUs, Testimonials, CTA, Footer } from "@/components/Sections";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sutures Manufacturing Company | Antibacterial Sutures Manufacturer in India" },
      { name: "description", content: "Premium surgical sutures crafted in Bangalore. Antibacterial, absorbable and non-absorbable sutures trusted by surgeons worldwide." },
      { property: "og:title", content: "Sutures Manufacturing Company" },
      { property: "og:description", content: "Precision in Every Stitch. Excellence in Every Patient Outcome." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <main>
        <HeroSlider />
        <About />
        <VisionMission />
        <WhoWeAre />
        <Products />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
    </SiteLayout>
  );
}
