import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate("");

  const goExcercise1 = () => {
    navigate("/uno");
  };

  const goExcercise2 = () => {
    navigate("/dos");
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pruebas técnicas React</h1>
      <section className="buttonContainer">
        <button className="buttonExercice" onClick={goExcercise1}>
          Ejercicio 1
        </button>
        <button className="buttonExercice" onClick={goExcercise2}>
          {" "}
          Ejercicio 2
        </button>
        <button className="buttonExercice"> Ejercicio 3</button>
        <button className="buttonExercice"> Ejercicio 4</button>
        <button className="buttonExercice"> Ejercicio 5</button>
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
