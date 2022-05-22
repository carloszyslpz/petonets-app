import "./Header.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import FavouriteWidget from "./FavouriteWidget/FavouriteWidget";

const Header = () => {
  return (
    <div className="logo">
      <div className="icons">
        <div>
          <CartWidget />
        </div>
        <div>
          <FavouriteWidget />
        </div>
      </div>
      <Link to={"/"}>
        <img src="petonets-logo.png" alt="Logo" className="logo-img" />
      </Link>
    </div>
  );
};

export default Header;
