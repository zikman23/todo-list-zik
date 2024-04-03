import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import TodoForm from './form';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: true,
    },
    {
      text: 'customize todo app',
      isCompleted: true,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} mark={markTodo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
