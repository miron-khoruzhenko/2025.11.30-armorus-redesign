import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionIntro from "@/components/sections/about/MissionIntro";
import SupportContact from "@/components/sections/about/SupportContact";
import MissionDetailed from "@/components/sections/about/MissionDetailed";
import Compliance from "@/components/sections/about/Compliance";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="transparent" />
      
      <AboutHero />
      <MissionIntro />
      <SupportContact />
      <MissionDetailed />
      <Compliance />
      
      <Footer />
    </main>
  );
}