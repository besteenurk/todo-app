import React from 'react';
import { useTodo } from '../hooks/useTodo';

export default function TodoList() {

    const {error, loading, data} = useTodo();
    if (loading) return <div>loading..</div>
    if (error) return <div>Something went wrong..</div>
    return <div>
        {data.todos.map(({id, title}) => {
            return <div key={id}>
                {title}
            </div>
        })}
    </div>;
}
