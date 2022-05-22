import "../../Spinner/Spinner.css";
import { useState } from "react";

const Work = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div className="spinnerPosition">
      {loading ? <div className="spin"></div> : <div>Work</div>}
    </div>
  );
};

export default Work;
