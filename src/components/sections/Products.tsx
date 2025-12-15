import Container from "../ui/Container";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("Products"); // Берет ключи из home.json -> Products

  return (
    <section className="pb-24 pt-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-bold font-display tracking block mb-6">
            {t("label")}
          </span>
          <p className="text-xl md:text-2xl font-sans leading-normal">
            {t("description")}
          </p>
        </div>
      </Container>
    </section>
  );
}