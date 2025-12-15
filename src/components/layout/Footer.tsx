import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer"); // Подключаем пространство имен Footer

  return (
    <footer className="w-full bg-white py-16 border-t border-gray-100 text-black flex flex-col justify-between min-h-[50vh]">
      
      <div className="w-full px-6 md:px-10 lg:px-12">
        
        {/* --- 1. ВЕРХНЯЯ СТРОКА: ИНФОРМАЦИЯ --- */}
        <div className="flex flex-col md:flex-row justify-between items-start text-sm font-sans tracking-wide mb-16 md:mb-20">
          
          {/* Левый блок: Адрес и Год */}
          <div className="mb-6 md:mb-0 flex gap-8">
            {/* Адрес тоже берем из переводов, вдруг захотите написать "Анкара, Турция" кириллицей */}
            <p className="font-display mb-1">Ankara, Türkiye</p> 
            <p className="text-black">© 2025</p>
          </div>

          {/* Правый блок: Email и Телефон */}
          <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-20">
            <div className="flex gap-6">
              <span className="text-black block mb-1">{t("emailLabel")}</span>
              <a href="mailto:info@armorus.tc" className="hover:text-black transition">
                info@armorus.tc
              </a>
            </div>
            <div className="flex gap-6">
               <span className="text-black block mb-1">{t("telLabel")}</span>
               <a href="tel:+905327831498" className="hover:text-black transition">
                 +90 532 783 14 98
               </a>
            </div>
          </div>
        </div>

        {/* --- 2. СРЕДНЯЯ СТРОКА: НАВИГАЦИЯ --- */}
        <div className="flex flex-col md:flex-row lg:gap-y-8 md:gap-x-32 items-start">
          
          {/* Колонка 1 */}
          <div className="flex flex-col lg:gap-2">
            <Link href="/contact" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              {t("nav.contact")}
            </Link>
            <Link href="/about" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              {t("nav.about")}
            </Link>
          </div>

          {/* Колонка 2 */}
          <div>
             <Link href="/catalogue" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              {t("nav.catalogue")}
            </Link>
          </div>

        </div>

      </div>

      {/* --- 3. НИЖНЯЯ ЧАСТЬ: ОГРОМНЫЙ ЛОГОТИП --- */}
      <div className="w-full overflow-hidden leading-none mt-24">
        <h2 className="text-[14vw] ml-[1vw] font-commuters font-medium uppercase tracking-widest text-center w-full translate-y-[15%]">
          Armorus
        </h2>
      </div>
    </footer>
  );
}