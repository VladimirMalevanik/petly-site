"use client";
import { useEffect, useState } from "react";
import StrapCarousel, { Strap } from "./StrapCarousel";
import { dogBase, dogStraps } from "@/lib/straps";

export default function SectionDogs() {
  const [active, setActive] = useState<Strap>(dogStraps[0]);

  useEffect(() => {
    const lines = Array.from(document.querySelectorAll(".dog-lines .line"));
    lines.forEach((el, i) => setTimeout(() => el.classList.add("show"), 450 * i));
  }, []);

  return (
    <section className="py-16 px-6">
      <h2 className="dogs-title">
        С<span className="o">о</span>бак<span className="i">и</span>
      </h2>

      <div className="dog-lines mx-auto max-w-2xl mt-6 space-y-2 text-lg text-center">
        <p className="line">Собаки — исследователи. Вы — их навигатор. Petly mini сохраняет связь даже в дальних забегах.</p>
        <p className="line">Трекинг и оповещения — чтобы искать не пришлось. Просто бегите вместе.</p>
        <p className="line">Активность и режим — держите хвоста в форме без лишней бюрократии.</p>
      </div>

      <div className="mt-10 mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-start">
        <div className="preview-wrap mx-auto">
          <img src={active.petImage ?? dogBase} alt="Собака" className="base" />
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
            items={dogStraps}
            activeId={active.id}
            onPick={setActive}
          />
          <p className="mt-2 text-sm opacity-70">Наведи курсор — автопрокрутка остановится. Колёсиком можно листать вручную.</p>
        </div>
      </div>
    </section>
  );
}
