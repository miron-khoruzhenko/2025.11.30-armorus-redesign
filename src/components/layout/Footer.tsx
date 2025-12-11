import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 border-t border-gray-100 text-black flex flex-col justify-between min-h-[50vh]">
      
      <div className="w-full px-6 md:px-10 lg:px-12">
        
        {/* --- 1. ВЕРХНЯЯ СТРОКА: ИНФОРМАЦИЯ --- */}
        {/* Два блока, разнесенные по краям: Слева адрес, Справа контакты */}
        <div className="flex flex-col md:flex-row justify-between items-start text-sm font-sans tracking-wide  mb-16 md:mb-20">
          
          {/* Левый блок: Адрес и Год */}
          <div className="mb-6 md:mb-0 flex gap-8">
            <p className="font-display mb-1">Ankara, Türkiye</p>
            <p className="text-black">© 2025</p>
          </div>

          {/* Правый блок: Email и Телефон (рядом друг с другом) */}
          <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-20">
            <div className="flex gap-6">
              <span className="text-black block mb-1">Email:</span>
              <a href="mailto:info@armorus.tr" className=" hover:text-black transition">
                info@armorus.tr
              </a>
            </div>
            <div className="flex gap-6">
               <span className="text-black block mb-1">Tel:</span>
               <a href="tel:+905055550211" className=" hover:text-black transition">
                 +90 505 555 02 11
               </a>
            </div>
          </div>
        </div>

        {/* --- 2. СРЕДНЯЯ СТРОКА: НАВИГАЦИЯ --- */}
        {/* Не растянута (без justify-between). Используем gap, чтобы колонки были рядом. */}
        <div className="flex flex-col md:flex-row lg:gap-y-8 md:gap-x-32 items-start">
          
          {/* Колонка 1: Две строки */}
          <div className="flex flex-col lg:gap-2">
            <Link href="/contact" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              Contact
            </Link>
            <Link href="/about" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              About the Company
            </Link>
          </div>

          {/* Колонка 2: Одна строка (стоит рядом с первой колонкой) */}
          <div>
             <Link href="/catalogue" className="text-sm md:text-md font-bold uppercase font-display text-black hover:opacity-60 transition">
              Get the Catalogue
            </Link>
          </div>

        </div>

      </div>

      {/* --- 3. НИЖНЯЯ ЧАСТЬ: ОГРОМНЫЙ ЛОГОТИП --- */}
      <div className="w-full overflow-hidden leading-none mt-24">
        <h2 className="text-[14vw] ml-[1vw] font-commuters font-medium uppercase tracking-widest text-center w-full translate-y-[15%]">
          Armorus
        </h2>
      </div>
    </footer>
  );
}