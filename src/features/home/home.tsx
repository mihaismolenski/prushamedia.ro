import {Carousel, Contact} from "../../components";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
        <Carousel>
            <img alt="img1" src="images/gallery/img1.jpeg" />
            <img alt="img2" src="images/gallery/img2.jpeg" />
            <img alt="img3" src="images/gallery/img1.jpeg" />
            <img alt="img4" src="images/gallery/img2.jpeg" />
        </Carousel>
      <Contact />
    </div>
  );
};

export default Home;
