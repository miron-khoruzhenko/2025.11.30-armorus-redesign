import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-20 text-center">
      <Container className="flex flex-col items-center gap-8">
        {/* Логотип (SVG иконка щита) */}
        <div className="w-24 h-24 flex items-center justify-center mb-2">
            {/* Вставьте сюда SVG щита */}
            {/* <span className="text-lg">🛡️</span>  */}
						<Image src="/logo.svg" alt="Shield Icon" width={60} height={60} />
        </div>

        <h2 className="text-5xl text-center font-display uppercase tracking-[0.5em]">Armorus</h2>

        <nav className="flex gap-8 text-[10px] uppercase tracking-widest font-display text-gray-500">
           <Link href="#" className="hover:text-black transition">Contact</Link>
           <Link href="#" className="hover:text-black transition">About</Link>
           <Link href="#" className="hover:text-black transition">Catalogue</Link>
        </nav>
      </Container>
    </footer>
  );
}