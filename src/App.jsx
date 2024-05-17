import "./App.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <h1>PLANTATOR</h1>
      <div className="nav">
        <Link to={`survey/1`} className="link">Identification par questions</Link>
        <Link to={`img-identification`} className="link">Identification par photo</Link>
      </div>
    </div>
  );
}

export default App;
