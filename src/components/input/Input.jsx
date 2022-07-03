import { React, useState } from "react";
import Navbar from "../navbar/Navbar";
import Notes from "../notes/Notes";
import moment from "moment";
import "./input.css";

export default function Input() {
  var [toDoList, settoDoList] = useState([
    { inputText: "get groceries", complete: false },
  ]);
  var [inputText, setInputText] = useState("");

  //adding the task
  function handleSubmit(e) {
    e.preventDefault();
    settoDoList((prev) => [...prev, { inputText, complete: false }]);
    setInputText("");
  }
//complete todolist
  function completeToDo(index, complete) {
    const todos = [...toDoList];
    todos[index].complete = !complete;
    settoDoList(todos);
  }
  // delete a single item 
  const deleteItems = (index) => {
    settoDoList((oldItems) => {
      return oldItems.filter((arrElem, id) => {
        return id !== index;
      });
    });
  };

  return (
    <div className="body-wrapper">
      <Navbar />
      <main className="main">
        <section className="todo-list-header">
          <article className="todo-date-active-tasks">
            <p className="todo-date">{moment().format('MMMM Do YYYY')}</p>
            <p className="todo-num-tasks"></p>
          </article>
          {/* <article className="todo-filters text-align-right todo-all-filter">
            <a href="/#" className="active-filter todo-all">
              All
            </a>
            <a href="/#" className="todo-active">
              Active
            </a>
            <a href="/#" className="todo-completed">
              Completed
            </a>
          </article> */}
        </section>
        <section className="todo-list-main">
          <form
            id="todo-form"
            method="put"
            className="state-new-task"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="todo-task"
              placeholder="Enter a task..."
              value={inputText}
              id="todo-task"
              className="todo-task"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              required
            />
            <input type="submit" className="btn-add-task" value="Add Task" />
            {/* <input type="submit" className="btn-edit-task" value="Edit Task" /> */}
            {/* <input
              type="reset"
              className="btn-clear-tasks"
              value="Clear Tasks"
            
            /> */}
          </form>
          <hr class ="todo-item-hr"/>
          {/* <p className="todo-empty-message">No active Tasks!</p> */}
          <article className="list-container">
            <ul className="todo-list">
              {toDoList.map((val, index) => (
                <Notes
                  key={index}
                  inputText={val.inputText}
                  index={index}
                  complete={val.complete}
                  completeToDo={completeToDo}
                  onSelect={deleteItems}
                />
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer className="footer">
        Made by <strong>Pranish Shrestha</strong>
      </footer>
    </div>
  );
}
