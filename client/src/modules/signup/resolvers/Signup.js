import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useUser } from "../../../App";

const SIGNUP = gql`
  mutation RegisterUser($registerInput: RegisterInput!) {
    registerUser(registerInput: $registerInput) {
      username
      email
      token
      password
      _id
    }
  }
`;

const Signup = (Component) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useUser()

  const change = ({ username, email, password }) => {
    setUsername(username);
    setEmail(email);
    setPassword(password);
  };

  const [mutate, {data, loading, error}] = useMutation(SIGNUP, {
    variables: {
      registerInput: {
        username,
        email,
        password
      }
    },
  });

  useEffect(() => {
    if (loading) return;
    if (!data) return;
    const {
      registerUser: { username, token, _id },
    } = data;

    setUser({ username: username, token: token, id: _id });
    localStorage.setItem("token", token);
  }, [loading, data, setUser])

  useEffect(() => {
    if (username === "" || email === "" || password === "") return;
    (async () => {
      await mutate();
      setPassword("");
      setEmail("");
      setUsername("");
    })();
  }, [username, email, password, mutate]);

  return (
    <>
      <Component change={change} error={error}/>
    </>
  );
}

export default Signup;
