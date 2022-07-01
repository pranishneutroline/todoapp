import React from 'react'

import "./notes.css";
function Notes({inputText, index, completeToDo, complete}) {
  return (
    <div className='notes-container'>
      <h3 className="notes-heading" style={{ textDecoration: complete ? "line-through" : "" , display:"inline" }}>
        {inputText}
      </h3>
   <div> <i style={{display:"",cursor:"pointer",marginLeft:"1rem"}} onClick={ ()=>{completeToDo (index,complete)}}>click</i>
    <i style={{ display:"inline",marginLeft:"1rem"}}>delete</i>
    </div>
    </div>
  )
}

export default Notes