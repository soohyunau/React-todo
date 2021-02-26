import React, {useState} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Basic react app',
      checked: true,
    },
    {
      id: 2,
      text: 'styling with scss',
      checked: true,
    },
    {
      id: 3,
      text: 'Make todo list management app',
      checked: false,
    },
  ])

  return (
  <TodoTemplate>
    <TodoInsert />
    <TodoList todos={todos} />
  </TodoTemplate>
  );
}

export default App;
