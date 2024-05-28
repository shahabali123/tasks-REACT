import React from 'react'

function Task({title, description, deleteTask, index}) {
  return (
    <div className='task'>
        <div>
            <p><b>{title}</b></p>
            <span>{description}</span>
        </div>
        <button onClick={()=> deleteTask(index)}>-</button>
    </div>
  )
}

export default Task