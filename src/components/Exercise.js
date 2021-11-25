import ExerciseItem from "./ExerciseItems";

const Exercise = ({exercises, performDelete, performToggle}) => {
  return (
    <div>
      <h1>Exercise Component</h1>
      <ul>
        {exercises.map(exercise => (<ExerciseItem  performDelete={performDelete} key={exercise.id}  exercise={exercise} performToggle={performToggle} />))}
      </ul>
    </div>
  );
}

export default Exercise;