import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/Hero/HeroSection";
import MusicSchoolTestimonials from "@/components/TestinomialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Main } from "next/document";

export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<HeroSection/>
<FeaturedCourses/>
<WhyChooseUs/>
<MusicSchoolTestimonials/>
</main>
  );
}
