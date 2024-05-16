import { Link } from "react-router-dom";
import GreenGlobe from "../components/GreenGlobe";

function Results() {
  return (
    <div>
      RESULTS
      <br />
      <Link to={`/`}>Go to Home</Link>
      <br />
      <GreenGlobe />
    </div>
  );
}

export default Results;
