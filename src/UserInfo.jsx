import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USER_INFO = gql`
  query GetUserInfo {
    user {
      username
    }
  }
`;

const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo($username: String!) {
    updateUserInfo(username: $username) {
      user {
        username
      }
    }
  }
`;

export const UserInfo = () => {
  const [username, setUsername] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_USER_INFO);
  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);

  const submitUserInfo = async () => {
    await updateUserInfo({ variables: { username } });
    refetch();
    setUsername("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>Hello, {data?.user?.username ?? "guest"} !</h2>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={() => submitUserInfo()}> Submit </button>
    </div>
  );
};
