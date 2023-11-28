 import React, { useState } from 'react';

const Exercises = () => {

const [exercises, setExercises] = useState([]);
const [newExercise, setNewExercise] = useState('');

const markAsCompleted = (index) => {
    const updatedExercies = [...exercises];
    console.log("this exercise is currently : ",  updatedExercies[index].completed );
    console.log(index);
    updatedExercies[index].completed = !updatedExercies[index].completed
    console.log( "This exercise marked as : " ,updatedExercies[index].completed);
    setExercises(updatedExercies)
  }


  const handleSumbit = (e) =>{
    e.preventDefault();
    const exerciseObject = {
      name: newExercise,
      completed: false
    }
    setExercises([...exercises, exerciseObject]);
    setNewExercise('');
  }

  return(
    <div>
    <h1>Fitness Tracker</h1>

    <form onSubmit={handleSumbit}>
      <input type='text'
      placeholder='type an exercise'
      value={newExercise}
      onChange={(e)=>setNewExercise(e.target.value)}></input>

      <button type='submit'>Add Exercise</button>
    </form>

    <ul>
        {exercises.map((exerciseObject,index)=> (
        <li key={index}
        style={{textDecoration: exerciseObject.completed ? 'line-through' : 'none'}}>
            {exerciseObject.name}
            <button onClick={()=> markAsCompleted(index)}>
            {exerciseObject.completed ? 'Undo' : 'Complete'}
            </button>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Exercises;