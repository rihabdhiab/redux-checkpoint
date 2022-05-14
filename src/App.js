import React from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';

function App() {
  return (
    <div className='App' >
      <h2>What's on your mind today ?</h2>
      <AddTask/>
      <ListTask/>
    
    </div>
  );
}

export default App;
