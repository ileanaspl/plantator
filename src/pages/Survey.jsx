import { Link, useParams } from 'react-router-dom';
import { surveyData } from '../utils/data/surveydatas.js';
import { useContext } from 'react';
import { SurveyContext } from '../utils/context/SurveyContext.jsx';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import './Survey.scss';

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
		<>
			<div className="navBar">
				<Link to={'/'} className="navLink">
					Accueil
				</Link>
				<Link to={`../img-identification`} className="navLink">
					Identification par photo
				</Link>
				<Link to={'../results'} className="navLink">
					Voir la carte
				</Link>
			</div>
			<div id="survey-div">
				<br />
				<h3>Question: {surveyData[questionNumber - 1].question}</h3>
				<div id="grandcontainer">
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseA)}>
							<p>{surveyData[questionNumber - 1].reponseA}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageA} />
						</Link>
					</div>
					<div className="grandcontainer-a">
						<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseB)} className="link">
							<p>{surveyData[questionNumber - 1].reponseB}</p>
							<br />
							<img src={surveyData[questionNumber - 1].imageB} />
						</Link>
					</div>
					{surveyData[questionNumber - 1].reponseC && (
						<div className="grandcontainer-a">
							<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseC)} className="link">
								<p>{surveyData[questionNumber - 1].reponseC}</p>
								<br />
								<img src={surveyData[questionNumber - 1].imageC} />
							</Link>
						</div>
					)}
					{surveyData[questionNumber - 1].reponseD && (
						<div className="grandcontainer-a">
							<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseD)} className="link">
								<p>{surveyData[questionNumber - 1].reponseD}</p>
								<br />
								<img src={surveyData[questionNumber - 1].imageD} />
							</Link>
						</div>
					)}
					{surveyData[questionNumber - 1].reponseE && (
						<div className="grandcontainer-a">
							<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseE)} className="link">
								<p>{surveyData[questionNumber - 1].reponseE}</p>
								<br />
								<img src={surveyData[questionNumber - 1].imageE} />
							</Link>
						</div>
					)}
					{surveyData[questionNumber - 1].reponseF && (
						<div className="grandcontainer-a">
							<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseF)} className="link">
								<p>{surveyData[questionNumber - 1].reponseF}</p>
								<br />
								<img src={surveyData[questionNumber - 1].imageF} />
							</Link>
						</div>
					)}
					{surveyData[questionNumber - 1].reponseG && (
						<div className="grandcontainer-a">
							<Link to={nextPath} onClick={() => saveReply(surveyData[questionNumber - 1].reponseG)}>
								<p>{surveyData[questionNumber - 1].reponseG}</p>
								<br />
								<img src={surveyData[questionNumber - 1].imageG} />
							</Link>
						</div>
					)}
				</div>
				{questionNumber > 1 && (
					<Link to={`/survey/${prevQuestionNumber}`} id="prev-button">
						<button onClick={saveReply}>Précédent</button>
					</Link>
				)}
			</div>
		</>
	);
}

export default Survey;
