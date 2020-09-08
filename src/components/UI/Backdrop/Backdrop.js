import React from "react";
import classses from "./Backdrop.module.css";

const backDrop = (props) =>
  props.show ? (
    <div className={classses.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backDrop;
