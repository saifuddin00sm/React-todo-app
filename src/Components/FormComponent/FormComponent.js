import React from "react";
import mainStyles from "../../App.module.css";
import FormContext from "../../context/form-context";

const formComp = (props) => {
  return (
    <div className={mainStyles.App}>
      <h1 className={mainStyles.headTxt}>
        <span className={mainStyles.text1}>My</span>
        <span className={mainStyles.text2}>Todo</span>
        List
      </h1>

      <div className={mainStyles.mainContent}>
        <FormContext.Consumer>
          {(context) => (
            <form onSubmit={context.submit} className={mainStyles.inputItem}>
              <input
                id="input"
                className={mainStyles.inputCls}
                type="text"
                placeholder="Write your task"
              />
              <button
                type="submit"
                id="submit"
                className={mainStyles.submitBtn}
              >
                Add Task
              </button>
            </form>
          )}
        </FormContext.Consumer>
        <button className={mainStyles.clearTaskBtn} onClick={props.clearTask}>
          Clear All Task
        </button>
        <div>
          <ol className={mainStyles.ol}>{props.taskMain}</ol>
        </div>
      </div>
    </div>
  );
};

export default formComp;
