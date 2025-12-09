export default function MarqueeSeparator() {
  // Повторяем слово достаточно раз, чтобы заполнить экран
  const items = Array(8).fill("ARMORUS");

  return (
    <div className="w-full bg-black py-4 border-y border-black overflow-hidden flex relative z-20 select-none">
      
      {/* Контейнер анимации */}
      <div className="animate-marquee whitespace-nowrap flex min-w-full items-center">
        
        {/* Первая группа слов */}
        {items.map((item, i) => (
          <div key={i} className="flex items-center mx-6 md:mx-10">
            <span className="text-xl md:text-3xl font-commuters font-bold uppercase tracking-tight text-white">
              {item}
            </span>
            {/* Разделитель (например, точка или слэш) */}
            <span className="ml-12 md:ml-20 w-2 h-2 bg-white rounded-full opacity-50 block" />
          </div>
        ))}

        {/* Вторая группа слов (дубликат для бесшовности) */}
        {items.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center mx-6 md:mx-10">
            <span className="text-xl md:text-3xl font-commuters font-bold uppercase tracking-tight text-white">
              {item}
            </span>
            <span className="ml-12 md:ml-20 w-2 h-2 bg-white rounded-full opacity-50 block" />
          </div>
        ))}
        
      </div>
    </div>
  );
}