import "../ItemCount/ItemCount.css";
import { IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = ({ onAdd, counter, setCounter, stock }) => {
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="countButton">
      <div className="count">
        <IconButton
          onClick={counterDown}
          style={{ visibility: counter <= 0 && "hidden" }}
          aria-label="delete"
          sx={{ padding: 0 }}
        >
          <RemoveIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <div>{counter}</div>
        <IconButton
          onClick={counterUp}
          style={{ visibility: counter >= stock && "hidden" }}
          aria-label="add to shopping cart"
          sx={{ padding: 0 }}
        >
          <AddIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </div>
      <Button
        onClick={onAdd}
        variant="outlined"
        sx={{ color: "#b8a2c2", borderColor: "#e7c5d2" }}
      >
        Agregar A Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
