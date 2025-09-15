"use client";
import { Choice } from "@/app/page";

export default function WelcomeOverlay({ onPick }: { onPick: (c: Choice) => void }) {
  return (
    <div className="overlay-wrap">
      <div className="overlay-bg">
        {/* ВАЖНО: относительные пути под GitHub Pages */}
        <img src="images/overlay-cat.jpg" className="overlay-img overlay-cat" alt="cat" />
        <img src="images/overlay-dog.jpg" className="overlay-img overlay-dog" alt="dog" />
        <div className="overlay-dim" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Кто ваш любимчик?</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={() => onPick("cat")}
            className="px-5 py-2 rounded-md bg-gradient-to-tr from-fuchsia-400 to-indigo-400 hover:opacity-90">
            Кошка
          </button>
          <button onClick={() => onPick("dog")}
            className="px-5 py-2 rounded-md bg-gradient-to-tr from-fuchsia-400 to-indigo-400 hover:opacity-90">
            Собака
          </button>
          <button onClick={() => onPick("none")}
            className="px-5 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700">
            Я просто посмотреть
          </button>
        </div>
      </div>
    </div>
  );
}
