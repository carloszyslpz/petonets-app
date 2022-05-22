import "./AboutMe.css";
import "../../Spinner/Spinner.css";
import { useState } from "react";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div className="spinnerPosition">
      {loading ? (
        <div className="spin"></div>
      ) : (
        <div className="about-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nunc odio, commodo id risus vel, ultricies ultricies arcu. Etiam
            eget diam at dolor mattis volutpat eget a risus. Suspendisse non
            dictum ipsum. Integer quis fringilla justo.Quisque nec interdum est.
            Sed vel sapien sagittis, volutpat leo eget, hendrerit velit. Nam
            odio diam, fringilla quis turpis quis, sollicitudin lobortis augue.
            Donec pharetra tempor nulla ac sollicitudin.
          </p>
          <h1 className="hello">Hi!</h1>
          <img
            src="./Iphone-videocall.png"
            alt="Img Videocall"
            className="videocall"
          />
          <p>
            Etiam eu congue lectus, ac cursus diam. Suspendisse potenti.
            Phasellus at massa ut felis cursus eleifend. Fusce at elementum
            lorem. Proin sit amet condimentum nunc. Nam cursus est nec augue
            auctor molestie. Integer tempor justo a tincidunt ultrices. Aliquam
            risus nulla, imperdiet in ultrices eu, laoreet vel lacus.
            Pellentesque feugiat augue in ligula dictum pharetra. In mattis,
            arcu non cursus porttitor, metus elit facilisis sapien, in ornare
            urna diam sit amet diam. Quisque sollicitudin dui in leo fermentum
            pharetra.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
