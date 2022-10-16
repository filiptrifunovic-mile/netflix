import { useEffect, useState } from "react";
import "../css/Nav.css";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";

function Nav() {
  const [show, setShow] = useState(false);

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
