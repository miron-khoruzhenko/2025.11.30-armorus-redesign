import Container from "../ui/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"; 

export default function About() {
  const t = useTranslations("About"); // Берет ключи из home.json -> About

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Изображение */}
          <div className="relative aspect-[4/5] bg-gray-200 w-full md:w-4/5">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
            </div>
            <Image 
              src="/soldier-profile.jpg" 
              fill 
              className="object-cover" 
              alt="Turkish Soldier" 
            />
          </div>

          {/* Текст */}
          <div className="space-y-8 h-full flex flex-col items-start justify-between">
            <span className="text-sm font-bold font-display block mb-2">
              {t("label")}
            </span>

            <h3 className="text-2xl md:text-3xl font-sans max-w-md">
              {t("title")}
            </h3>

            <p className="text-sm max-w-md">
              {t("description")}
            </p>

            {/* Используем Link вместо <a> для корректного перехода между языками */}
            <Link 
              href="/about" 
              className="inline-block text-sm font-sans uppercase border-b border-black pt-4 hover:opacity-60 transition"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}