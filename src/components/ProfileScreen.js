import "../css/ProfileScreen.css";
import Nav from "./Nav";
import avatar from "../images/avatar.jpg";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import PlanScreen from "./PlanScreen";

function ProfileScreen() {
  const user = useSelector((store) => store.counter.user);
  const navigate = useNavigate();

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img src={avatar} alt="Avatar" />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>

              <PlanScreen />

              <button
                className="profile-sign-out"
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
