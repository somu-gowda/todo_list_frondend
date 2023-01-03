import axios from "axios";

const baseUrl = "http://localhost:5000";

const getToDoList = (setData) => {
  axios.get(baseUrl).then((response) => {
    const data = response.data;
    setData(data);
  }).catch((err) => {
    console.log(err);
  });
};

export default getToDoList;
