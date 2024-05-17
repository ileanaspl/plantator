import { Link } from 'react-router-dom';
import GreenGlobe from '../components/GreenGlobe';
import DropdownSelectorPlants from '../components/DropdownSelectorPlants';
import { useEffect, useState } from 'react';
import { plantes } from '../utils/data/plants';
import { useContext } from 'react';
import { SurveyContext } from '../utils/context/SurveyContext';
import "./Results.scss"

function Results() {
	const [selectedPlants, setSelectedPlants] = useState('');
	const [datas, setDatas] = useState([]);
	const { answers } = useContext(SurveyContext);
	// const changePlants = () => {
	// 	return plantes.filter((obj) => (selectedPlants !== '' ? obj.nom.vernaculaire === selectedPlants : obj));
	// };
	useEffect(() => {
		const resultSurvey = makeResults();
		resultSurvey.length > 0 ? setDatas(resultSurvey) : setDatas(plantes);
	}, [selectedPlants]);

	const makeResults = () => {
		return plantes.filter(
			(obj) =>
				obj.feuille.folioles === answers[1] &&
				obj.feuille.decoupe === answers[2] &&
				obj.feuille.disposition === answers[3] &&
				obj.fleur.couleur === answers[4] &&
				obj.fleur.disposition === answers[5] &&
				obj.fleur.petale === answers[6],
		);
	};

	return (
		<div>
			<div className='topSection'>
				<Link to={`/`} className='navLink'>Go to Home</Link>
				<br />
				RESULTS
				<br />
				{datas && datas.map((plants) => <span key={plants.id}>{plants.nom.vernaculaire}</span>)}
				<h3>{plants.partieUtil}</h3>
				{console.log(makeResults())}
			</div>
			<DropdownSelectorPlants setSelectedPlants={setSelectedPlants} />
			{datas && <GreenGlobe datas={datas} />}
		</div>
	);
}

export default Results;
