import "./stories.scss";
import { StoryCard } from "../../components";
import { STORIES_DATA } from "./stories-data";
import { useLocation, useParams } from "react-router-dom";
import StoryDetails from "./story-details/story-details";
import { useMemo } from "react";

export const Stories = () => {
  const { pathname } = useLocation();
  const { storyId } = useParams();
  const selectedStory = useMemo(() => {
    return STORIES_DATA.find((s) => s.id === storyId);
  }, [storyId]);
  const neighbours = useMemo(() => {
    const idx = STORIES_DATA.findIndex((s) => s.id === storyId);

    if (idx === 0) return [STORIES_DATA.length - 1, 1];
    if (idx === STORIES_DATA.length - 1) return [STORIES_DATA.length - 2, 0];

    return [idx - 1, idx + 1];
  }, [storyId]);

  return (
    <div className="stories">
      {pathname === "/stories" && (
        <div className="stories-content ">
          {STORIES_DATA.map((story, index) => (
            <StoryCard
              storyId={story.id}
              title={story.title}
              coverImg={story.images[0]}
              key={index}
            />
          ))}
        </div>
      )}
      {storyId && (
        <StoryDetails
          data={selectedStory!}
          neighbours={[
            STORIES_DATA[neighbours[0]],
            STORIES_DATA[neighbours[1]],
          ]}
        />
      )}
    </div>
  );
};
export default Stories;
