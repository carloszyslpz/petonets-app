import NavBar from "../../NavBar/NavBar";
import "../../Spinner/Spinner.css";
import { useState } from "react";
import "../Home/Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <div className="spinnerPosition">
      {loading ? (
        <div className="spin"></div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
    </div>
  );
};

export default Home;
