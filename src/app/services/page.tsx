import ServiceSection from "@/components/ServiceSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function Services() {
  return <ServiceSection />;
}
