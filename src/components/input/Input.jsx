import { React, useState } from "react";
import Navbar from "../navbar/Navbar";
import Notes from "../notes/Notes";
import moment from "moment";

import "./input.css";


export default function Input() {
  var [items, setItems] = useState([
    { inputData: "get groceries", complete: false },
  ]);
  var [inputData, setInputData] = useState("");
  var[toggleSubmit,setToggleSubmit]= useState(true);
  const [isEditItem, setIsEditItem]= useState(null);


  //adding the task
  function handleSubmit(e) {
   
    if(!inputData){
      alert("please fill data");
    }else if(inputData && !toggleSubmit){
      setItems(
        items.map((elem)=>{
          if(elem.id === isEditItem){
            return {...elem,name:inputData}
          }
          return elem;
        })
      )
        setToggleSubmit(false);
        setInputData("")
        setIsEditItem(null);
    }else{
      e.preventDefault();
    setItems((prev) => [...prev, { inputData, complete: false }]);
    setInputData("");
    }

  }
//complete items
  function completeToDo(index, complete) {
    const todos = [...items];
    todos[index].complete = !complete;
    setItems(todos);
  }
//edit item
const editItem=(index)=>{
  let newEditFunction = items.find((elem)=>{
    return elem.index === index;
  });
  console.log(newEditFunction);

  //after clicking submit on edit button, these state changes
  setToggleSubmit(false);
  setInputData(newEditFunction.name);
  setIsEditItem(index);
}

  // delete a single item 
  const deleteitems = (index) => {
    setItems((olditems) => {
      return olditems.filter((arrElem, id) => {
        return id !== index;
      });
    });
    console.log(deleteitems);
  };

  //removeall
  const removeAll = () =>{
    setItems([]);
  }

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
              value={inputData}
              id="todo-task"
              className="todo-task"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              required
            />
            {
              toggleSubmit ?  <input type="submit" className="btn-add-task" value="Add Task" /> :  <input type="submit" className="btn-edit-task" value="Edit Task" />
            }
           
           
            <input 
              type="reset"
              className="btn-clear-tasks"
              value="Clear Tasks"
            onClick={removeAll}
            />
          </form>
          <hr class ="todo-item-hr"/>
          {/* <p className="todo-empty-message">No active Tasks!</p> */}
          <article className="list-container">
            <ul className="todo-list">
              {items.map((val, index) => (
                <Notes
                  key={index}
                  inputData={val.inputData}
                  index={index}
                  complete={val.complete}
                  completeToDo={completeToDo}
                  onSelect={deleteitems}
                  onEdit={editItem}
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
