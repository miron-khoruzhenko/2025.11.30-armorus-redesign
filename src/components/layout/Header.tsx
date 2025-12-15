"use client";

import { useState, useTransition } from "react";
// ВАЖНО: Импорт Link и router из вашего конфига i18n
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { navLinks, languages } from "@/data/navigation";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  // Хуки i18n
  const t = useTranslations("Navbar.links"); // Подключаемся к разделу ссылок
  const locale = useLocale(); // Текущий язык (en, tr, ru)
  const router = useRouter();
  const pathname = usePathname();
  
  // Состояния UI
  const [isPending, startTransition] = useTransition(); // Для плавного переключения языка
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Стилизация в зависимости от варианта
  const isSolid = variant === "solid";
  const textColor = isSolid ? "text-black" : "text-white";
  const hoverColor = isSolid ? "hover:text-gray-600" : "hover:text-gray-300";
  const burgerColor = isSolid ? "stroke-black" : "stroke-white";

  // Логика смены языка
  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Находим Label текущего языка (например "EN")
  const currentLangLabel = languages.find((l) => l.code === locale)?.label || "EN";

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 py-6 md:py-8 transition-colors duration-300 ${
        isSolid ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* --- ЛОГОТИП --- */}
        <Link href="/" className={`group relative z-50 ${textColor}`}>
          <h1 className="text-xl md:text-3xl font-commuters font-medium uppercase tracking-widest transition-opacity group-hover:opacity-80">
            Armorus
          </h1>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-12">
          <nav className={`flex gap-8 lg:gap-12 text-xs font-medium uppercase tracking-widest font-display ${textColor}`}>
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`${hoverColor} transition-colors`}
              >
                {/* t('home'), t('about') и т.д. */}
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Языковой переключатель (Desktop) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest ${textColor} ${hoverColor}`}
            >
              {currentLangLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Выпадающий список языков */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg border border-gray-100 py-2 flex flex-col gap-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    disabled={isPending}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`text-xs font-bold py-2 px-4 text-left uppercase tracking-widest hover:bg-gray-100 ${
                      locale === lang.code ? "text-black bg-gray-50" : "text-gray-500"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- MOBILE BURGER (Только кнопка открытия) --- */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className={`w-8 h-8 ${burgerColor}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-neutral-950 z-[60] flex flex-col justify-center items-center animate-in fade-in duration-200">
            
            {/* Кнопка Закрыть */}
            <button
              className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Мобильная навигация */}
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold uppercase tracking-[0.2em] text-white hover:text-brand-sand transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Языки в мобильном меню */}
            <div className="mt-16 border-t border-white/20 pt-8 w-40 flex justify-center gap-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  disabled={isPending}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    locale === lang.code ? "text-brand-sand" : "text-white/50"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}