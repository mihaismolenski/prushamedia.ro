import "./stories.scss";
import { StoryCard } from "../../components";
import story1Img from "../../gallery/stories/story1.jpeg";
import story2Img from "../../gallery/stories/story2.jpeg";
import story3Img from "../../gallery/stories/story3.jpeg";
import story4Img from "../../gallery/stories/story4.jpeg";

export const Stories = () => {
  return (
    <div className="stories">
      <div className="stories-content ">
        <StoryCard title="Iustina - the Bride" coverImg={story1Img} />
        <StoryCard title="Another Story - Sunset" coverImg={story2Img} />
        <StoryCard title="Yet Another Story - Poppies" coverImg={story3Img} />
        <StoryCard
          title="Motherly Love - the Connection"
          coverImg={story4Img}
        />
        <StoryCard title="Iustina - the Bride" coverImg={story1Img} />
        <StoryCard title="Another Story - Sunset" coverImg={story2Img} />
        <StoryCard title="Yet Another Story - Poppies" coverImg={story3Img} />
        <StoryCard
          title="Motherly Love - the Connection"
          coverImg={story4Img}
        />
      </div>
    </div>
  );
};
export default Stories;
