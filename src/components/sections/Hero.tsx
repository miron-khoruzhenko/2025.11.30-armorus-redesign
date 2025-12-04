import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden ">
      {/* Фон */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* Контент */}
      {/* Убран Container, используем px для отступов по бокам */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
        
        <div className="flex flex-col items-center text-center w-full">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-6 leading-tight drop-shadow-lg max-w-4xl">
            Welcome to Armorus,<br />
            Precision Built for the Brave.
          </h2>
          
          <p className="text-sm md:text-base max-w-xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md text-gray-100">
            A defense manufacturer headquartered in Ankara, Türkiye — specializing in high-quality products built for mission-critical environments.
          </p>
          
          <div className="flex gap-6 justify-center">
            {/* Добавил w-48 и text-center для одинаковой ширины кнопок */}
            <Link href="/catalogue">
                <Button variant="outline" className="w-40 flex justify-center">Our Catalogue</Button>
            </Link>
            <Link href="/contact">
                <Button variant="outline" className="w-40 flex justify-center">Contact Us</Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}