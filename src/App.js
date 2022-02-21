import React, { useState } from 'react';
import Header from './components/header/Header';
import AddTodo from './components/add-todo/AddTodo';
import TodoList from './components/todo-list/TodoList';

import s from './App.module.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Первая задача',
      status: true
    },
    {
      id: 2,
      title: 'Вторая задача',
      status: false
    }
  ]);

  return (
    <div className={s.app}>
      <div className={s.container}>
        <Header />
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
