const ExerciseItem = ({exercise, performDelete, performToggle}) => {
  const handleDelete=()=>{
    fetch(`http://localhost:3001/exercises/${exercise.id}`,{
      method: 'DELETE',
    })
    .then(()=>{
      performDelete(exercise.id)
    })
    .catch((error)=>console.log(error));
  }

  const handleToggle=()=>{
    performToggle(exercise.id)
    console.log(exercise.complete)
  }

  return (
    <div>
      <div>
          <h3>{exercise.title}</h3>
          <h3>{exercise.details}</h3>
      </div>
      <div>
        <button onClick={handleDelete}>Delete Exercise </button>
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </div>
  );
}
 
export default ExerciseItem;