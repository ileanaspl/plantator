import { Link } from 'react-router-dom';
import GreenGlobe from '../components/GreenGlobe';
import DropdownSelectorPlants from '../components/DropdownSelectorPlants';
import { useEffect, useState } from 'react';
import { plantes } from '../utils/data/plants';
import { useContext } from 'react';
import { SurveyContext } from '../utils/context/SurveyContext';
import './Results.scss';

function Results() {
	const [selectedPlants, setSelectedPlants] = useState('');
	const [winningPlant, setWinningPlant] = useState('');
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
			setSelectedPlants('');
			setWinningPlant('nowinner');
		}
	}, []);

	const changePlants = () => {
		return plantes.filter((obj) => (selectedPlants !== '' ? obj.nom.vernaculaire === selectedPlants : obj));
	};

	useEffect(() => {
		setDatas(changePlants());
	}, [selectedPlants]);

	return (
		<div>
			RESULTS
			<br />
			{datas.length >= 1 && answers[1] && winningPlant !== '' && (
				<h2>
					{winningPlant === 'nowinner'
						? 'Aucune plante ne correspond à vos critères'
						: `La plante qui correspond à vos critères est la ${winningPlant} `}
				</h2>
			)}
			{selectedPlants !== '' && <h3>Plante recherchée : {selectedPlants}</h3>}
			<br />
			<Link to={`/`}>Retour à l'accueil</Link>
			<br />
			<DropdownSelectorPlants setSelectedPlants={setSelectedPlants} />
			{datas && <GreenGlobe datas={datas} />}
		</div>
	);
}

export default Results;
