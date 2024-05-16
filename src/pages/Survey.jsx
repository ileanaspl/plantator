import { Link, useParams } from 'react-router-dom';
import { surveyData } from '../utils/data/surveydatas.js';
import { useContext } from 'react';
import { SurveyContext } from '../utils/context/SurveyContext.jsx';

function Survey() {
	const { questionNumber } = useParams();
	const questionNumberInt = parseInt(questionNumber);
	const { saveAnswers } = useContext(SurveyContext);
	const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
	const nextQuestionNumber = questionNumberInt + 1;
	const nextPath = questionNumber >= 6 ? `/results` : `/survey/${nextQuestionNumber}`;

	function saveReply(answer) {
		saveAnswers({ [questionNumber]: answer });
	}

	return (
		<div>
			SURVEY page - {questionNumber}
			<br />
			Question : <p>{surveyData[questionNumber - 1].question}</p>
			<br />
			<br />
			<br />
			<Link to={`/results`}>Go to Results</Link>
			<br />
			<Link to={`/`}>Go to Home</Link>
			<br />
			<Link to={nextPath}>
				<button onClick={saveReply}>
					<p>
						Réponse A : {surveyData[questionNumber - 1].reponseA} <br />
						Image A : {surveyData[questionNumber - 1].imageA}
					</p>
				</button>
			</Link>
			<Link to={nextPath}>
				<button onClick={saveReply}>
					<p>
						Réponse B : {surveyData[questionNumber - 1].reponseB} <br />
						Image B : {surveyData[questionNumber - 1].imageB}
					</p>
				</button>
			</Link>
			{surveyData[questionNumber - 1].reponseC && (
				<Link to={nextPath}>
					<button onClick={saveReply}>
						<p>
							Réponse C : {surveyData[questionNumber - 1].reponseC} <br />
							Image C : {surveyData[questionNumber - 1].imageC}
						</p>
					</button>
				</Link>
			)}
			{surveyData[questionNumber - 1].reponseD && (
				<Link to={nextPath}>
					<button onClick={saveReply}>
						<p>
							Réponse D : {surveyData[questionNumber - 1].reponseD} <br />
							Image D : {surveyData[questionNumber - 1].imageD}
						</p>
					</button>
				</Link>
			)}
			{surveyData[questionNumber - 1].reponseE && (
				<Link to={nextPath}>
					<button onClick={saveReply}>
						<p>
							Réponse E : {surveyData[questionNumber - 1].reponseE} <br />
							Image E : {surveyData[questionNumber - 1].imageE}
						</p>
					</button>
				</Link>
			)}
			{surveyData[questionNumber - 1].reponseF && (
				<Link to={nextPath}>
					<button onClick={saveReply}>
						<p>
							Réponse F : {surveyData[questionNumber - 1].reponseF} <br />
							Image F : {surveyData[questionNumber - 1].imageF}
						</p>
					</button>
				</Link>
			)}
			<br />
			<br />
			<Link to={`/survey/${prevQuestionNumber}`}>
				<button onClick={saveReply}>Précédent</button>
			</Link>
		</div>
	);
}

export default Survey;
