import chromic100 from "@/assets/Chromic Catgut Suture.jpeg";
import chromic76 from "@/assets/Chromic Catgut Suture 1.jpeg";
import lifelineSilk from "@/assets/LIFELINE Black Braided Silk Suture.jpeg";
import silkNeedle from "@/assets/Non Absorbable Silk Sutures with Needle.jpeg";
import silkReels from "@/assets/Silk Black Braided Suture.jpeg";
import sutureNeedle from "@/assets/Surgical Suture Needle.jpeg";
import stainlessNeedle from "@/assets/Stainless Steel Suture Needle.jpeg";
import type { Product } from "@/components/ProductCategoryPage";

export const absorbableProducts: Product[] = [
  {
    name: "Chromic Catgut Suture",
    image: chromic100,
    alt: "LIFECHROME N4259 Chromic Catgut Suture box",
    specs: [["Material", "Catgut Chromic"], ["Length", "100 cm"], ["Model", "LIFECHROME N4259"], ["Absorption", "Absorbable"], ["Brand", "LIFECHROME"], ["Needle", "Stainless Steel Atraumatic Needle"], ["Quality", "USP"], ["Made By", "Sutures Manufacturing Company"], ["Packaging", "Aluminium foil packaging"], ["Country of Origin", "Made in India"]],
    minimumOrder: "30 Box",
    description: "Chromic catgut with eyeless needle, supplied as a box of 12 sutures. USP quality with good pliability and a consistent absorption rate.",
  },
  {
    name: "Chromic Catgut Suture ",
    image: chromic76,
    alt: "LIFECHROME N4242 Chromic Catgut Suture box",
    specs: [["Material", "Chromic Catgut"], ["Type", "Absorbable"], ["Length", "76 cm"], ["Model", "LIFECHROME N4242"], ["Packaging", "Box of 12 sutures"], ["Quality", "USP"], ["Usage", "Hospital"], ["Brand", "LIFECHROME"], ["Characteristics", "Sterilised Surgical Needled Suture"], ["Colour", "Black"], ["USP Range", "USP 0 (4 metric)"], ["Country of Origin", "Made in India"]],
    minimumOrder: "10 Box",
    description: "LIFECHROME Chromic Catgut Suture is an absorbable, sterilised surgical needled suture prepared for dependable hospital use.",
  },
];

export const surgicalSutureProducts: Product[] = [
  {
    name: "LIFELINE Black Braided Silk Suture",
    image: lifelineSilk,
    alt: "LIFELINE Black Braided Silk Suture box",
    specs: [["Size", "4/0"], ["Brand", "LIFELINE"], ["Suture Length", "10 mtrs / 25 metres per reel"], ["Material", "Silk"], ["Sterility", "Non Sterile"], ["Packaging", "Box containing 6 reels"], ["Usage", "Hospital / Clinic"], ["Made By", "Sutures Manufacturing Company"], ["Country of Origin", "Made in India"]],
    minimumOrder: "5 Box",
    description: "LIFELINE Black Braided Silk is a non-absorbable, non-sterile surgical suture supplied for hospital and clinical applications.",
  },
  {
    name: "Non Absorbable Silk Sutures with Needle",
    image: silkNeedle,
    alt: "Non Absorbable Black Braided Silk Sutures with Needle box",
    specs: [["Material", "Silk"], ["Suture Size", "All"], ["Suture Length", "All"], ["Type", "Non Absorbable"], ["USP Class", "Braided"], ["Needle Type", "All"], ["Needle Shape", "All"], ["Size", "4-0"], ["Packaging", "Box"], ["Usage", "Hospital"], ["Colour", "Black"], ["Made By", "Sutures Manufacturing Company"]],
    minimumOrder: "30 Box",
    description: "Manufactured using high-grade raw material and advanced processes, these sutures are valued for reliable performance, superior quality and strength. Available in multiple sizes and related specifications at competitive prices.",
  },
  {
    name: "Silk Black Braided Suture",
    image: silkReels,
    alt: "LIFELINE Silk Black Braided Suture reels box",
    specs: [["Material", "Silk"], ["Brand", "LIFELINE"], ["Packaging", "Reels of 25 m"], ["Type", "Continuous Thread"], ["Diameter", "0.200 mm – 0.249 mm"], ["Shelf Life", "5 Years"], ["Construction", "Braided"], ["Composition", "Natural Silk"], ["Coating", "Coated"], ["Country of Origin", "Made in India"]],
    minimumOrder: "50 Box",
    description: "Processed by experienced professionals in compliance with international quality standards. This black braided silk is appreciated for dependable performance, strength and quality, and is offered in a broad range of surgical specifications.",
  },
];

export const surgicalNeedleProducts: Product[] = [
  {
    name: "Surgical Suture Needle",
    image: sutureNeedle,
    alt: "LIFELINE Surgical Suture Needle boxes",
    specs: [["Usage", "Hospital"], ["Type", "18 G"], ["Material", "Stainless Steel"], ["Size", "18 G"], ["Sterility", "No"], ["Packaging", "6 needles in a packet"], ["Brand", "LIFELINE"], ["Finish", "Mirror"], ["Point Type", "Round Bodied"], ["Curvature", "Half Circle"]],
    minimumOrder: "30 Pack",
    description: "Manufactured in a variety of sizes and related specifications using quality raw materials and advanced technology in compliance with international standards.",
  },
  {
    name: "Stainless Steel Suture Needle",
    image: stainlessNeedle,
    alt: "LIFELINE Stainless Steel Suture Needle boxes",
    specs: [["Brand", "LIFELINE"], ["Packaging", "Box of 24 packets; 6 needles per packet"], ["Type", "Suture Needle"], ["Size / Diameter", "0.150 mm – 0.200 mm"], ["Shelf Life", "5 Years"], ["Construction", "Braided"], ["Composition", "Natural Silk"], ["Coating", "Coated"], ["Country of Origin", "Made in India"]],
    minimumOrder: "Contact for quantity",
    description: "We offer Stainless Steel Suture Needles to medical clients. The complete product range is widely appreciated for its quality and dependable performance.",
  },
];