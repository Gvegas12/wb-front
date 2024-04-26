import { AxiosResponse } from "axios";
import { Todo } from "../../../types";
import $todo_api from "../instanse/api";

/**
 * Возвращает все найденные тудушки
 * @returns Полученные тудушки
 */
export const getAllTodos = async (): Promise<AxiosResponse<Todo[]>> => {
  return $todo_api.get<Todo[]>("");
};
