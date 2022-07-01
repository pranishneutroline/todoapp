import { React, useState } from "react";
import Notes from "../notes/Notes"
import "./input.css"

export default function Input() {
  var [toDoList, settoDoList] = useState([
    { inputText: "get groceries", complete: false }
  ]);
  var [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    settoDoList((prev) => [...prev, { inputText, complete: false }]);
    setInputText("");
  }

  function completeToDo(index, complete) {
    const todos = [...toDoList];
    todos[index].complete = !complete;
    settoDoList(todos);
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter todo here"
          value={inputText}
          className="input-bar"
          required
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          add todo
        </button>

        <div className="select">
          <select name="todos" id="" className="filter-todo">
            <option value="all">All</option>
            <option value="completed ">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
      <ul>
        {toDoList.map((val, index) => (
          <Notes
            key={index}
            inputText={val.inputText}
            index={index}
            complete={val.complete}
            completeToDo={completeToDo}
          />
        ))}
      </ul>
    </div>
  );

}

