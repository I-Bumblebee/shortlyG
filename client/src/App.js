import React, {createContext, useContext, useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { LogIn } from "./modules/signin";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import BackToHome from "./components/BackToHome";
import Redirect from "./components/Redirect";
import * as jose from "jose";

const UserContext = createContext();

export const useUser = () => useContext(UserContext)

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem("token");
      if(!token) return;
      const userData = (await jose.decodeJwt(token));
      setUser({username:userData.username, email:userData.email, id:userData.user_id})
    })();
  }, [])
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Redirect>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <BackToHome>
                <Signup />
              </BackToHome>
            }
          />
          <Route
            path="/signin"
            element={
              <BackToHome>
                <LogIn />
              </BackToHome>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Redirect>
    </UserContext.Provider>
  );
}

export default App;
