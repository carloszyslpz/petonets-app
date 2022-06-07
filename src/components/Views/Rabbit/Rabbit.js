import "../../Spinner/Spinner.css";
import { useState } from "react";

const Rabbit = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div className="spinnerPosition">
      {loading ? <div className="spin"></div> : <div>🐰✨</div>}
    </div>
  );
};

export default Rabbit;
