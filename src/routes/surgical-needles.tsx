import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { surgicalNeedleProducts } from "@/lib/products";

export const Route = createFileRoute("/surgical-needles")({
  head: () => ({ meta: [
    { title: "Surgical Needles | Sutures Manufacturing Company" },
    { name: "description", content: "Browse LIFELINE surgical suture needles and stainless steel suture needles in multiple specifications." },
    { property: "og:title", content: "Surgical Needles | SMC" },
    { property: "og:description", content: "Precision LIFELINE surgical and stainless steel suture needles." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Page,
});

function Page() {
  return <SiteLayout><ProductCategoryPage title="Surgical Needles" intro="Precision-formed LIFELINE surgical needles are available in varied sizes, finishes and configurations to support demanding medical applications." products={surgicalNeedleProducts} /></SiteLayout>;
}