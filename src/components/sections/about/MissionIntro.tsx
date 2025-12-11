import Container from "@/components/ui/Container";
import Link from "next/link";

export default function MissionIntro() {
  return (
    <section className="py-32 md:py-48 bg-white">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* Заголовок */}
          {/* text-black, без оттенков серого */}
          <h2 className="text-3xl md:text-5xl font-sans leading-tight max-w-4xl text-black">
            Security is not merely about <br /> 
						equipment — it is the outcome of <br /> 
						precise engineering, rigorous testing, <br />
						and a clear vision.
          </h2>

          {/* Блок с текстом и ссылкой */}
          {/* Убрали flex-row, теперь элементы идут друг под другом */}
          <div className="flex flex-col items-start gap-10 md:gap-14">
            {/* Текст */}
            {/* max-w-2xl делает блок уже (собранее). font-light делает его визуально легче, но цвет остается черным */}
            <p className="text-sm md:text-base text-black font-light max-w-2xl leading-relaxed font-sans">
              At Armorus, we are dedicated to setting the highest standards of protection for military and security professionals. Every product we create is the culmination of advanced design, meticulous craftsmanship, and an unwavering commitment to safety in the field. For us, each innovation carries a profound responsibility — the responsibility of protecting lives.
            </p>
            
            
            {/* Ссылка */}
            {/* font-normal (не bold), border-b-1 (тонкая линия), pb-0 (линия близко к тексту) */}
            <Link href="/catalogue" className="text-sm font-sans uppercase border-b border-black pb-[1px] hover:opacity-60 transition text-black">
              Our Catalogue
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}