import Button from "../ui/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomeHero");

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
      <div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
        
        <div className="flex flex-col items-center text-center w-full">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-6 leading-tight drop-shadow-lg max-w-5xl whitespace-pre-line">
            {t("title")}
          </h2>
          
          <p className="text-sm md:text-base max-w-xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md text-gray-100">
            {t("description")}
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link href="/catalogue">
                <Button variant="outline" className="w-40 flex justify-center">
                  {t("catalogueButton")}
                </Button>
            </Link>
            <Link href="/contact">
                <Button variant="outline" className="w-40 flex justify-center">
                  {t("contactButton")}
                </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}