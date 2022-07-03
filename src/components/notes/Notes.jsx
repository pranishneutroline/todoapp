import React from "react";
import "./notes.css";
function Notes({ inputText, index, completeToDo, complete, onSelect }) {
  return (
    <div className="notes-container">
      <i
        style={{ display: "", cursor: "pointer", marginLeft: "1rem" }}
        onClick={() => {
          completeToDo(index, complete);
        }}
      >
        click
      </i>
      <h3
        className="notes-heading"
        style={{
          textDecoration: complete ? "line-through" : "",
          display: "inline",
        }}
      >
        {inputText}
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
      <hr className="todo-item-hr"/>
    </div>
  );
}

export default Notes;
