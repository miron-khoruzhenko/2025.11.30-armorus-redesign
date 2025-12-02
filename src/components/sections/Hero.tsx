import Container from "../ui/Container";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <Container className="w-full">
          <div className="flex flex-col items-center text-center">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-6 leading-tight drop-shadow-lg max-w-4xl">
              Welcome to Armorus,<br />
              Precision Built for the Brave.
            </h2>
            
            <p className="text-sm md:text-base max-w-xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md text-gray-100">
              A defense manufacturer headquartered in Ankara, Türkiye — specializing in high-quality products built for mission-critical environments.
            </p>
            
            <div className="flex gap-6 justify-center">
              {/* Обе кнопки теперь используют variant="outline" */}
              <Link href="/catalogue">
                  <Button variant="outline">Our Catalogue</Button>
              </Link>
              <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}