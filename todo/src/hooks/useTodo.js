import { useQuery, gql } from '@apollo/client';

export const GET_TODO = gql`
    query {
        todos{
            id
            title
        }
    }
`;


export const useTodo = () => {
    const { error, data, loading } = useQuery(GET_TODO);

    return {
        error, data, loading
    }
}