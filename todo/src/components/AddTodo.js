import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_TODO } from '../hooks/useTodo';


const ADD_TODO = gql`
    mutation AddTodo($title: String!) {
        addTodo(title: $title) {
            id
            title
        }
    }
`;

export default function AddTodo() {

    let input;

    const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
        refetchQueries: [GET_TODO]
    });

    if (loading) return 'Loading..';
    if (error) return `Something went wrong.. ${error.message}`;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { title: input.value } });
                input.value = '';
            }}>
                <input ref={node => {
                    input = node;
                }} />
                <button type="submit">Add Todo</button>

            </form>
        </div>
    )
}
