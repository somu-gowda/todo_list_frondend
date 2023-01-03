import axios from "axios";
import getToDoList from "./GetToDoList";
const baseUrl = "http://localhost:5000";

const UpdateToDoList = (toDoId, text, setText, setToDoList, setIsUpdate) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((response) => {
      setText("");
      setIsUpdate(false);
      getToDoList(setToDoList)
    })
    .catch((err) => {
      console.log(err);
    });
};

export default UpdateToDoList;
