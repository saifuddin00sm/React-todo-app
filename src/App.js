import React, { Component } from "react";
import mainStyles from "./App.module.css";
import Task from "./Components/InputTask/InputTask";

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

      const taskVal = input.value.trim();

      this.setItemOnLocalHandler(taskVal);
      input.value = "";
    }
  };

  // Setting task to the local storage
  setItemOnLocalHandler = (tasks) => {
    let task;
    if (localStorage.getItem("tasks") == null) {
      task = [];
    } else {
      task = JSON.parse(localStorage.getItem("tasks"));
    }
    task.push(tasks);
    localStorage.setItem("tasks", JSON.stringify(task));
  };

  //getting local storage items
  getItemFromLocalHandler = () => {
    let task;

    if (localStorage.getItem("tasks") == null) {
      task = [];
    } else {
      task = JSON.parse(localStorage.getItem("tasks"));
    }

    this.setState({ tasks: task });
  };

  // remove task from localStorage
  removeTaskfromLocalHandler = (ind) => {
    let task;

    if (localStorage.getItem("tasks") == null) {
      task = [];
    } else {
      task = JSON.parse(localStorage.getItem("tasks"));
    }

    task.splice(ind, 1);
    localStorage.setItem("tasks", JSON.stringify(task));
    this.setState({ tasks: task });
  };

  // Removing task from list
  removeTaskHandler = (index) => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });

    this.removeTaskfromLocalHandler(index);
  };

  // document on load getting localStorage items
  componentDidMount() {
    window.addEventListener("load", this.getItemFromLocalHandler);
  }

  render() {
    const taskList = this.state.tasks.map((t, index) => {
      return (
        <Task
          items={t}
          key={index}
          remove={() => this.removeTaskHandler(index)}
        />
      );
    });

    return (
      <div className={mainStyles.App}>
        <h1 className={mainStyles.headTxt}>
          <span className={mainStyles.text1}>My</span>{" "}
          <span className={mainStyles.text2}>Todo</span>
          List
        </h1>

        <div className={mainStyles.mainContent}>
          <form
            onSubmit={this.updateInputHandler}
            className={mainStyles.inputItem}
          >
            <input
              id="input"
              className={mainStyles.inputCls}
              type="text"
              placeholder="Write your task"
            />
            <button type="submit" id="submit" className={mainStyles.submitBtn}>
              Add Task
            </button>
          </form>
          <div>
            <ol className={mainStyles.ol}>{taskList}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
