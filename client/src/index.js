import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/createApolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={apolloClient} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ ApolloProvider >
);
