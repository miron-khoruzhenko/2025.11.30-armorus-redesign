import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("Footer");
  
  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden flex flex-col justify-end">
      {/* ФОН */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/about/about-hero-jet.jpg')" }} // Замените на фото самолета
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* КОНТЕНТ ВНИЗУ */}
      <div className="relative z-10 w-full pb-8 md:pb-12">
        {/* Огромный текст */}
        <div className="w-full overflow-hidden leading-none mb-6">
          <h1 className="text-[14vw] ml-[1vw]  font-commuters font-medium uppercase tracking-widest text-center w-full translate-y-[5%]">
            Armorus</h1>
        </div>

        <div className="w-full px-6 md:px-10 lg:px-12 flex flex-col md:flex-row justify-between items-start text-sm font-sans tracking-wide">

          <div className="mb-6 md:mb-0 flex gap-8">
            <p className="font-display mb-1">{t("address")}</p>
            <p className="text-white">© 2025</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-20">
            <div className="flex gap-6">
              <span className="text-white block mb-1">{t("emailLabel")}</span>
              <a href="mailto:info@armorus.tc" className="transition">
                info@armorus.tc
              </a>
            </div>
            <div className="flex gap-6">
              <span className="text-white block mb-1">{t("telLabel")}</span>
              <a href="tel:+905327831498" className="transition">
                +90 532 783 14 98
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}