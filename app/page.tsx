import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyPacal from "@/components/home/WhyPacal";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <WhyPacal />
      <ProcessSection />
      <CTASection />
    </>
  );
}
