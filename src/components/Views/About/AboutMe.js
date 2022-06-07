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
          <h1 className="hello">Hi!</h1>
          <img
            src="./Iphone-videocall.png"
            alt="Img Videocall"
            className="videocall"
          />
          <article>
            <p>
              My name is Dennise. i am from Mexico City, currently living in
              Hamburg, Germany. i'm doing my Bachelor in Fine Arts in the
              Graphic Design Department at the Hochschule für bildende Kúnste.
            </p>
            <p>
              I consider myself a curious person who likes to learn new
              techniques, as well as develop projects, both individually and in
              collaboration with other people.
            </p>
            <p>
              In my daily work, I like to use graphic design and illustration
              together to enhance the visual experience.
            </p>
            <p>
              Everyday life, nature, culture, history, movies, and TV shows, as
              well as fashion, always inspires me for the realization of any
              project.
            </p>
          </article>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
