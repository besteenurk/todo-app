import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { Route, Routes } from 'react-router';
import Todo from "./components/Todo";

class App extends Component {

    render() {
        return (
            <Routes>
                <Route strict exact path='/' element={<TodoList />} />
                <Route path='/task/:id' element={<Todo />} />
            </Routes>
        )
    }
}


export default App;