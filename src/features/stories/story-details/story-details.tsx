import { StoryData } from "../stories-data";
import "./story-details.scss";
import { Link } from "react-router-dom";

export interface StoryDetailsProps {
  data: StoryData;
  neighbours: StoryData[];
}

export const StoryDetails = ({ data, neighbours }: StoryDetailsProps) => {
  const { title, images } = data;
  const [left, right] = neighbours;

  return (
    <div className="story-details">
      <h2>{title}</h2>
      <div className="story-details-gallery">
        {images.map((img, index) => (
          <img alt="gallery" src={img} key={`story-img-${index}`} />
        ))}
        <div className="story-details-navigation">
          <Link to={`/stories/${left.id}`}>
            {"<<"} {left.title}
          </Link>
          <Link to={`/stories/${right.id}`}>
            {right.title} {">>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
