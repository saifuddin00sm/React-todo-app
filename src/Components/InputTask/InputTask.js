import React from "react";
import inputClassses from "./InputTask.module.css";

const tasks = (props) => {
  return (
    <li className={inputClassses.listStyle}>
      <span>{props.items}</span>
      <span onClick={props.remove} className={inputClassses.closeBtn}>
        &#10005;
      </span>
    </li>
  );
};

export default tasks;
