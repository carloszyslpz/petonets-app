import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src="denndenn-logo.png" alt="Logo" className="logo-img" />
      </Link>
    </div>
  );
};

export default Header;
