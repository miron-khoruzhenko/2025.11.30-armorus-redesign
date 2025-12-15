import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function MissionIntro() {
  const t = useTranslations("MissionIntro");

  return (
    <section className="py-32 md:py-48 bg-white">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          
          <h2 className="text-3xl md:text-5xl font-sans leading-tight max-w-4xl text-black">
            {/* Используем rich для поддержки тега <br> из json */}
            {t.rich("title", {
              br: () => <br />
            })}
          </h2>

          <div className="flex flex-col items-start gap-10 md:gap-14">
            <p className="text-sm md:text-base text-black font-light max-w-2xl leading-relaxed font-sans">
              {t("description")}
            </p>
            
            <Link href="/catalogue" className="text-sm font-sans uppercase border-b border-black pb-[1px] hover:opacity-60 transition text-black">
              {t("link")}
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}