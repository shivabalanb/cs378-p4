import React from "react";
import { pokemonInterface } from "./PokemonSection";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PokemonCard: React.FC<{
  pk: pokemonInterface;
  color: string;
  radar: boolean;
}> = ({ pk, color, radar }) => {
  const data = {
    labels: ["HP", "Attack", "Defense", "SP Attack", "SP Defense", "Speed"],
    datasets: [
      {
        label: "Stats",
        backgroundColor: color,
        data: [
          pk.hp,
          pk.attack,
          pk.defense,
          pk["special-attack"],
          pk["special-defense"],
          pk.speed,
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-4 flex border-b-2 border-black justify-center items-center">
      <div className="flex-1 flex flex-col items-center">
        <img src={pk.sprite} alt="" />
        <p>{pk.name}</p>
      </div>
      {pk && radar ? (
        <div className="flex-2  ">
          <Radar data={data} />
        </div>
      ) : (
        <div className=" text-sm flex gap-4 flex-wrap ">
          <div className="grid grid-cols-6 grid-rows-2 gap-2 text-center ">
            <div className="flex items-end justify-center text-xl font-semibold ">
              {pk.hp}
            </div>
            <div className="flex items-end justify-center text-xl font-semibold">
              {pk.attack}
            </div>
            <div className="flex items-end justify-center text-xl font-semibold">
              {pk.defense}
            </div>
            <div className="flex items-end justify-center text-xl font-semibold">
              {pk["special-attack"]}
            </div>
            <div className="flex items-end justify-center text-xl font-semibold">
              {pk["special-defense"]}
            </div>
            <div className="flex items-end justify-center text-xl font-semibold">
              {pk.speed}
            </div>
            <div>HP</div>
            <div>Attack</div>
            <div>Defense</div>
            <div>
              Special
              <br />
              Attack
            </div>
            <div className="bg-gray-1200">
              Special
              <br />
              Defense
            </div>
            <div className="bg-gray-1300">Speed</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
