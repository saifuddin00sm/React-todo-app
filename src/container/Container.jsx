import React, { Component } from "react";
import Task from "../Components/InputTask/InputTask";
import FormComp from "../Components/FormComponent/FormComponent";
import FormContext from "../context/form-context";

class Container extends Component {
  state = {
    tasks: [],
  };
  // Adding task to the list
  updateInputHandler = event => {
    event.preventDefault();
    const input = document.getElementById("input");
    if (input.value === "") {
      alert("Please add a task");
    } else {
      const myArr = this.state.tasks;

      myArr.push(input.value);

      this.setState({ tasks: myArr });

      const taskVal = input.value.trim();

      //passing input value to the localStorage function
      this.setItemOnLocalHandler(taskVal);

      // clearing input field
      input.value = "";
    }
  };

  // Setting task to the local storage
  setItemOnLocalHandler = tasks => {
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
  removeTaskfromLocalHandler = ind => {
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

  // clear all task in one click
  clearTaskHandler = () => {
    localStorage.removeItem("tasks");
    let task = this.state.tasks;
    task = [];
    this.setState({ tasks: task });
  };

  // Removing task from list
  removeTaskHandler = index => {
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
          key={index}
          items={t}
          remove={() => this.removeTaskHandler(index)}
        />
      );
    });

    return (
      <FormContext.Provider value={{ submit: this.updateInputHandler }}>
        <FormComp taskMain={taskList} clearTask={this.clearTaskHandler} />{" "}
      </FormContext.Provider>
    );
  }
}

export default Container;
