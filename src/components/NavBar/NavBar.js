import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="contenedor">
      <img
        src="Phone-LandingPage.png"
        alt="NavBar"
        className="phone-landingPage"
      ></img>
      <ul>
        <div className="nav">
          <Link to={"/AboutMe"} className="Aboutnav">
            About Me
          </Link>
          <Link to={"/Rabbit"} className="Rabbitnav">
            🐰✨
          </Link>
          <Link to={"/Work"} className="Worknav">
            Work
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
