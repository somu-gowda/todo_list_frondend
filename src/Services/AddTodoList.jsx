import axios from "axios";
import Toast from "../components/Toast";
import getToDoList from "./GetToDoList";

const baseUrl = "http://localhost:5000";

const AddTodoList = (text, setText, setToDoList) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((response) => {
        setText("")
        Toast(response.data.message);
        getToDoList(setToDoList)
       

      }).catch((err) => {
        console.log(err);
      });
}

export default AddTodoList;