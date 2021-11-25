import { useEffect, useState } from "react";
import Exercise from "./Exercise";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001/exercises`)
    .then(response => response.json())
    .then(json => setExercises(json))
  });

  const performDelete=(id)=>{
    const newExercise = exercises.filter(exercise=> exercise.id !== id)
    setExercises(newExercise);
    console.log(newExercise);
  }

  const performToggle=(id)=>{
    // First, make a copy of the existing exercises
    const newExercises = [...exercises]
    // Then find the index of the exercise you want to modify
    const index = newExercises.findIndex(exercise => exercise.id === id)
    // Now you can replace the exercise with a modified copy of the found exercise
    const foundItem = exercises[index]
    exercises[index] = {...foundItem, complete: !foundItem.complete}
    // Finally, set the exercises to the modified copy of the original array
    setExercises(exercises);
  }

  return (
    <div>
      <h1>HomePage</h1>
      <Exercise exercises={exercises} performDelete={performDelete} performToggle={performToggle}/>
    </div>
  );
}
 
export default HomePage;