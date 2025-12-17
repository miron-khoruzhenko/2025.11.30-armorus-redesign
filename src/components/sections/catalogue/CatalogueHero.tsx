import Button from "../../ui/Button";
import { useTranslations } from "next-intl";

export default function CatalogueHero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden ">
      {/* Фон: видео */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/catalogue-bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Лёгкая затемняющая подложка */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
        
        <div className="flex flex-col items-center text-center w-full">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight drop-shadow-lg max-w-4xl uppercase">
            {t("title")}
          </h2>

          {/* Добавлен класс whitespace-pre-line для поддержки \n из JSON */}
          <p className="text-sm md:text-base max-w-xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md text-gray-100 whitespace-pre-line">
            {t("description")}
          </p>

          <div className="flex gap-6 justify-center">
            {/* Ссылка на Google Doc внешняя, поэтому используем обычный <a> */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button variant="outline" className="w-40 flex justify-center">
                {t("downloadButton")}
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}