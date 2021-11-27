import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Edit = () => {
  // const [title, setTitle] = useState('');
  // const [details, setDetails] = useState('');
  const [exercise,setExercise] = useState({
    title: '', 
    details: '',
  });
  const params = useParams();
  const ExerciseId = params.id;
  const history = useHistory();


  const handleChange = (event)=>{
    event.preventDefault();
    console.log(event.target.name)
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(()=>{
    fetch(`http://localhost:3001/exercises/${ExerciseId}`)
    .then((response)=>{
      return response.json();
    }).then(data=>{
      setExercise({
        title: data.title,
        details: data.details
      });
    }).catch(error=> console.log(error));
  },[ExerciseId]);

  const handleExerciseUpdation=(e)=>{
    e.preventDefault();
    console.log("I am here")

    fetch(`http://localhost:3001/exercises/${ExerciseId}`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(exercise)
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
      <form onSubmit={handleExerciseUpdation}>
        <label>Title:</label>
        <input type="text" name="title" value={exercise.title} onChange={handleChange} />
        <label>Details:</label>
        <input type="text" name="details" value={exercise.details} onChange={handleChange} />
        <button>Update Exercise</button>
      
      </form>
    </div>
  );
}
 
export default Edit;