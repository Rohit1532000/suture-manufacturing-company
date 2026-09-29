import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { surgicalSutureProducts } from "@/lib/products";

export const Route = createFileRoute("/surgical-sutures")({
  head: () => ({ meta: [
    { title: "Surgical Sutures | Sutures Manufacturing Company" },
    { name: "description", content: "View LIFELINE black braided silk and non-absorbable surgical sutures made in India." },
    { property: "og:title", content: "Surgical Sutures | SMC" },
    { property: "og:description", content: "Black braided silk and needled surgical sutures for hospitals and clinics." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Page,
});

function Page() {
  return <SiteLayout><ProductCategoryPage title="Surgical Sutures" intro="Our LIFELINE silk suture range is manufactured for strength, reliable handling and dependable performance across hospital and clinical applications." products={surgicalSutureProducts} /></SiteLayout>;
}