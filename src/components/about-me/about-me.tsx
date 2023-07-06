import "./about-me.scss";

export const AboutMe = ({
  aboutMeRef,
}: {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="about-me" ref={aboutMeRef}>
      <div className="about-me-content">About me</div>
    </div>
  );
};

export default AboutMe;
