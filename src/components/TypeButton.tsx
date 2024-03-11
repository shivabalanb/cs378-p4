import React from "react";
import { typeToColorMapping } from "../App";

interface TypeButtonProps {
  type: string;
  isLabel: boolean;
  isSelected?: boolean;
  setSelectType?: Function;
}

const TypeButton: React.FC<TypeButtonProps> = ({
  type,
  isLabel = false,
  isSelected,
  setSelectType,
}) => {
  return (
    <button
      className={` p-2 px-4 rounded-lg ${
        isLabel || isSelected ? "border-4 border-solid border-black" : ""
      } ${isSelected ? " shadow-md brightness-75 " : ""}  ${
        typeToColorMapping[type].background
      }  `}
      onClick={() => {
        if (!isLabel && setSelectType) {
          setSelectType(type);
        }
      }}
    >
      <p
        className={
          "text-white font-semibold text-sm " + typeToColorMapping[type].text
        }
      >
        {type.toUpperCase()}
      </p>
    </button>
  );
};

export default TypeButton;
