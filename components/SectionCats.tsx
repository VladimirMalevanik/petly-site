"use client";
import { useEffect, useState } from "react";
import StrapCarousel, { Strap } from "./StrapCarousel";
import { catBase, catStraps } from "@/lib/straps";

export default function SectionCats() {
  const [active, setActive] = useState<Strap>(catStraps[0]);

  useEffect(() => {
    const lines = Array.from(document.querySelectorAll(".cat-lines .line"));
    lines.forEach((el, i) => setTimeout(() => el.classList.add("show"), 450 * i));
  }, []);

  return (
    <section className="py-16 px-6">
      <h2 className="cats-title">
        К<span className="o">о</span>шк<span className="i">и</span>
      </h2>

      <div className="cat-lines mx-auto max-w-2xl mt-6 space-y-2 text-lg text-center">
        <p className="line">Коты любят свободу, а вы — спокойствие. Petly mini объединяет оба мира.</p>
        <p className="line">Следите за местоположением и активностью любимца, не мешая его приключениям.</p>
        <p className="line">Ранние сигналы по активности помогут заметить отклонения в самочувствии.</p>
      </div>

      <div className="mt-10 mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-start">
        <div className="preview-wrap mx-auto">
          {/* если есть готовая фотка питомца с ремешком — используем её, иначе — base + накладка */}
          <img src={active.petImage ?? catBase} alt="Кошка" className="base" />
          {!active.petImage && <img src={active.strapImage} alt="Ремешок" className="strap" />}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Собери свой Petly mini</h3>
          <ul className="space-y-1 text-neutral-300 mb-4">
            <li>✓ GPS+ГЛОНАСС Pro (включено)</li>
            <li>✓ LED-подсветка (опция)</li>
            <li>✓ Камера 1080p (опция)</li>
            <li>✓ Температура и активность (опция)</li>
          </ul>

          <StrapCarousel
            items={catStraps}
            activeId={active.id}
            onPick={setActive}
          />
          <p className="mt-2 text-sm opacity-70">Наведи курсор — автопрокрутка остановится. Колёсиком можно листать вручную.</p>
        </div>
      </div>
    </section>
  );
}
