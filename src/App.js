import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ToDoList from "./components/ToDoList";
import AddTodoList from "./Services/AddTodoList";
import DeleteToDoList from "./Services/DeleteToDoList";
import GetToDoList from "./Services/GetToDoList";
import UpdateToDoList from "./Services/UpdateToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState(false);

  useEffect(() => {
    GetToDoList(setToDoList);
  }, []);

  const addToDo = () => {
    AddTodoList(text, setText, setToDoList);
  };

  const updateToDo = () => {
    UpdateToDoList(toDoId, text, setText, setToDoList, setIsUpdate);
  };

  const updateMode = (id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h4 className="headerText">To Do List</h4>
        <div className="top">
          <input
            className="inputField"
            type="text"
            placeholder="Add ToDos...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button as="a" variant="dark" onClick={isUpdate ? updateToDo : addToDo}>
            {isUpdate ? "Update" : "Add"}
          </Button>
        </div>
        <div className="list">
          {toDoList.map((data) => (
            <ToDoList
              key={data._id}
              id={data._id}
              text={data.text}
              updateMode={() => updateMode(data._id, data.text)}
              deletToDo={() => DeleteToDoList(data._id, setToDoList)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
