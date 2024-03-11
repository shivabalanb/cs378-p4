import { useState } from "react";
import TypesSection from "./components/TypesSection";
import PokemonSection from "./components/PokemonSection";

export default function App() {
  const [selectType, setSelectType] = useState("water");
  const [typesList, setTypesList] = useState(["fire", "water", "grass"]);

  return (
    <div>
      <TypesSection
        selectType={selectType}
        setSelectType={setSelectType}
        typesList={typesList}
        setTypesList={setTypesList}
      />

      <PokemonSection selectType={selectType} />
    </div>
  );
}

interface ColorObject {
  background: string;
  text: string;
  rgba: string;
}

export const typeToColorMapping: { [key: string]: ColorObject } = {
  normal: {
    background: "bg-rose-300",
    text: "text-black",
    rgba: "rgba(253,164,175,0.5)",
  },
  fighting: {
    background: "bg-amber-500",
    text: "text-white",
    rgba: "rgba(245,158,11,0.5)",
  },
  flying: {
    background: "bg-sky-700",
    text: "text-white",
    rgba: "rgba(3,105,161,0.5)",
  },
  poison: {
    background: "bg-violet-800",
    text: "text-white",
    rgba: "rgba(91,33,182,0.5)",
  },
  ground: {
    background: "bg-yellow-700",
    text: "text-white",
    rgba: "rgba(161,98,7,0.5)",
  },
  rock: {
    background: "bg-amber-900",
    text: "text-white",
    rgba: "rgba(120,53,15,0.5)",
  },
  bug: {
    background: "bg-lime-800",
    text: "text-white",
    rgba: "rgba(63,98,18,0.5)",
  },
  ghost: {
    background: "bg-fuchsia-900",
    text: "text-white",
    rgba: "rgba(112,26,117,0.5)",
  },
  steel: {
    background: "bg-teal-600",
    text: "text-white",
    rgba: "rgba(13,148,136,0.5)",
  },
  fire: {
    background: "bg-orange-500",
    text: "text-white",
    rgba: "rgba(249,115,22,0.5)",
  },
  water: {
    background: "bg-blue-500",
    text: "text-white",
    rgba: "rgba(59,130,246,0.5)",
  },
  grass: {
    background: "bg-green-500",
    text: "text-white",
    rgba: "rgba(34,197,94,0.5)",
  },
  electric: {
    background: "bg-yellow-300",
    text: "text-black",
    rgba: "rgba(253,224,71,0.5)",
  },
  ice: { background: "bg-sky-200", text: "text-black", rgba: "rgb(3,105,161)" },
  dragon: {
    background: "bg-cyan-600",
    text: "text-white",
    rgba: "rgba(8,145,178,0.5)",
  },
  dark: {
    background: "bg-slate-800",
    text: "text-white",
    rgba: "rgba(30,41,59,0.5)",
  },
  fairy: {
    background: "bg-pink-500",
    text: "text-black",
    rgba: "rgba(236,72,153,0.5)",
  },
  psychic: {
    background: "bg-pink-800",
    text: "text-white",
    rgba: "rgba(157,23,77,0.5)",
  },
};
