import "./portofolio.scss";
import story1Img from "../../gallery/stories/story1.jpeg";
import story2Img from "../../gallery/stories/story2.jpeg";
import story3Img from "../../gallery/stories/story3.jpeg";
import story4Img from "../../gallery/stories/story4.jpeg";

export const Portofolio = () => {
  return (
    <div className="portofolio">
      <div className="portofolio-content">
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story1Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story2Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
        </div>
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story2Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story4Img} />
          </div>
        </div>
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story4Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story1Img} />
          </div>
        </div>
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story1Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story4Img} />
          </div>
        </div>
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story1Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story2Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
        </div>
        <div className="column">
          <div>
            <img alt="portofolio-image" src={story1Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story2Img} />
          </div>
          <div>
            <img alt="portofolio-image" src={story3Img} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;
