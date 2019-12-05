import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoItems = this.todos.map(item => (
            <TodoItem
                key={item.id}
                item={item}
            />
        ));
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

/***
function App() {
    const todoItems = todoData.map(item => (
        <TodoItem
            key={item.id}
            item={item}
        />
    ));
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
***/

export default App