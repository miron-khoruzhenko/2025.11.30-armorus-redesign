import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] w-full bg-gray-900 text-white overflow-hidden flex flex-col justify-end pb-12">
      {/* ФОН: Можно использовать карту или текстуру */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50"
        style={{ backgroundImage: "url('/images/contact/hero.jpg')" }} // Темная текстура или фото связиста
      >
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <Container className="relative z-10 w-full">
         {/* tracking-tighter делает текст сжатым */}
         <h1 className="text-[10vw] md:text-[8vw] leading-none font-commuters font-bold uppercase tracking-tighter text-white">
            Contact
         </h1>
      </Container>
    </section>
  );
}