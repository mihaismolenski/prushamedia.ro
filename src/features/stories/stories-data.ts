import story1Img from "../../gallery/stories/story1.jpeg";
import story2Img from "../../gallery/stories/story2.jpeg";
import story3Img from "../../gallery/stories/story3.jpeg";
import story4Img from "../../gallery/stories/story4.jpeg";

export interface StoryData {
  id: string;
  title: string;
  images: string[];
}

export const STORIES_DATA: StoryData[] = [
  {
    id: "iustina-the-bride",
    title: "Iustina - the Bride",
    images: [story1Img, story1Img, story1Img],
  },
  {
    id: "another-story-sunset",
    title: "Another Story - Sunset",
    images: [story2Img, story2Img, story2Img],
  },
  {
    id: "yet-another-story-poppies",
    title: "Yet Another Story - Poppies",
    images: [story3Img, story3Img, story3Img],
  },
  {
    id: "motherly-love-the-connection",
    title: "Motherly Love - the Connection",
    images: [story4Img, story4Img, story4Img],
  },
  {
    id: "iustina-the-bride2",
    title: "Iustina - the Bride",
    images: [story1Img, story1Img, story1Img],
  },
  {
    id: "another-story-sunset2",
    title: "Another Story - Sunset",
    images: [story2Img, story2Img, story2Img],
  },
  {
    id: "yet-another-story-poppies2",
    title: "Yet Another Story - Poppies",
    images: [story3Img, story3Img, story3Img],
  },
  {
    id: "motherly-love-the-connection2",
    title: "Motherly Love - the Connection",
    images: [story4Img, story4Img, story4Img],
  },
];
