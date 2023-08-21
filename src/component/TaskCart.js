import React from "react";
import { useState } from "react";
import "./TaskCard.css";
import styles from "./Task.module.css"
function TaskCart(props) {
  // console.log(props);

  return (
 <section className="tasklist">
     <li
      className={`taskcard ${
        props.item.completed ? "compeleted" : "incompeleted"
      }`}
    >
      <span className={styles.title} >
        {props?.item?.id} - {props?.item?.name}
      </span>
      <button
        className="delete"
        onClick={() => props.handleDelete(props.item.id)}
      >
        Delete
      </button>
    </li>
 </section>
  );
}

export default TaskCart;
