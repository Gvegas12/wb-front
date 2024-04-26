import { Todo } from "../../types";
import { getAllTodos } from "../http/req/getAllTodos";
import { getOneTodo } from "../http/req/getOneTodo";

class TodoService {
  async getAll(): Promise<Todo[] | void> {
    try {
      const result = await getAllTodos();
      return result.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getOne(id: number) {
    try {
      const result = await getOneTodo(id);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new TodoService();
