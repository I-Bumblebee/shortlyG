import React, { useState } from "react";
import { SignInForm } from "../resolvers";
// import { withSignupForm } from "../resolvers";

const LogInForm = ({ change, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col w-full items-center h-screen mt-[-118px] justify-center z-[-100]">
      <div
        className={`rounded-md shadow-2xl w-[85%] md:w-96 min-h-[320px] h-[56%] flex flex-col justify-center items-center bg-[#bfbfbf]/25 ${
          !error
            ? " shadow-2xl"
            : "border-red-600 border-solid shadow-red-500 shadow-md border-2"
        }`}
      >
        <h1 className="font-poppins self-start pl-10 rounded-md">Email: </h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"  . . ."}
          className="mb-4 px-2 py-1 w-[80%] rounded-md"
        />
        <h1 className="font-poppins self-start pl-10 rounded-md">Password: </h1>
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
            change({ email, password });
            setEmail("");
            setPassword("");
          }}
          className="w-[80%] text-white font-poppins py-2 text-xl rounded-full bg-[#2acfcf]"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => SignInForm(LogInForm);

export default LoginForm;
