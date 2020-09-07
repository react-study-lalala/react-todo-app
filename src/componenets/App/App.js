import React from 'react';
import './App.css';

import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";

const initData = [{
    idx : 1,
    title : "test",
    content : " 테스트 입니다. "
}];

let idx = 2;

function App() {

    const [todos, setTodos] = React.useState(initData);

    const createTodo = (todo) => {
        setTodos(todos.concat({idx , ...todo}));
        idx++;
    };

    const removeTodo = (idx) => {
        setTodos(todos.filter(v => v.idx !== idx));
    }

    return (
        <div className="App">
            <TodoInput idx={idx} createTodo={createTodo}  />
            {
                todos.map(v => <Todo  key={v.idx} todo={v} removeTodo={removeTodo} />)
            }
        </div>
    );
}

export default App;
