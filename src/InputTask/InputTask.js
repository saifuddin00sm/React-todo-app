import React from "react";
import "./InputTask.css";

const tasks = (props) => {
  return (
    <li>
      <span>{props.items}</span>
      <span onClick={props.remove} className="closeBtn">
        &#10005;
      </span>
    </li>
  );
};

export default tasks;
