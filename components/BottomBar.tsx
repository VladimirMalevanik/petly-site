"use client";
import { useState } from "react";

export default function BottomBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bottom-bar bg-black/80 py-3 text-center">
      <button className="px-5 py-2 rounded-md bg-gradient-to-tr from-fuchsia-400 to-indigo-400 mr-3">
        Предзаказ
      </button>
      <button onClick={() => setVisible(false)} className="px-5 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700">
        Скрыть
      </button>
    </div>
  );
}
