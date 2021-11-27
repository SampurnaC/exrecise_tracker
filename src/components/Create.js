import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const createExercise=(e)=>{
    e.preventDefault();
    console.log("I am here")

    const exercise={title, details};
    fetch(`http://localhost:3001/exercises/`,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(exercise)
    })
    .then(()=>{
      console.log("new exercise added");
      console.log(exercise)
    })
  };

  return (
    <div>
      <h1>Create Component</h1>
      <form onSubmit={createExercise}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Details:</label>
        <input type="text" value={details} onChange={(e)=>setDetails(e.target.value)} />
        <button>Create Exercise</button>
      
      </form>
    </div>
  );
}
 
export default Create;