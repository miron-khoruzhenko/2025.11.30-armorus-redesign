import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("Contact.Hero");

  return (
    <section className="relative h-[50vh] w-full bg-gray-900 text-white overflow-hidden flex flex-col justify-end pb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50"
        style={{ backgroundImage: "url('/images/contact/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <Container className="relative z-10 w-full">
         <h1 className="text-[10vw] md:text-[7vw] leading-none font-commuters font-medium uppercase tracking-wide text-white">
            {t("title")}
         </h1>
      </Container>
    </section>
  );
}