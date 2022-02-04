import React from 'react';
import { useParams } from 'react-router';
import { useTodos } from '../hooks/useTodos';

export default function Todo() {

  const { id } = useParams();
  const { data, loading, error } = useTodos(id);

  if (error) return <div>Something went wrong..</div>
  if (loading) return <div>Loading..</div>

  console.log(data);
  return <div key={data.id}>
    {data.todo.title}
    {data.todo.note.map(({ id, content, done }) => {
      return <li key={id}>
        {content} --
        {done === 0 ? "In List" : "Done"}
      </li>
    })}
  </div>;
}
