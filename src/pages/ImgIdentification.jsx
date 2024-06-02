import "ai-taxonomist";
import "./ImgIdentification.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SurveyContext } from "../utils/context/SurveyContext";

function ImgIdentification() {
  const apiKey = import.meta.env.VITE_MYAPIKEY;
  const { setAnswers } = useContext(SurveyContext);
  useEffect(() => setAnswers({}), []);

  return (
    <>
      <div className="navBar">
        <Link to={"/"} className="navLink">
          Accueil
        </Link>
        <Link to={"../survey/1"} className="navLink">
          Identification par questionnaire
        </Link>
        <Link to={"../results"} className="navLink">
          Voir la carte
        </Link>
      </div>
      <div className="identification">
        <div className="titres">
          <h1>Identifier une plante grâce à une image</h1>
          <h2>Vous souhaitez identifier une plante que vous avez prise en photo ?</h2>
        </div>
        <div className="cadre">
          <p>
            Cliquez sur le cadre ci-dessous ou glissez-y l'image en question pour procéder à
            l'identification.
          </p>
          <ai-taxonomist apiKey={apiKey}></ai-taxonomist>
        </div>
        <p>
          <i>Ceci est un outil indicatif, vérifiez l'identification auprès d'un professionnel.</i>
        </p>
      </div>
    </>
  );
}

export default ImgIdentification;
