import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./components/ProfileScreen";

function App() {
  const user = useSelector((store) => store.counter.user);

  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
