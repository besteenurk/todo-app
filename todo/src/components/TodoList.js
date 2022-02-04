import React from 'react';
import { Link } from 'react-router-dom';
import { useTodo } from '../hooks/useTodo';
import AddTodo from './AddTodo';


export default function TodoList() {

    const { error, loading, data } = useTodo();
    if (loading) return <div>loading..</div>
    if (error) return <div>Something went wrong..</div>
    return <div>
        <AddTodo />
        {data.todos.map(({ id, title }) => {
            return (
                <div key={id}>
                    <Link to={`/task/${id}`}>
                        {title}
                    </Link>
                </div>
            )
        })}
    </div>;
}
