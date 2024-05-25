import { Link } from "react-router-dom";
import "./App.css";
import { TestCruft } from "./components/TestCruft";

function App() {
  return (
    <>
      <main>
        <TestCruft />
        <Link to={"/just_dog"}>This link takes you to just_dog</Link>
      </main>
    </>
  );
}

export default App;
