import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  // const [title, setTitle] = useState('');
  // const [details, setDetails] = useState('');
  const[exercise, setExercise]=useState({title: '', details: ''});

  const history = useHistory();

  const handleChange=(event)=>{
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,
    })
  }

  const createExercise=(e)=>{
    e.preventDefault();
    console.log("I am here")

    // const exercise={title, details};
    const newExercise={
      title: exercise.title,
      details: exercise.details,
      complete: false
    }
    fetch(`http://localhost:3001/exercises/`,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newExercise)
    })
    .then(()=>{
      history.push('/');
      console.log("new exercise added");
      console.log(exercise)
    })
  };

  return (
    <div>
      <h1>Create Component</h1>
      <form onSubmit={createExercise}>
        <label>Title:</label>
        <input name="title" type="text" value={exercise.title} onChange={handleChange} />
        <label>Details:</label>
        <input name="details" type="text" value={exercise.details} onChange={handleChange} />
        <button>Create Exercise</button>
      
      </form>
    </div>
  );
}
 
export default Create;