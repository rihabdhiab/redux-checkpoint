import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import './ListTask.css';

export default function ListTask() {
    let tasks= useSelector(state=>state.tasks)
    const[list,setList]=useState('')
    return (
      <div className='task-list' >
        <div className='filter-buttons'>
          <button style={{backgroundColor:'rgb(97, 97, 233)'}} onClick={()=>setList('total list')}>All Tasks</button>
          <button style={{backgroundColor:'rgb(41, 160, 80)'}} onClick={()=>setList('done')}>Done Tasks</button>
          <button style={{backgroundColor:'rgb(240, 68, 68)'}} onClick={()=>setList('not done')}>Not Done Tasks</button>
        </div>
        <div>
          { 
           list=='done' ? tasks.filter(task=>task.isDone==true).map((task,index)=><Task index={index} key={task.id} task={task}/>) :
           list=='not done' ? tasks.filter(task=>task.isDone==false).map((task, index)=><Task index={index} key={task.id} task={task}/> ):
           tasks.map((task,index)=> <Task index={index} key={task.id} task={task}/>)
          }
        </div>
      </div>
    )
   
}