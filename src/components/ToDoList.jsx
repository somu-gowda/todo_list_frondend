import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const ToDOList = (props) => {
  const { text, updateMode, deletToDo } = props;
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
            <FaPen className="icon" onClick={updateMode} />
            <FaTrash className="icon" onClick={deletToDo} />
      </div>
    </div>
  );
};

export default ToDOList;
