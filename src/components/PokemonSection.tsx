import React, { useState } from "react";
import TypeButton from "./TypeButton";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { typeToColorMapping } from "../App";

export interface pokemonInterface {
  sprite: string;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
}
const PokemonSection: React.FC<{ selectType: string }> = ({ selectType }) => {
  const [pokemonData, setPokemonData] = useState([] as pokemonInterface[]);

  const [radar, setRadar] = useState(false);
  axios
    .get(`https://pokeapi.co/api/v2/type/${selectType}`)
    .then(function (response) {
      const pokemonDataArray = response.data.pokemon
        .slice(0, 20)
        .map((pokemon: any) => {
          return axios.get(pokemon.pokemon.url).then(function (pResponse) {
            const name: string = pResponse.data.name;
            const sprite: string = pResponse.data.sprites.front_default;
            const rawStats: any = pResponse.data.stats;
            const data: { [key: string]: number | string } = {};
            data["sprite"] = sprite;
            data["name"] = name;
            rawStats.map((i: any) => {
              data[i.stat.name] = i.base_stat;
            });
            return data;
          });
        });
      Promise.all(pokemonDataArray).then((data) => {
        setPokemonData(data);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <div className="bg-red-600 p-4 border-4 border-black flex items-center justify-end gap-4">
        <label className="flex  justify-center items-center cursor-pointer gap-2 ">
          <span className="text-2xl font-semibold text-white">📊</span>
          <div>
            <input
              type="checkbox"
              checked={radar}
              onChange={() => setRadar(!radar)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </div>
        </label>
        <TypeButton type={selectType} isLabel={true} />
      </div>
      <div>
        {pokemonData.map((pk: pokemonInterface) => (
          <PokemonCard
            pk={pk}
            color={typeToColorMapping[selectType].rgba}
            radar={radar}
          ></PokemonCard>
        ))}
      </div>
      <div className="p-4 text-center">
        Results limited to first 20 for performance
      </div>
    </div>
  );
};

export default PokemonSection;
