import Container from "../ui/Container";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* 1. Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/hero_bg.jpg')" }} // Убедитесь, что картинка есть
      >
        {/* Затемнение фона, чтобы текст читался лучше */}
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* 2. Главный контейнер для позиционирования (z-10 чтобы быть над фоном) */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* --- ВЕРХ: Навигация --- */}
        <header className="pt-8 w-full">
          <Container className="flex flex-col items-center justify-center gap-6">
             <h1 className="text-2xl font-display tracking-[0.2em] uppercase">Armorus</h1>
             <nav className="flex gap-8 text-[10px] uppercase tracking-widest font-display">
               <Link href="#" className="hover:opacity-70 transition-opacity">Contact</Link>
               <Link href="#" className="hover:opacity-70 transition-opacity">About</Link>
               <Link href="#" className="hover:opacity-70 transition-opacity">Catalogue</Link>
             </nav>
          </Container>
        </header>

        {/* --- НИЗ: Контент (Заголовки и кнопки) --- */}
        {/* justify-end прижимает контент к низу, pb-32 (padding-bottom) поднимает его на нужную высоту */}
        <div className="w-full flex flex-col justify-end items-center text-center pb-24 md:pb-32 ">
          <Container>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans mb-4 leading-tight drop-shadow-md">
              Welcome to Armorus,<br />
              Precision Built for the Brave.
            </h2>
            
            <p className="text-xs md:text-sm max-w-lg mx-auto mb-10 opacity-90 font-sans leading-relaxed drop-shadow-sm">
              A defense manufacturer headquartered in Ankara, Türkiye — specializing in high-quality products built for mission-critical environments.
            </p>
            
            <div className="flex gap-6 justify-center">
              <Button variant="outline">Our Catalogue</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </Container>
        </div>

      </div>
    </section>
  );
}