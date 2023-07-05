import {Carousel, Contact} from "../../components";
import "./home.scss";
import img1 from "../../gallery/img1.jpeg";
import img2 from "../../gallery/img2.jpeg";
import bg from "../../gallery/background.jpeg";

export const Home = () => {
    const images = [img1, img2, img1, img2];

    return (
        <div className="home">
            <div className="home-background" style={{backgroundImage: `url(${bg})`}}></div>
            <Carousel>
                {images.map((img, index) => <img alt={`img-${index}`} src={img} key={`img-${index}`}/>)}
            </Carousel>
            <Contact/>
        </div>
    );
};

export default Home;
