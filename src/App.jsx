import "./App.css";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { PublicRoute } from "./components/PublicRoute";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("role") === "ADMIN",
  );
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              isAdmin={isAdmin}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
