import React from "react";
import Block from "./components/Block";
import {blocks} from "../api/blocks";

export const App = () => {
  return (
    <div className="App p-2">
      <div className="grid grid-cols-blocks gap-2">
        {blocks
          .filter((block) => block.category !== "a")
          .map((block, index) => (
            <Block
              key={index}
              category={block.category}
              element={block.element}
              label={block.label}
              purpose={block.purpose}
              signature={block.signature}
              sample={block.sample}
              description={block.description}
              optionalArgs={block.optionalArgs}
            />
          ))}
      </div>
    </div>
  );
};
