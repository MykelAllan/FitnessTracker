import React, {useState} from "react";
import './App.css';

function App() {
  {/* codes */}
  const [message, setMessage] = useState("Hello, Class");
  const [exercises, setExercises] = useState([]);
  const [newExercises, setNewExercises] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();//prevent from reloading the page
    setExercises([...exercises, newExercises]);

    setNewExercises("");
  }

  return(
    <div>
      {/* Display the message*/}
      <h1>Fitness Tracker</h1>
      <form onSubmit={submitHandler}>
        <input 
          type = "text"
          placeholder="Type an exercise"
          value = {newExercises}
          onChange={(e) => setNewExercises(e.target.value)}
        />
        <button type = "submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map((exercise, index)=> (
          <li key={index}>{exercise}</li>
        ))}

      </ul>
    </div>

  );

}

export default App;
