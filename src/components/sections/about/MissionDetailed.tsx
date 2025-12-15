import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function MissionDetailed() {
  const t = useTranslations("MissionDetailed");

  return (
    <section className="py-24 bg-white">
      <Container>
        <span className="text-md font-display text-black mb-12 block">
          {t("label")}
        </span>

        <h3 className="text-2xl md:text-4xl font-sans mb-16 max-w-2xl leading-tight text-black">
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-sm text-black leading-relaxed font-sans">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </Container>
    </section>
  );
}