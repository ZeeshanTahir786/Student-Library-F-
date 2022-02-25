import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Card from "./components/Body/Cards/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
