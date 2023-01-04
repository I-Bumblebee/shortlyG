import React, { useState } from "react";
import { withSignupForm } from "../resolvers";

const SignupForm1 = ({ change, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col w-full items-center h-[90%]  justify-center">
      <div className={`rounded-md  w-[85%] md:w-96 min-h-[400px] h-[56%] flex flex-col justify-center items-center bg-[#bfbfbf]/25  ${!error ? " shadow-2xl" : "border-red-600 border-solid shadow-red-500 shadow-md border-2"}`}>
        <h1 className="font-poppins self-start pl-10">Username: </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"  . . ."}
          className="mb-4 px-2 py-1 w-[80%] rounded-md"
        />
        <h1 className="font-poppins self-start pl-10">Email: </h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"  . . ."}
          className="mb-4 px-2 py-1 w-[80%] rounded-md"
        />
        <h1 className="font-poppins self-start pl-10">Password: </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"  . . ."}
          className="mb-7 px-2 py-1 w-[80%] rounded-md"
        />
        <hr />
        <button
          onClick={() => {
            change({ username, email, password });
            setUsername("");
            setEmail("");
            setPassword("");
          }}
          className="w-[80%] text-xl text-white font-poppins py-2 rounded-full bg-[#2acfcf]"
        >
          Register
        </button>
      </div>
    </div>
  );
};

const SignupForm = () => withSignupForm(SignupForm1);

export default SignupForm;
