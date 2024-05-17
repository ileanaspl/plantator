import { Link } from "react-router-dom";
import GreenGlobe from "../components/GreenGlobe";
import DropdownSelectorPlants from "../components/DropdownSelectorPlants";
import { useEffect, useState } from "react";
import { plantes } from "../utils/data/plants";
import { useContext } from "react";
import { SurveyContext } from "../utils/context/SurveyContext";

function Results() {
  const [selectedPlants, setSelectedPlants] = useState("");
  const [datas, setDatas] = useState([]);
  const { answers } = useContext(SurveyContext);

  useEffect(() => {
    const makeResults = () => {
      return plantes.filter(
        (obj) =>
          obj.feuille.folioles === answers[1] &&
          obj.feuille.decoupe === answers[2] &&
          obj.feuille.disposition === answers[3] &&
          obj.fleur.couleur === answers[4] &&
          obj.fleur.disposition === answers[5] &&
          obj.fleur.petale === answers[6],
      );
    };
    const resultSurvey = makeResults();
    console.log(resultSurvey);
    resultSurvey.length > 0 ? setDatas(resultSurvey) : setDatas(plantes);
  }, []);

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
      {datas.length === 1 && (
        <button onClick={() => setSelectedPlants("")}>Voir toutes les plantes</button>
      )}
      <DropdownSelectorPlants setSelectedPlants={setSelectedPlants} />
      {datas && <GreenGlobe datas={datas} />}
    </div>
  );
}

export default Results;
