import { Strap } from "@/components/StrapCarousel";

/** База (питомец без ремешка) — относительные пути под GH Pages */
export const catBase = "images/cat/base.png";
export const dogBase = "images/dog/base.png";

/**
 * Если есть готовая картинка питомца С УЖЕ НАДЕТЫМ ремешком (petImage) — укажи её.
 * Если нет — оставь только strapImage (PNG-прозрачный слой), он наложится на base.
 */

export const catStraps: Strap[] = [
  { id: "black", name: "Neo Black", price: 1490,
    strapImage: "images/cat/strap_black.png", petImage: "images/cat/with_black.png" },
  { id: "beads", name: "Бусы", price: 1290,
    strapImage: "images/cat/strap_beads.png", petImage: "images/cat/with_beads.png" },
  { id: "gold", name: "Золотая цепь", price: 1990,
    strapImage: "images/cat/strap_gold.png", petImage: "images/cat/with_gold.png" },
];

export const dogStraps: Strap[] = [
  { id: "brown", name: "Classic Brown", price: 1490,
    strapImage: "images/dog/strap_brown.png", petImage: "images/dog/with_brown.png" },
  { id: "spiky", name: "Spiky Black", price: 1590,
    strapImage: "images/dog/strap_spiky.png", petImage: "images/dog/with_spiky.png" },
  { id: "spots", name: "Dalmatian Spots", price: 1790,
    strapImage: "images/dog/st
