import { useEffect, useState } from "react";
import Exercise from "./Exercise";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001/exercises`)
    .then(response => response.json())
    .then(json => setExercises(json))
  },[]);

  const performDelete=(id)=>{
    const newExercise = exercises.filter(exercise=> exercise.id !== id)
    setExercises(newExercise);
    console.log(newExercise);
  }

  const performToggle=(id)=>{
    // First, make a copy of the existing exercises
    const clonedExercises = [...exercises];
    // Then find the index of the exercise you want to modify
    const clickedExerciseIndex = clonedExercises.findIndex(exercise => exercise.id ===id)
    const clickedExercise = clonedExercises[clickedExerciseIndex]
    // Now you can replace the exercise with a modified copy of the found exercise
    clickedExercise.complete = !clickedExercise.complete
    // Finally, set the exercises to the modified copy of the original array
    setExercises(clonedExercises);
  }

  return (
    <div>
      <h1>HomePage</h1>
      <Exercise exercises={exercises} performDelete={performDelete} performToggle={performToggle}/>
    </div>
  );
}
 
export default HomePage;