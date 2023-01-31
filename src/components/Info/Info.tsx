import { useState } from "react";
import { gentlemen } from "../App/App";
import { gentlemanStructure } from "../App/App";

export const Info = () => {
  let [gentlemenPointing, setGentlemenPointing] = useState(0);

  const getGentlemenPointing = (gentlemen: gentlemanStructure[]) => {
    let totalGentlemenPointing = 0;

    gentlemen.forEach(({ selected }: gentlemanStructure) => {
      if (selected) {
        totalGentlemenPointing += 1;
      }
    });

    setGentlemenPointing(gentlemenPointing + totalGentlemenPointing);
  };

  // getGentlemenPointing(gentlemen);

  return (
    <p className="info">{`${gentlemenPointing} gentlemen pointing at you`}</p>
  );
};
