import { AboutMe, Carousel, Contact } from "../../components";
import "./home.scss";
import img1 from "../../gallery/img1.jpeg";
import img2 from "../../gallery/img2.jpeg";
import bg from "../../gallery/background.jpeg";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Home = () => {
  const images = [img1, img2, img1, img2];
  const { hash } = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hash === "#contact" &&
      contactRef.current?.scrollIntoView &&
      contactRef.current.scrollIntoView({ behavior: "smooth" });

    hash === "#about" &&
      aboutMeRef.current?.scrollIntoView &&
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="home">
      <div
        className="home-background"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <Carousel>
        {images.map((img, index) => (
          <img alt={`img-${index}`} src={img} key={`img-${index}`} />
        ))}
      </Carousel>
      <AboutMe aboutMeRef={aboutMeRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;
