"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, languages } from "@/data/navigation";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const textColor = variant === "solid" ? "text-black" : "text-white";
  const hoverColor = variant === "solid" ? "hover:text-gray-600" : "hover:text-gray-300";
  const burgerColor = variant === "solid" ? "stroke-black" : "stroke-white";

  return (
    <header className={`absolute top-0 left-0 w-full z-50 py-6 md:py-8 transition-colors duration-300 ${variant === "solid" ? "bg-white" : "bg-transparent"}`}>
      {/* Используем div с padding вместо Container для гибкости, если нужно */}
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* ЛОГОТИП (Шрифт Commuters Sans) */}
        <Link href="/" className={`group relative z-50 ${textColor}`}>
          <h1 className="text-xl md:text-3xl font-commuters uppercase tracking-wide transition-opacity group-hover:opacity-80">
            Armorus
          </h1>
        </Link>

        {/* --- DESKTOP --- */}
        <div className="hidden md:flex items-center gap-12">
          <nav className={`flex gap-8 lg:gap-12 text-xs font-medium uppercase tracking-widest font-display ${textColor}`}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`${hoverColor} transition-colors`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Язык */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest ${textColor} ${hoverColor}`}
            >
              {currentLang}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg border border-gray-100 py-2 flex flex-col gap-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.label);
                      setIsLangOpen(false);
                    }}
                    className="text-xs font-bold text-black hover:bg-gray-100 py-2 px-4 text-left uppercase tracking-widest"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- MOBILE BURGER BUTTON (Только открытие) --- */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-8 h-8 ${burgerColor}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        {/* Крестик теперь внутри этого блока, он будет видим на темном фоне */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 z-[60] flex flex-col justify-center items-center animate-in fade-in duration-200">
            
            {/* Кнопка ЗАКРЫТЬ (Крестик) - Абсолютно в углу меню */}
            <button 
              className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold uppercase tracking-[0.2em] text-white hover:text-brand-sand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-16 border-t border-white/20 pt-8 w-40 flex justify-center gap-6">
              {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => {
                     setCurrentLang(lang.label);
                     setIsMobileMenuOpen(false);
                   }}
                   className={`text-sm font-bold uppercase tracking-widest transition-colors ${currentLang === lang.label ? 'text-brand-sand' : 'text-white/50'}`}
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