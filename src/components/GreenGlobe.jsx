import Globe from 'react-globe.gl';
import { useEffect, useState } from 'react';
import { geoloc_city } from '../utils/data/geoloc_city';
import { plantsLoc } from '../utils/data/plantsLoc';
import { useRef } from 'react';
import * as THREE from 'three';
import cloud from '../assets/textures/clouds.png';

function GreenGlobe() {
	const [places, setPlaces] = useState(plantsLoc);
	const [hoveredLabel, setHoveredLabel] = useState(null);
	const globeEl = useRef();

	useEffect(() => {
		// setPlaces(plantsLoc);
		const globe = globeEl.current;

		// Auto-rotate
		globe.controls().autoRotate = true;
		globe.controls().autoRotateSpeed = 0.1;

		// Center the view on the specified coordinates
		const centerCoords = { lat: places[0]?.geolocX, lng: places[0]?.geolocY, altitude: 2 };
		globe.pointOfView(centerCoords, 0);

		// Add clouds sphere
		const CLOUDS_IMG_URL = cloud; // from https://github.com/turban/webgl-earth
		const CLOUDS_ALT = 0.001;
		const CLOUDS_ROTATION_SPEED = -0.009; // deg/frame

		// Charger la texture des nuages
		new THREE.TextureLoader().load(
			CLOUDS_IMG_URL,
			(cloudsTexture) => {
				// Création de la sphère des nuages
				const clouds = new THREE.Mesh(
					new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
					new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true }),
				);
				globe.scene().add(clouds); // Ajouter à la scène

				// Rotation des nuages
				(function rotateClouds() {
					clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
					requestAnimationFrame(rotateClouds);
				})();
			},
			undefined,
			(err) => {
				console.error('Erreur de chargement de la texture des nuages:', err);
			},
		);
	}, []);

	// Fonction pour afficher une image au survol d'un label
	const handleLabelHover = (label) => {
		setHoveredLabel(label);
	};

	// Fonction pour cacher l'image lorsque le survol est terminé
	const handleLabelBlur = () => {
		setHoveredLabel(null);
	};

	return (
		<>
			<Globe
				ref={globeEl}
				animateIn={true}
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
				backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
				labelsData={places}
				labelLat={(d) => d.geolocX}
				labelLng={(d) => d.geolocY}
				labelText={(d) => d.nom.vernaculaire}
				labelSize={(d) => 832 * 3e-3}
				labelDotRadius={(d) => 832 * 3e-3}
				labelColor={() => 'rgba(255, 165, 0, 0.75)'}
				labelResolution={2}
				labelAltitude={0.01}
				onLabelHover={handleLabelHover}
				onLabelBlur={handleLabelBlur}
			/>
			{console.log(places[0])}
			{hoveredLabel && (
				<img
					src={places[1]?.img} // Utilisez votre image de marqueur ici
					alt="Marker"
					style={{
						position: 'absolute',
						left: ' 70%',
						top: ' 30%',
						width: '350px',
						// height: "50px",
						zIndex: 9999,
					}}
				/>
			)}
		</>
	);
}

export default GreenGlobe;
