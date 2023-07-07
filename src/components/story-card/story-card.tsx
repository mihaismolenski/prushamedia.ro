import "./story-card.scss";
import { Link } from "react-router-dom";

export interface StoryCardProps {
  storyId: string;
  title: string;
  coverImg: string;
}

export const StoryCard = ({ storyId, title, coverImg }: StoryCardProps) => {
  return (
    <Link className="story-card" to={`/stories/${storyId}`}>
      <img alt="cover" src={coverImg} />
      <div className="story-card-title">{title}</div>
    </Link>
  );
};

export default StoryCard;
