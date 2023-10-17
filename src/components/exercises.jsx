import React, {useState, useEffect} from "react";

function Exercise() {

{/* codes */}
  const [message, setMessage] = useState("Hello, Class");
  const [exercises, setExercises] = useState([]);
  const [newExercises, setNewExercises] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();//prevent from reloading the page
    const exerciseObject = {
      name: newExercises,
      completed: false

    }
    setExercises([...exercises, exerciseObject]);

    setNewExercises("");
  }
  const markAsCompleted = (index) => {
    const updatedExercises = [ ...exercises];
    console.log(" THis exercise is currently : ",updatedExercises[index].completed)
    updatedExercises[index].completed = !updatedExercises[index].completed
    console.log(" THis is exercise marked as: ",updatedExercises[index].completed)
    setExercises(updatedExercises)
  }
return (

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
        {exercises.map((exerciseObject, index)=> (
          <li key={index}
          style={{textDecoration: exerciseObject.completed ? "line-through" : "none"}}>
          {exerciseObject.name}
          <button onClick={()=> markAsCompleted(index)}>
            {exerciseObject.completed ? "undo" : "complete"}
          </button>
          </li>
        ))}
      </ul>
      
    </div>


);

}

export default Exercise;