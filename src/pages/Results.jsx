import { Link } from "react-router-dom";
import GreenGlobe from "../components/GreenGlobe";
import DropdownSelectorPlants from "../components/DropdownSelectorPlants";
import { useEffect, useState } from "react";
import { plantes } from "../utils/data/plants";

function Results() {
  const [selectedPlants, setSelectedPlants] = useState("");
  const [datas, setDatas] = useState([]);
  const changePlants = () => {
    return plantes.filter((obj) =>
      selectedPlants !== "" ? obj.nom.vernaculaire === selectedPlants : obj,
    );
  };
  useEffect(() => {
    setDatas(changePlants());
  }, [selectedPlants]);

  return (
    <div>
      RESULTS
      {datas && datas.map((plants) => <span key={plants.id}>{plants.nom.vernaculaire}</span>)}
      <br />
      <Link to={`/`}>Go to Home</Link>
      <br />
      <DropdownSelectorPlants setSelectedPlants={setSelectedPlants} />
      {datas && <GreenGlobe datas={datas} />}
    </div>
  );
}

export default Results;
