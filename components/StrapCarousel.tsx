"use client";
import { useEffect, useRef } from "react";

export type Strap = {
  id: string;
  name: string;
  price: number;             // в рублях
  strapImage: string;        // PNG ремешка (прозрачный фон) — накладывается на base
  petImage?: string;         // НЕобязательно: готовое PNG питомца с этим ремешком (если есть — используем его)
};

export default function StrapCarousel({
  items,
  activeId,
  onPick
}: {
  items: Strap[];
  activeId: string;
  onPick: (strap: Strap) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);
  const originalWidthRef = useRef<number>(0);

  // автоскролл по кругу
  useEffect(() => {
    const el = listRef.current!;
    if (!el) return;

    // удвоим контент (бесшовная лента)
    if (el.dataset.cloned !== "1") {
      el.dataset.cloned = "1";
      el.innerHTML = el.innerHTML + el.innerHTML;
    }

    const start = () => {
      stop();
      originalWidthRef.current = el.scrollWidth / 2;
      intervalRef.current = setInterval(() => {
        el.scrollLeft += 1;
        if (el.scrollLeft >= originalWidthRef.current) el.scrollLeft = 0;
      }, 20);
    };
    const stop = () => intervalRef.current && clearInterval(intervalRef.current);

    start();
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    return () => { stop(); el.removeEventListener("mouseenter", stop); el.removeEventListener("mouseleave", start); };
  }, []);

  return (
    <div
      className="strap-list"
      ref={listRef}
      onWheel={(e) => { e.preventDefault(); const el = listRef.current!; el.scrollLeft += e.deltaY; }}
    >
      {items.map(s => (
        <button
          key={s.id}
          onClick={() => onPick(s)}
          className={`strap-item ${activeId === s.id ? "active" : ""}`}
        >
          {s.name} <span className="ml-1 opacity-70">{s.price}₽</span>
        </button>
      ))}
    </div>
  );
}
