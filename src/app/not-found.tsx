// src/app/not-found.tsx
"use client";

import Error from "next/error";

// Этот файл срабатывает, если мы ввели URL без локали, который не существует.
// В идеале middleware должен это обрабатывать, но это fallback.
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
				fdfsdf
      </body>
    </html>
  );
}