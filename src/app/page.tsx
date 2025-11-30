import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Products from "@components/sections/Products";
import Values from "@components/sections/Values";
import Footer from "@components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Values />
      <Footer />
    </main>
  );
}