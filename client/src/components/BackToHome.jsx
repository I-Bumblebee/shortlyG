import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../App";

function BackToHome({ children }) {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default BackToHome;
