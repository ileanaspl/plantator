import { Link, useParams } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  return (
    <div>
      SURVEY {questionNumber}
      <br />
      <br />
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      <br />
      <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      <br />
      <br />
      <Link to={`/results`}>Go to Results</Link>
      <br />
      <Link to={`/`}>Go to Home</Link>
    </div>
  );
}

export default Survey;
