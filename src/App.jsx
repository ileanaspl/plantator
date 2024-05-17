import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>HOME</div>
      <Link to={`survey/1`}>Go to survey</Link>
      <Link to={`img-identification`}>Image identification</Link>
    </>
  );
}

export default App;
