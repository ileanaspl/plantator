import './App.scss';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="home">
			<h1>PLANTVERSE</h1>
			<div className="mainContainer">
				<div className="homeText">
					<h2>Qu'est-ce que Plantverse ?</h2>
					<p>
						Plantverse est un site web vous permettant d'identifier une plante que vous rencontrez lors de vos balades en forêt, montagne ou
						simplement dans votre jardin.
					</p>
					<br></br>
					<p>Vous avez la possibilité de procéder à cette identification de deux façons :</p>
					<p>À l'aide d'une suite de questions, comme si vous utilisiez une flore en faisant appel à des clefs de determination de botanique.</p>
					<p>Grâce à une photo que vous avez pris de la plante.</p>
				</div>
				<div className="nav">
					<Link to={`survey/1`} className="link">
						Identification par questions
					</Link>
					<Link to={`img-identification`} className="link">
						Identification par photo
					</Link>
					<Link to={`results`} className="link">
						Voir la carte
					</Link>
				</div>
			</div>
		</div>
	);
}

export default App;
