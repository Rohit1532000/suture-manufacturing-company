import type { ReactNode } from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { FloatingButtons } from "@/components/FloatingButtons";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}