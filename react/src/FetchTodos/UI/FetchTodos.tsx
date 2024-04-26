import { FC } from "react";

import TodoService from "../model";

/* 
  1. Ошибка в TodoService с js файлом
*/
/* 
  2. Что тут не так?
*/

export const FetchTodos: FC = () => {
  const receivedTodos = TodoService.getAll();

  console.log({ receivedTodos });

  return (
    <div>
      <h4>Todos</h4>
      <ul>
        <li>Todo id: 1</li>
        <li>Todo id: 2</li>
      </ul>
    </div>
  );
};
