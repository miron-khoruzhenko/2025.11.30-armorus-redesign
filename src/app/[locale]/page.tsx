import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Hero from "@components/sections/Hero";
import AboutPreview from "@components/sections/About";
import Products from "@components/sections/Products";
import Values from "@components/sections/Values";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <Hero />
      <AboutPreview />
      <Products />
      <Values />
      
      <Footer />
    </main>
  );
}