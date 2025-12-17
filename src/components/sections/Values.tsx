import Container from "../ui/Container";
import { useTranslations } from "next-intl";

const keys = ['quality', 'integrity', 'reliability'] as const;

export default function Values() {
  const t = useTranslations("Values");

  return (
    <section className="bg-[#1a1a1a] text-white py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keys.map((key) => (
            <div 
              key={key} 
              className="border border-white/20 p-8 h-80 flex flex-col justify-between hover:border-white/50 transition duration-300"
            >
              <h4 className="text-sm font-display uppercase tracking-widest font-bold">
                {/* Например: Values.quality.title */}
                {t(`${key}.title`)} 
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {/* Например: Values.quality.description */}
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}