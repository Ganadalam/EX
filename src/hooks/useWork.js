// useWork.js
import { useState } from "react";
import { works as initialWorks } from "../data/workData";

export default function useWork() {
  const [works, setWorks] = useState(initialWorks);

  const addWork = (newWork) => {
    setWorks((prev) => [...prev, newWork]);
  };

  return { works, addWork };
}
