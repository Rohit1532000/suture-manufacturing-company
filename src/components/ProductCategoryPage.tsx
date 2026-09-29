import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  name: string;
  image: string;
  alt: string;
  specs: Array<[string, string]>;
  minimumOrder: string;
  description: string;
};

export function ProductCategoryPage({ title, intro, products }: { title: string; intro: string; products: Product[] }) {
  return (
    <>
      <section className="border-b border-border bg-secondary/55 py-14 md:py-20">
        <div className="container mx-auto px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">Product Range</p>
          <h1 className="max-w-4xl text-4xl font-bold text-medical-dark md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-16 px-6 md:space-y-24">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="grid items-start gap-9 border-b border-border pb-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14 md:pb-24"
            >
              <div className="group overflow-hidden rounded-md border border-border bg-secondary/40 shadow-premium">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div>
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  <PackageCheck className="h-4 w-4" /> Medical Product
                </div>
                <h2 className="text-3xl font-bold text-medical-dark md:text-4xl">{product.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

                <dl className="mt-7 grid grid-cols-1 border-t border-border sm:grid-cols-2">
                  {product.specs.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 border-b border-border py-3 pr-4 text-sm">
                      <dt className="font-semibold text-foreground">{label}</dt>
                      <dd className="text-muted-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="flex items-center gap-2 font-semibold text-medical-dark">
                    <CheckCircle2 className="h-5 w-5 text-teal" /> Minimum order quantity: {product.minimumOrder}
                  </p>
                  <Button asChild size="lg" className="h-11 px-6 shadow-premium transition-transform hover:-translate-y-0.5">
                    <Link to="/contact">Request a Quote <ArrowRight /></Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}