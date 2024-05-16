import Globe from 'react-globe.gl';
import { useEffect, useState } from 'react';
import { geoloc_city } from '../utils/data/geoloc_city';
import { useRef } from 'react';
import * as THREE from 'three';
import cloud from '../assets/textures/clouds.png';

function GreenGlobe() {
	const [places, setPlaces] = useState([]);
	const globeEl = useRef();

	useEffect(() => {
		setPlaces(geoloc_city.features);
		const globe = globeEl.current;

		// Auto-rotate
		globe.controls().autoRotate = true;
		globe.controls().autoRotateSpeed = 0.1;

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

	return (
		<Globe
			ref={globeEl}
			animateIn={true}
			globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
			bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
			backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
			labelsData={places}
			labelLat={(d) => d.properties.latitude}
			labelLng={(d) => d.properties.longitude}
			labelText={(d) => d.properties.name}
			labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
			labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
			labelColor={() => 'rgba(255, 165, 0, 0.75)'}
			labelResolution={2}
			labelAltitude={0.01}
		/>
	);
}

export default GreenGlobe;
