import Globe from "react-globe.gl";
import { useEffect, useState } from "react";
import { useRef } from "react";
import * as THREE from "three";
import cloud from "../assets/textures/clouds.png";

function GreenGlobe({ datas }) {
  const [places, setPlaces] = useState([]);
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [animationPaused, setAnimationPaused] = useState(false);
  const globeEl = useRef();

  useEffect(() => {
    if (!datas || datas.length === 0) {
      console.error("Datas is empty or undefined");
      return;
    }
    // Construire les données des étiquettes avec toutes les coordonnées
    const labelsData = datas?.flatMap((plant) =>
      plant?.coordonnees?.map((coord) => ({
        ...plant,
        coordonnees: coord,
      })),
    );
    setPlaces(labelsData);
  }, [datas]);

  useEffect(() => {
    const getResponsiveAltitude = () => {
      const widthDevice = window.innerWidth;
      return widthDevice < 760 ? 5 : 2;
    };
    window.innerWidth < 760 && window.scrollTo({ top: 500, left: 0, behavior: "smooth" });

    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = -0.1;

    // Center the view on the specified coordinates
    if (places.length > 0) {
      // Center the view on the specified coordinates
      const centerCoords = {
        lat: places[1].coordonnees.lat,
        lng: places[1].coordonnees.lng,
        altitude: getResponsiveAltitude(),
      };
      globe.pointOfView(centerCoords, 800);
    }
  }, [places]);

  useEffect(() => {
    const globe = globeEl.current;
    // globe.scene().position.y = 150;

    // Add clouds sphere
    const CLOUDS_IMG_URL = cloud; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.005;
    const CLOUDS_ROTATION_SPEED = 0.009; // deg/frame

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
        console.error("Erreur de chargement de la texture des nuages:", err);
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

  // Fonction pour gérer la pause et la reprise de l'animation
  const toggleAnimation = () => {
    if (animationPaused) {
      globeEl.current.resumeAnimation();
    } else {
      globeEl.current.pauseAnimation();
    }
    setAnimationPaused(!animationPaused);
  };

  return (
    <>
      <div style={{ position: "absolute", zIndex: 1000 }}>
        {animationPaused ? "Rotation en pause" : ""}
      </div>

      <Globe
        ref={globeEl}
        animateIn={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.4}
        labelsData={places}
        labelLat={(d) => d.coordonnees.lat}
        labelLng={(d) => d.coordonnees.lng}
        labelText={(d) => d.nom.scientifique}
        labelSize={(d) => 0.5}
        labelDotRadius={(d) => 1}
        labelColor={(d) => d.labelcolor}
        labelResolution={2}
        labelAltitude={(d) => d.id * 0.005}
        onLabelHover={(label) => {
          handleLabelHover(label);
        }}
        onLabelBlur={(label) => {
          handleLabelBlur(label);
        }}
        onLabelClick={toggleAnimation}
      />

      {hoveredLabel && (
        <div
          className="hoverInfo"
          style={{
            position: "absolute",
            left: "70%",
            top: "30%",
            backgroundColor: "rgba(36, 36, 36, 0.673)",
            maxWidth: "350px",
            maxHeight: "700px",
            overflow: "scroll",
            paddingBottom: "1rem",
            borderRadius: "8px",
          }}
        >
          <img
            src={hoveredLabel.img}
            alt={hoveredLabel.nom.vernaculaire}
            style={{
              position: "relative",
              width: "350px",
              height: "350px",
              zIndex: 9999,
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <div
            style={{
              paddingLeft: "1rem",
            }}
          >
            <h3>{hoveredLabel.nom.vernaculaire}</h3>
            <p>
              <i>{hoveredLabel.nom.scientifique}</i>
            </p>
            <p
              style={{
                maxWidth: "350px",
              }}
            >
              <b>Parties utilisées : </b>
              {hoveredLabel.partieUtil}
            </p>
            <p
              style={{
                maxWidth: "350px",
              }}
            >
              <b>Vertus : </b>
              {hoveredLabel.proprietes}
            </p>
            <p
              style={{
                maxWidth: "350px",
              }}
            >
              <b>Indications traditionnelles : </b>
              {hoveredLabel.indicationsTrad}
            </p>
            <hr
              style={{
                marginBlock: "0.5rem",
              }}
            ></hr>
            <p
              style={{
                maxWidth: "350px",
              }}
            >
              <i>
                Les indications ci-dessus sont données à titre informatif et ne constituent en rien
                un conseil médical. Avant toute cueillette/utilisation/consommation de plantes,
                demandez conseil à votre pharmacien et votre médecin. Certaines plantes peuvent
                présenter des interactions avec des médicaments et/ou des contre-indications à leur
                utilisation.
              </i>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default GreenGlobe;
