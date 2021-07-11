import React, { Component } from "react";
import "./App.css";
import Task from "./InputTask/InputTask";

class TodoApp extends Component {
  state = {
    tasks: [],
  };

  // Adding task to the list
  updateInputHandler = (event) => {
    event.preventDefault();
    const input = document.getElementById("input");
    if (input.value === "") {
      alert("Please add a task");
    } else {
      const myArr = this.state.tasks;
      myArr.push(input.value);
      this.setState({ tasks: myArr });
      input.value = "";
    }
  };

  // Removing task from list
  removeTaskHandler = (index) => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    const taskList = this.state.tasks.map((t, index) => {
      return <Task items={t} key={index} remove={this.removeTaskHandler} />;
    });

    return (
      <div className="App">
        <h1>
          <span className="text1">My</span> <span className="text2">Todo</span>
          List
        </h1>

        <div className="main-content">
          <form onSubmit={this.updateInputHandler} className="inputs-item">
            <input id="input" type="text" placeholder="Write your task" />
            <button type="submit" id="submit" className="submit">
              Add Task
            </button>
          </form>
          <div>
            <ol>{taskList}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
