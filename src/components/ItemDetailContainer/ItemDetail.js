import "../ItemDetailContainer/ItemDetail.css";
import ItemCount from "../ItemDetailContainer/ItemCount/ItemCount";
//import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const ItemDetail = ({ data }) => {
  //const cartContext = useContext(CartContext);
  //const { addToCart, enable } = cartContext;

  const stock = data.stock;
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);

  const view = () => {
    if (stock <= data.stock) {
      setVisible(false);
    }
  };
  const onAdd = () => {
    Swal.fire(
      "Good job!",
      `You have added ${counter} of ${data.title} to the cart`,
      "success"
    );
    view();
    //addToCart(detail, counter);
  };

  return (
    <div>
      <Card className="detailContainer">
        <CardMedia
          className="imgDetail"
          component="img"
          image={data.image}
          alt="Producto"
        />
        <div></div>
        <CardContent className="detailContent">
          <Typography variant="body1" color="text.primary">
            <h1>{data.title}</h1>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <h3>€ {data.price}</h3>
          </Typography>
          <CardActions disableSpacing>
            <FavoriteIcon sx={{ ml: 2.5 }} />
          </CardActions>
          {visible ? (
            <ItemCount
              onAdd={onAdd}
              counter={counter}
              setCounter={setCounter}
              stock={data.stock}
            />
          ) : (
            <div>
              <Link to={"/Shop"}>
                <Button>Seguir Comprando</Button>
              </Link>
              <Link to={"/"}>
                <Button>Terminar Mi Compra</Button>
              </Link>
            </div>
          )}
        </CardContent>
        <CardContent>
          <Typography paragraph>{data.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetail;
