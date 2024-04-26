import $todo_api from "../instanse/api";

/**
 * Возвращает все найденные тудушки
 * @returns Полученные тудушки
 */
export const getOneTodo = async (id) => {
  return $todo_api.get(`/${id}`);
};
