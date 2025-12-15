// src/data/navigation.ts

export const navLinks = [
  // href: "/" обычно обрабатывается отдельно, но можно оставить
  // Я добавил key для перевода
  { key: "home", href: "/" }, 
  { key: "about", href: "/about" },
  { key: "catalogue", href: "/catalogue" },
  { key: "contact", href: "/contact" },
];

export const languages = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "ru", label: "RU" },
];