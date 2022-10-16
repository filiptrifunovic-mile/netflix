import "./Nav.css";
import avatar from "../src/images/avatar.jpg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <img
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt="logo"
          className="nav__logo"
        />
        <img src={avatar} alt="avatar" className="nav__avatar" />
      </div>
    </div>
  );
}

export default Nav;
