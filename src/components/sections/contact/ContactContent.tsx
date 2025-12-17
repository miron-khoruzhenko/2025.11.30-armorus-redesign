"use client";

import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import { FaWhatsappSquare } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

// Типы для статуса формы
type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactContent() {
  const t = useTranslations("Contact");
  const subjectOptions = ['product', 'tech', 'partnership', 'other'] as const;

  // Состояния
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState<string | null>(null);

  // Ref для сброса капчи после успешной отправки
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Обработчик отправки
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      token: token, // Добавляем токен капчи
    };

    if (!token) {
      setStatus("error");
      setErrorMessage("Please complete the security check.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      // Сбрасываем форму
      (e.target as HTMLFormElement).reset();
      // Сбрасываем капчу
      turnstileRef.current?.reset();
      setToken(null);

    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message.");
    }
  }

  return (
    <section className="py-24 bg-white text-black border-b border-black font-display">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* --- ЛЕВАЯ КОЛОНКА --- */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            {/* Блок 1: Headquarters */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight mb-4 border-b border-black pb-2 inline-block">
                {t("Info.headquarters")}
              </h3>
              <p className="text-sm font-light font-sans leading-relaxed whitespace-pre-wrap">
                {t.rich("Info.address", {
                  br: () => <br />
                })}
              </p>
            </div>

            {/* Блок 2: Direct Contact */}
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-4 border-b border-black pb-2 inline-block">
                {t("Info.directContact")}
              </h3>

              <div className="flex flex-col gap-4 text-sm font-light font-sans">
                <div>
                  <span className="block font-medium mb-1">{t("Info.general")}</span>
                  <a href="mailto:info@armorus.tc" className="hover:opacity-60 transition">info@armorus.tc</a>
                </div>
                <div>
                  <span className="block font-medium mb-1">{t("Info.phone")}</span>
                  <a href="tel:+905327831498" className="hover:opacity-60 transition">+90 532 783 14 98</a>
                </div>
                <div>
                  <a href="https://wa.me/+905327831498?text=I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer">
                    <FaWhatsappSquare className="w-10 h-10 text-[#25D366] transition-colors duration-300 hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- ПРАВАЯ КОЛОНКА: ФОРМА --- */}
          <div className="lg:col-span-7 lg:col-start-6">
            <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight mb-12">
              {t("Form.title")}
            </h3>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-sm">
                <h4 className="font-bold mb-2">Message Sent!</h4>
                <p className="text-sm">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs uppercase font-bold underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Имя и Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-tight">{t("Form.nameLabel")}</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder={t("Form.namePlaceholder")}
                      className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-tight">{t("Form.emailLabel")}</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder={t("Form.emailPlaceholder")}
                      className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm"
                    />
                  </div>
                </div>

                {/* Тема */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-tight">{t("Form.subjectLabel")}</label>
                  <select name="subject" className="w-full border-b border-black py-3 bg-transparent focus:outline-none focus:border-gray-500 transition-colors font-light text-sm appearance-none rounded-none">
                    {subjectOptions.map((key) => (
                      <option key={key} value={key}>
                        {t(`Form.options.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Сообщение */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-tight">{t("Form.messageLabel")}</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder={t("Form.messagePlaceholder")}
                    className="w-full border-b border-black py-3 bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors font-light text-sm resize-none"
                  />
                </div>

                {/* Блок Turnstile */}
                <div className="mt-2">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NODE_ENV === 'development' ?
                      process.env.NEXT_PUBLIC_TURNSTILE_DUMMY_SITE_KEY! :
                      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                    }
                    onSuccess={(token) => setToken(token)}
                    onError={() => setErrorMessage("Security check failed")}
                    onExpire={() => setToken(null)}
                  />
                </div>

                {/* Сообщение об ошибке */}
                {status === "error" && (
                  <div className="text-red-600 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Кнопка отправки */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-40 flex justify-center uppercase text-xs tracking-widest font-display transition-colors duration-300 border border-black px-6 py-3 hover:bg-black hover:text-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : t("Form.submitButton")}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}