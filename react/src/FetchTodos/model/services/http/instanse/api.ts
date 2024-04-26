import axios from "axios";

const $todo_api = axios.create({
  baseURL: __TODO_API_URL__,
});

export default $todo_api;
