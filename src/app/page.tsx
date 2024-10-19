import HeroSection from "@/components/Hero/HeroSection";
import { Main } from "next/document";

export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<h1 className="text-2xl text-center">Next Music</h1>
<HeroSection/>
</main>
  );
}
