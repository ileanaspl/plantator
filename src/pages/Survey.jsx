import { Link, useParams } from "react-router-dom";
import { surveyData } from "../utils/data/surveydatas.js";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  return (
    <div>
      SURVEY page - {questionNumber}
      <br />
      Question : <p>{surveyData[questionNumber - 1].question} ?</p>
      <br />
      <Link to={`/survey/${prevQuestionNumber}`}>
        <button onClick={saveReply}>Précédent</button>
      </Link>
      <br />
      <Link to={`/survey/${nextQuestionNumber}`}>
        <button onClick={saveReply}>Suivant</button>
      </Link>
      <br />
      <br />
      <Link to={`/results`}>Go to Results</Link>
      <br />
      <Link to={`/`}>Go to Home</Link>
      <br />
      <p>
        Réponse A : {surveyData[questionNumber - 1].reponseA} <br />
        Image A : {surveyData[questionNumber - 1].imageA}
      </p>
      <p>
        Réponse B : {surveyData[questionNumber - 1].reponseB} <br />
        Image B : {surveyData[questionNumber - 1].imageB}
      </p>
    </div>
  );
}

export default Survey;
