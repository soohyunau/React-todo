import React, {useState, useRef, useCallback} from 'react';
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
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
    setTodos(todos.concat(todo));
    nextId.current += 1;
    },
    [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} />
  </TodoTemplate>
  );
}

export default App;
