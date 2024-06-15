import { useQuery, gql } from '@apollo/client';

const GET_USER_INFO = gql`
  query GetUserInfo {
    user {
      username
      firstName
    }
  }
`;


export const UserInfo = () => {
    const { loading, error, data, refetch } = useQuery(GET_USER_INFO);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log({data});

    return (
        <div>
          <h2>Hello, {data?.user?.firstName} !</h2>
          <button onClick={() => refetch()}> Refetch! </button>
          <button onClick={() => refetch()}> Mutate! </button>
        </div>
    );
}