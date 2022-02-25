import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Card from "./components/Body/Cards/Card/Card";
import Bodycard from "./components/Body/Cards/Bodycard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bodycard />
    </div>
  );
}

export default App;
