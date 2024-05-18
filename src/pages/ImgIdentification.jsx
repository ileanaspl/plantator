import "ai-taxonomist";
import "./ImgIdentification.scss";
import { Link } from "react-router-dom";

function ImgIdentification() {
  const apiKey = import.meta.env.VITE_MYAPIKEY;

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
        {console.log(apiKey)}
        <div className="cadre">
          <p>
            Cliquez sur le cadre ci-dessous ou glissez-y l'image en question pour procéder à
            l'identification.
          </p>
          <ai-taxonomist apiKey={apiKey}></ai-taxonomist>
        </div>
      </div>
    </>
  );
}

export default ImgIdentification;
