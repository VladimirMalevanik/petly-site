"use client";

import { useState } from "react";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import HeroHeader from "@/components/HeroHeader";
import SectionCats from "@/components/SectionCats";
import SectionDogs from "@/components/SectionDogs";
import BottomBar from "@/components/BottomBar";

export type Choice = "cat" | "dog" | "none";

export default function Page() {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <>
      {choice === null && <WelcomeOverlay onPick={setChoice} />}

      <HeroHeader />

      {choice !== "dog" && choice !== "none" && <SectionCats />}
      {choice !== "cat" && choice !== "none" && <SectionDogs />}

      <BottomBar />
    </>
  );
}
