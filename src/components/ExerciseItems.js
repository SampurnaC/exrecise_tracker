const ExerciseItem = ({exercise, performDelete, performToggle}) => {
  const completed = exercise.complete
  const handleDelete=()=>{
    fetch(`http://localhost:3001/exercises/${exercise.id}`,{
      method: 'DELETE',
    })
    .then(()=>{
      performDelete(exercise.id)
    })
    .catch((error)=>console.log(error));
  };

  const handleToggle=()=>{
    fetch(`http://localhost:3001/exercises/${exercise.id}`,{
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({complete: !exercise.complete})
    })
    .then(()=> {
      performToggle(exercise.id);
    })
    .catch((error)=>console.log(error));
  }

  return (
    <div>
      <div>
          <h3>{exercise.title}</h3>
          <h3>{exercise.details}</h3>
      </div>
      <div>
        <button onClick={handleDelete}>Delete Exercise </button>
        <button onClick={handleToggle}>{completed? "Completed" : "Pending"}</button>
      </div>
    </div>
  );
}
 
export default ExerciseItem;