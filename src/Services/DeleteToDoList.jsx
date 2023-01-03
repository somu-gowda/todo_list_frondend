import axios from "axios";
import Toasts from "../components/Toast";
import getToDoList from "./GetToDoList";
const baseUrl = "http://localhost:5000";

const DeleteToDoList = (_id, setToDoList) => {
    axios
    .delete(`${baseUrl}/${_id}`)
    .then((response) => {
      Toasts(response.data.message)
      getToDoList(setToDoList)
    })
    .catch((err) => {
      console.log(err);
    });
}

export default DeleteToDoList;