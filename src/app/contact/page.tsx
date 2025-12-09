import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactContent from "@/components/sections/contact/ContactContent";
import MarqueeSeparator from "@/components/ui/MarqueeSeparator";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header прозрачный */}
      <Header variant="transparent" />
      
      <ContactHero />
      
      <ContactContent />
      
      <MarqueeSeparator />
      
      <Footer />
    </main>
  );
}