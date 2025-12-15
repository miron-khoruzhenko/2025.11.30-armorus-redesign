import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Compliance() {
  const t = useTranslations("Compliance");

  return (
    <section className="bg-[#1a1a1a] py-24 text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start">

          <span className="text-sm font-bold font-display text-white mb-12 md:mb-0">
            {t("label")}
          </span>
          
          <div className="md:w-1/2 flex flex-col items-start md:mt-24">

            <h4 className="text-lg whitespace-pre-wrap md:text-xl font-display uppercase font-bold leading-relaxed mb-8 tracking-wide text-white">
               {t.rich("title", {
                  br: () => <br />
                })}
            </h4>

            <p className="text-xs md:text-sm text-white font-light mb-16 leading-relaxed max-w-md whitespace-pre-wrap">
              {t("description")}
            </p>

            <Link href="/catalogue" className="text-sm uppercase border-b border-white pb-[1px] hover:opacity-80 transition text-white">
              {t("link")}
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}