"use client"; // Для формы

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactContent() {
  return (
    <section className="py-24 bg-white text-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- ЛЕВАЯ КОЛОНКА: ИНФОРМАЦИЯ (4 колонки из 12) --- */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            
            {/* Блок 1: Headquarters */}
            <div>
              {/* Заголовки разделов: tracking-tight (сжато), font-bold */}
              <h3 className="text-sm font-bold uppercase tracking-tight mb-4 border-b border-black pb-2 inline-block">
                Headquarters
              </h3>
              <p className="text-sm font-light font-sans leading-relaxed">
                Organize Sanayi Bölgesi<br />
                12. Cadde No: 5<br />
                06935 Ankara, Türkiye
              </p>
            </div>

            {/* Блок 2: Direct Contact */}
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-4 border-b border-black pb-2 inline-block">
                Direct Contact
              </h3>
              
              <div className="flex flex-col gap-4 text-sm font-light font-sans">
                <div>
                   <span className="block font-medium mb-1">General Inquiries:</span>
                   <a href="mailto:info@armorus.tr" className="hover:opacity-60 transition">info@armorus.tr</a>
                </div>
                <div>
                   <span className="block font-medium mb-1">Sales Department:</span>
                   <a href="mailto:sales@armorus.tr" className="hover:opacity-60 transition">sales@armorus.tr</a>
                </div>
                <div>
                   <span className="block font-medium mb-1">Phone:</span>
                   <a href="tel:+905055550211" className="hover:opacity-60 transition">+90 505 555 02 11</a>
                </div>
              </div>
            </div>

          </div>

          {/* --- ПРАВАЯ КОЛОНКА: ФОРМА (7 колонок из 12, сдвиг на 1) --- */}
          <div className="lg:col-span-7 lg:col-start-6">
            <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight mb-12">
              Send us a message
            </h3>

            <form className="flex flex-col gap-8">
              
              {/* Группа полей: Имя и Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-tight">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-tight">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm"
                  />
                </div>
              </div>

              {/* Тема */}
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold uppercase tracking-tight">Subject</label>
                 <select className="w-full border-b border-black py-3 bg-transparent focus:outline-none focus:border-gray-500 transition-colors font-light text-sm appearance-none rounded-none">
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                 </select>
              </div>

              {/* Сообщение */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-tight">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm resize-none"
                />
              </div>

              {/* Кнопка отправки */}
              <div className="mt-8">
                <button 
                  type="submit"
                  className="px-12 py-4 border border-black text-xs font-bold uppercase tracking-tight hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}