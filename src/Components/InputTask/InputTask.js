import React from "react";
import inputClasses from "./InputTask.module.css";
import dateFormat from "dateformat";

class Tasks extends React.Component {
  render() {
    const dates = new Date().toString();
    return (
      <li className={inputClasses.listStyle}>
        <span>{this.props.items}</span>
        <span>{dateFormat(dates, "ddd, mmm, dS, yyyy, h:MM TT")}</span>
        <span onClick={this.props.remove} className={inputClasses.closeBtn}>
          &#10005;
        </span>
      </li>
    );
  }
}

export default Tasks;
