import { Link, useParams } from 'react-router-dom';
import { surveyData } from '../utils/data/surveydatas.js';
import { useContext } from 'react';
import { SurveyContext } from '../utils/context/SurveyContext.jsx';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function Survey() {
	const { questionNumber } = useParams();
	const questionNumberInt = parseInt(questionNumber);
	const { answers, saveAnswers } = useContext(SurveyContext);
	const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
	const nextQuestionNumber = questionNumberInt + 1;
	const nextPath = questionNumber >= 6 ? `/results` : `/survey/${nextQuestionNumber}`;

	function saveReply(answer) {
		saveAnswers({ [questionNumber]: answer });
	}

	return (
		<div>
			{console.log(answers)}
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
			<div id="grandcontainer">
				<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseA)}>
					<p>{surveyData[questionNumber - 1].reponseA}</p>
					<br />
					<img src={surveyData[questionNumber - 1].imageA} />
				</Link>
				<div className="grandcontainer-a">
					<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseB)}>
						<p>{surveyData[questionNumber - 1].reponseB}</p>
						<br />
						<img src={surveyData[questionNumber - 1].imageB} />
					</Link>
				</div>
				{surveyData[questionNumber - 1].reponseC && (
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseC)}>
							<p>{surveyData[questionNumber - 1].reponseC}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageC} />
						</Link>
					</div>
				)}
				{surveyData[questionNumber - 1].reponseD && (
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseD)}>
							<p>{surveyData[questionNumber - 1].reponseD}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageD} />
						</Link>
					</div>
				)}
				{surveyData[questionNumber - 1].reponseE && (
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseE)}>
							<p>{surveyData[questionNumber - 1].reponseE}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageE} />
						</Link>
					</div>
				)}
				{surveyData[questionNumber - 1].reponseF && (
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseF)}>
							<p>{surveyData[questionNumber - 1].reponseF}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageF} />
						</Link>
					</div>
				)}
			</div>
			<br />
			<br />
			<Link to={`/survey/${prevQuestionNumber}`}>
				<button onClick={saveReply}>Précédent</button>
			</Link>
		</div>
	);
}

export default Survey;
