import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useUser } from "../../../App";

const SIGN_IN = gql`
  mutation LoginUser($loginInput: LoginInput!) {
    loginUser(loginInput: $loginInput) {
      username
      email
      password
      token
      _id
    }
  }
`;

const SignIn = (Component) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { setUser } = useUser();

  const change = ({ email, password }) => {
    setEmail(email);
    setPassword(password);
  };

  const [mutate, { data, loading, error }] = useMutation(SIGN_IN, {
    variables: {
      loginInput: {
        email,
        password,
      },
    },
  });
  
  useEffect(() => {
    if (loading) return;
    if (!data) return;
    const {
      loginUser: { username, token, _id },
    } = data;
    setUser({ username: username, token: token, id: _id });
    console.log("User: ", { username, token, _id });
    localStorage.setItem("token", token);
  }, [loading, data, setUser])

  useEffect(() => {
    if ( email === "" || password === "") return;
    (async () => {
      await mutate();
      setPassword("");
      setEmail("");
    })();
  }, [email, password, mutate]);

  return (
    <Component change={change} error={error}/>
  );
};

export default SignIn;
