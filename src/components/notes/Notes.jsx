import React from "react";
import {TiTickOutline} from "react-icons/ti"

import "./notes.css";
function Notes({ inputData, index, completeToDo, complete, onSelect, onEdit }) {
  return (
    <div className="notes-container">
      <i
        style={{ display: "", cursor: "pointer", marginLeft: "1rem" }}
        onClick={() => {
          completeToDo(index, complete);
        }}
      >
        <TiTickOutline
        />
      </i>
      <h3
        className="notes-heading"
        style={{
          textDecoration: complete ? "line-through" : "",
          display: "inline",
        }}
      >
        {inputData}
      </h3>{" "}
      
      <i
        style={{
          display: "inline",
          cursor: "pointer",
          float: "right",

          }}
        onClick={() => {
          onSelect(index);
        }}
      
      >
        delete
      </i> 
      <i
        style={{
          display: "inline",
          cursor: "pointer",
          float: "right",
          marginRight:'20px'
        }}
        onClick={() => {
          onEdit(index);
        }}
      >
        Edit
      </i> 
      <hr className="todo-item-hr"/>
    </div>
  );
}

export default Notes;
