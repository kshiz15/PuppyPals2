import { useState } from "react";
import PuppyList from "./PuppyList";
import SelectedPuppySection from "./SelectedPuppySection";

export default function App() {
  const [selectedPuppy, setSelectedPuppy] = useState();

  return (
    <>
      <PuppyList setSelectedPuppy={setSelectedPuppy} />
      <SelectedPuppySection selectedPuppy={selectedPuppy} />
    </>
  );
}
