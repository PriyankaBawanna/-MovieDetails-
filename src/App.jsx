import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieDemo from "./Movie";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MovieDemo />
    </div>
  );
}
import Movie from "./Movie";

export default App;
