import "./story-card.scss";

export interface StoryCardProps {
  title: string;
  coverImg: string;
}

export const StoryCard = ({ title, coverImg }: StoryCardProps) => {
  return (
    <div className="story-card">
      <img alt="cover" src={coverImg} />
      <div className="story-card-title">{title}</div>
    </div>
  );
};

export default StoryCard;
