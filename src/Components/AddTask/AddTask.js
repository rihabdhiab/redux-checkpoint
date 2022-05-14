import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_task } from '../../Redux/Actions/Actions';
import './AddTask.css';

export default function AddTask() {
    let dispatch = useDispatch();
    const [input, setInput] = useState("");
    const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit=()=>{
      dispatch(add_task({id:Math.random(), description:input, isDone:false}));
      setInput('')
  }
   
 
    return(
        <div className='addTask'>    
            <input value={input} type="text" onChange={handleChange} placeholder="enter task here...."/>
            <button onClick={handleSubmit}>Add</button>    
        </div>
    )

}
