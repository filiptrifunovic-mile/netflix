import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./utils/firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="login" element={<Login />} />
          ) : (
            <Route path="/" element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
