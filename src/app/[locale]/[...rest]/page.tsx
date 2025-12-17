// src/app/[locale]/[...rest]/page.tsx
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  // Эта функция принудительно вызывает not-found.tsx 
  // в текущей директории (то есть внутри [locale])
  notFound();
}