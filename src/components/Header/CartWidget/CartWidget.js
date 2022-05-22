import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/Cart"}>
        <ShoppingCartIcon sx={{ fontSize: 40, color: "black" }} />
      </Link>
    </div>
  );
};

export default CartWidget;
