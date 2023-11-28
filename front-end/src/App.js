import React, {useEffect, useState} from 'react';
import Exercises from './components/exercises'

function App() {
  useEffect(()=>{
    document.title = `${Exercises.length}`

  })

  console.log(Exercises);


  return(
    <div>
      <h1> Fitness Tracker </h1>
      <h2>By Dor</h2>
      <p>add your exercises here to track you Fitness behaviour</p>
      <Exercises />
    </div>
  )
}


export default App;
