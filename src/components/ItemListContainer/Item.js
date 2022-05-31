import "./Item.css";
//import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div>
      <Link to={`/${data.category}/${data.id}`}>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea className="card">
            <CardMedia
              component="img"
              height="300"
              image={data.image}
              alt="Producto"
              className="imgShop"
            />
            <CardContent className="typoContent">
              <Typography gutterBottom variant="h5" component="div">
                <span>{data.title}</span>
              </Typography>
              <Typography variant="body" color="text.secondary">
                <span style={{ color: "#deafbf" }}>{data.price} €</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};
export default Item;
