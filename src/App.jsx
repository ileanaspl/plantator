import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>HOME</div>
      <Link to={`survey/1`}>Go to survey</Link>
    </>
  );
}

export default App;
