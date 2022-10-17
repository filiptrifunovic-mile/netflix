import { useEffect, useState } from "react";
import "../css/Nav.css";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

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
        <img
          src={logo}
          alt="logo"
          className="nav__logo"
          onClick={() => navigate("/")}
        />
        <img
          src={avatar}
          alt="avatar"
          className="nav__avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
