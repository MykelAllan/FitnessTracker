import React, {useState, useEffect} from "react";
import Exercises from "./components/exercises"
import './App.css';

function App() {
  useEffect(()=> {
    document.title = `${Exercises.length}`
  })

  return(
    <div>
      <h1>Fitness Tracker</h1>
      <p>Add your Exercises</p>
      <Exercises />
    </div>
  );
}

export default App;
