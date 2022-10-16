import { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../src/images/logo.png";
import avatar from "../src/images/avatar.jpg";

function Nav() {
  const [show, setShow] = useState(false);
  console.log(show);

  function transitionNavBar() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img src={logo} alt="logo" className="nav__logo" />
        <img src={avatar} alt="avatar" className="nav__avatar" />
      </div>
    </div>
  );
}

export default Nav;
