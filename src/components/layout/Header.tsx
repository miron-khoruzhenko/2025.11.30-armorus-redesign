import Link from "next/link";
import Container from "../ui/Container";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  // Если в будущем на других страницах нужен будет белый фон у меню:
  const bgClass = variant === "solid" ? "bg-white text-black" : "bg-transparent text-white";

  return (
    <header className={`absolute top-0 left-0 w-full z-50 py-6 md:py-8 transition-colors duration-300 ${bgClass}`}>
      <Container className="flex justify-between items-baseline">
        {/* Логотип СЛЕВА */}
        <Link href="/" className="group">
          <h1 className="text-xl md:text-2xl font-display tracking-[0.15em] uppercase font-bold group-hover:opacity-80 transition-opacity">
            Armorus
          </h1>
        </Link>

        {/* Навигация СПРАВА */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-xs font-medium uppercase tracking-widest font-display">
          <Link href="/" className="hover:opacity-70 transition-opacity">Homepage</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          <Link href="/catalogue" className="hover:opacity-70 transition-opacity">Catalogue</Link>
        </nav>

        {/* Мобильное меню (гамбургер) можно добавить сюда позже */}
        <button className="md:hidden text-xs uppercase tracking-widest">Menu</button>
      </Container>
    </header>
  );
}