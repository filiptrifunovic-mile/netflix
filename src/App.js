import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

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
