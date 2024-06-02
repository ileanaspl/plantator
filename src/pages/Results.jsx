import { Link } from "react-router-dom";
import GreenGlobe from "../components/GreenGlobe";
import DropdownSelectorPlants from "../components/DropdownSelectorPlants";
import { useEffect, useState } from "react";
import { plantes } from "../utils/data/plants";
import { useContext } from "react";
import { SurveyContext } from "../utils/context/SurveyContext";
import "./Results.scss";

function Results() {
  const [showResults, setShowResults] = useState(true);
  const [selectedPlants, setSelectedPlants] = useState("");
  const [winningPlant, setWinningPlant] = useState("");
  const [datas, setDatas] = useState([]);
  const { answers } = useContext(SurveyContext);
  const makeResults = () =>
    plantes.filter(
      (obj) =>
        obj.feuille.folioles === answers[1] &&
        obj.feuille.decoupe === answers[2] &&
        obj.feuille.disposition === answers[3] &&
        obj.fleur.couleur === answers[4] &&
        obj.fleur.disposition === answers[5] &&
        obj.fleur.petale === answers[6],
    );

  useEffect(() => {
    const resultsSurvey = makeResults();

    if (resultsSurvey.length > 0) {
      setSelectedPlants(resultsSurvey[0].nom?.vernaculaire);
      setWinningPlant(resultsSurvey[0].nom?.vernaculaire);
    } else {
      setSelectedPlants("");
      setWinningPlant("nowinner");
    }
  }, []);

  const changePlants = () => {
    return plantes.filter((obj) =>
      selectedPlants !== "" ? obj.nom.vernaculaire === selectedPlants : obj,
    );
  };

  useEffect(() => {
    setDatas(changePlants());
  }, [selectedPlants]);
  useEffect(() => {
    setDatas(changePlants());
  }, [selectedPlants]);

  return (
    <div>
      <div className="navBar">
        <Link to={`/`} className="navLink">
          Accueil
        </Link>
        <Link to={"../survey/1"} className="navLink">
          Identification par questionnaire
        </Link>
        <Link to={`../img-identification`} className="navLink">
          Identification par photo
        </Link>
      </div>
      <div className="topSection">
        {datas.length >= 1 && answers[1] && winningPlant !== "" && (
          <div className="results">
            {" "}
            <h1>RÉSULTAT</h1>
            <button onClick={() => setShowResults(!showResults)}>
              {showResults ? "Masquer le résultat" : "Afficher le résultat"}
            </button>
            {showResults && (
              <>
                <h2>
                  {winningPlant === "nowinner"
                    ? "Aucune plante dans notre base de données ne correspond à vos critères"
                    : `La plante qui correspond à vos critères est la ${winningPlant} `}
                </h2>
                <p>
                  <i>
                    Ceci est un outil indicatif, vérifiez l'identification auprès d'un
                    professionnel.
                  </i>
                </p>
              </>
            )}
          </div>
        )}
        {selectedPlants !== "" && <h3>Plante recherchée : {selectedPlants}</h3>}{" "}
        <DropdownSelectorPlants setSelectedPlants={setSelectedPlants} />
      </div>

      {datas && <GreenGlobe datas={datas} />}
    </div>
  );
}

export default Results;
