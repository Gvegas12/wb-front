import React from "react";
import { FetchTodos } from "./FetchTodos";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <FetchTodos />
    </div>
  );
};

export default App;
