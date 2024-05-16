import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Globe from "react-globe.gl";
// import { prout } from "./prout";
import GreenGlobe from "../components/GreenGlobe";

function Results() {
  // const [places, setPlaces] = useState([]);

  // useEffect(() => {
  //   setPlaces(prout.features);
  // }, []);

  return (
    <div>
      RESULTS
      <br />
      {}
      <Link to={`/`}>Go to Home</Link>
      <br />
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places}
        labelLat={(d) => d.properties.latitude}
        labelLng={(d) => d.properties.longitude}
        labelText={(d) => d.properties.name}
        labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
      />{" "} */}
      <GreenGlobe />
    </div>
  );
}

export default Results;
