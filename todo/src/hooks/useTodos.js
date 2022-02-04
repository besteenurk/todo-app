import { useQuery, gql } from '@apollo/client';

const GET_TODOS = gql`
    query GetTodo($id: ID!){
        todo(id: $id) {
            id
            title
            note {
            content
            id
            done
            }
        }
    }    
`;


export const useTodos = (id) => {
    const { error, data, loading } = useQuery(GET_TODOS, {
        variables: {
            id
        }
    });

    return {
        error, data, loading
    }
}