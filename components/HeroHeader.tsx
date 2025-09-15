"use client";
import { useEffect } from "react";

export default function HeroHeader() {
  useEffect(() => {
    const lines = Array.from(document.querySelectorAll(".hero-lines .line"));
    lines.forEach((el, i) => setTimeout(() => el.classList.add("show"), 450 * i));
  }, []);

  return (
    <header className="relative hero-bg overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="brand-gradient">Пэтли</span> mini
        </h1>

        <div className="hero-lines mt-6 space-y-2 text-lg sm:text-xl">
          <p className="line">Умный GPS-трекер для любимца — забота на расстоянии.</p>
          <p className="line">Местоположение, активность и безопасность — прямо в смартфоне.</p>
          <p className="line">Легко настраивается. Работает долго. Выглядит круто.</p>
        </div>
      </div>

      {/* относительный путь под GH Pages */}
      <img
        src="images/header-corgi.png"
        alt="Весёлая корги с Petly mini"
        className="pointer-events-none select-none absolute right-0 bottom-0 w-[42vw] max-w-[680px] opacity-90"
      />
    </header>
  );
}
