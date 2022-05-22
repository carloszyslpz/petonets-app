import Item from "./Item";
import "./Item.css";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="productsList">
      {items.map((products) => {
        return (
          <div key={products.id}>
            <Link to={`/Detalle${products.id}`}>
              <Item data={products} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
