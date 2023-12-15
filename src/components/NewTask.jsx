import React from 'react'
import { useState } from 'react'

const NewTask = ({onAdd}) => {
const [enteredTask,setEnteredtask] = useState('');

function handleChange(event){
    setEnteredtask(event.target.value);
}

function handleClick(){
  if(enteredTask.trim() ===''){
    return;
  }
    onAdd(enteredTask);
    setEnteredtask('')
}
  return (
    <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange} />
        <button className=" text-stone-700 hover:text-stone-900" onClick={handleClick}>Add Task</button>
        
    </div>
  )
}

export default NewTask