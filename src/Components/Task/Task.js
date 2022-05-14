import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {Modal,Button} from 'react-bootstrap' ;
import { check_task, update_task } from '../../Redux/Actions/Actions';
import './Task.css'

export default function Task({task,index}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [editTask, setEditTask] = useState(task.description);

  let dispatch = useDispatch();

  const handleSubmit=()=>{
    dispatch(update_task({ id:task.id, description:editTask, isDone:false}));
    handleClose();
  }
  const handleClick=()=>{
    dispatch(check_task(task.id))
  }

  return (
    <div  >
     <div className='task'>
        <h5 style={{textDecoration:task.isDone ? "line-through" : "none"}}> 
          <span style={{color:'#045323',textDecoration:'underline'}}>Task{Number(index+1)}:</span> {task.description}
        </h5>
        <div className='task-buttons'>
          <button style={{backgroundColor:'rgb(62, 62, 219)'}}  onClick={handleShow}> Edit </button>
          <button style={{backgroundColor: task.isDone ? 'rgb(6, 100, 48)':'rgb(223, 53, 53)'}}  onClick={handleClick}>
             {task.isDone ?'Not Done' :'Done'}
          </button>
        </div>
     </div>

      <Modal show={show} onHide={handleClose} >
       <div className='add-task'>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'rgb(30, 167, 92)'}} >Edit Your Task</Modal.Title>
        </Modal.Header>
        
        <Modal.Body >
          <input
          type="text"
          onChange={(e)=>setEditTask(e.target.value)}
          value={editTask}
           />
        </Modal.Body>
        
        <Modal.Footer>
          <Button style={{backgroundColor:'rgb(240, 68, 68)', border:'none'}} variant="secondary" onClick={handleClose}> Close </Button>
          <Button style={{backgroundColor:'rgb(62, 62, 219)', border:'none'}}  variant="primary" onClick={handleSubmit}> Save Changes</Button>
        </Modal.Footer>
        </div>
       
      </Modal>
 
     </div>
  )
}
