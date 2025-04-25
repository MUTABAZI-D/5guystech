import { AboutSection } from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return <AboutSection />;
}
