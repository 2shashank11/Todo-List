import './App.css';
import Header from './MyComponents/Header';
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("im onDelete of", todo);


    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log('adding this todo', title, desc);
    let sno
    if (todos.length === 0) {
      sno = 0;
    }
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])

    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header title='My Todos List' />
          <AddTodo addTodo={addTodo}></AddTodo>
          <Todos todos={todos} onDelete={onDelete} />
          <Footer/>
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Header title='My Todos list' />
          <About />
          <Footer/>
        </>),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
