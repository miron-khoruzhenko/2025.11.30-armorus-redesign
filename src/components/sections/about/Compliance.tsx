import Typography from "@/components/typo/Typo";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Compliance() {
  return (
    <section className="bg-[#1a1a1a] py-24 text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start">

          {/* ЛЕВАЯ КОЛОНКА: Находится на "первой линии" (в самом верху) */}
          <span className="text-sm font-bold font-display text-white mb-12 md:mb-0">
            Our Products
          </span>
          {/* ПРАВАЯ КОЛОНКА: Смещена вниз (на "вторую линию") */}
          {/* md:mt-16 опускает этот блок ниже уровня лейбла слева */}
          <div className="md:w-1/2 flex flex-col items-start md:mt-24">

            {/* Текст: Белый, Uppercase, Medium */}
            <h4 className="text-lg md:text-xl font-display uppercase font-bold leading-relaxed mb-8 tracking-wide text-white">
              All Armorus products are <br /> developed and tested in compliance <br /> with both national and <br /> international quality standards.
            </h4>

            {/* Параграф: Белый, Light */}
            <p className="text-xs md:text-sm text-white font-light mb-16 leading-relaxed max-w-md">
              Every stage of production, from fabrics and stitching to equipment and ballistic performance, is monitored under ISO and EN regulations.
            </p>

            {/* Ссылка: Белая */}
            <Link href="/catalogue" className="text-sm uppercase border-b border-white pb-[1px] hover:opacity-80 transition text-white">
              View Catalogue
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}