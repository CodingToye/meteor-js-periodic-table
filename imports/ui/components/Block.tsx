import React from "react";
import {Blocks} from "../types";
import {useModal} from "../context/modalContext";
const Block: React.FC<Blocks> = ({
  category,
  element,
  label,
  purpose,
  signature,
  sample,
  description,
  optionalArgs,
}) => {
  const {openModal} = useModal();

  return (
    <div
      className={`flex items-center justify-center h-36 relative rounded bg-blocks-${category}-base bg-radial-gradient border-t border-white/10 cursor-pointer hover:brightness-150 transition`}
      onClick={() =>
        openModal("SignatureModal", {
          signature,
          category,
          element,
          purpose,
          sample,
          description,
          optionalArgs,
        })
      }
    >
      <div className="pointer-events-none">
        <small className="absolute top-2 left-2">{category}</small>
        <small className="absolute bottom-2 left-2">{purpose}</small>
      </div>
      <div className="flex flex-col text-center text-4xl pointer-events-none">
        <span>{element}</span>
        <small>{label}</small>
      </div>
    </div>
  );
};

export default Block;
