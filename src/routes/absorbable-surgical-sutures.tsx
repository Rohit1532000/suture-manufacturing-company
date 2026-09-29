import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { absorbableProducts } from "@/lib/products";

export const Route = createFileRoute("/absorbable-surgical-sutures")({
  head: () => ({ meta: [
    { title: "Absorbable Surgical Sutures | Sutures Manufacturing Company" },
    { name: "description", content: "Explore LIFECHROME chromic catgut absorbable surgical sutures manufactured in Bengaluru, India." },
    { property: "og:title", content: "Absorbable Surgical Sutures | SMC" },
    { property: "og:description", content: "LIFECHROME chromic catgut surgical sutures for dependable hospital use." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Page,
});

function Page() {
  return <SiteLayout><ProductCategoryPage title="Absorbable Surgical Sutures" intro="Our LIFECHROME range combines carefully prepared chromic catgut with precision surgical needles and protective packaging for consistent clinical performance." products={absorbableProducts} /></SiteLayout>;
}