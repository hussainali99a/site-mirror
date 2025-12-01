import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import JourneySection from "@/components/JourneySection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <HeroCarousel />
      <StatsSection />
      <JourneySection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
