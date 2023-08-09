import "./about-me.scss";

export const AboutMe = ({
  aboutMeRef,
}: {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="about-me" ref={aboutMeRef}>
      <div className="about-me-content">
        <img src="/images/about-me.jpg" alt="logo" height="500px" />

        <div className="about-me-content-text">
          Bună! Mă numesc Ioana, om al oamenilor, pasionată de frumos,
          sentimente și culoare. Prin fotografie și videografie îmi doresc să
          spun poveștile așa cum sunt ele, dintr-o perspectivă artistică,
          energică și plină de emoție. În colaborarea cu clienții vreau să ating
          noi orizonturi prin creativitate, unicitate și bucurie, creând astfel
          nu doar amintiri digitale, ci și clipe de neuitat.
          <br /> <br />
          Ador să surprind momentele cele mai importante din viața unui om, iar
          pentru asta aș merge până la capătul lumii &#10084;. Hai să ne lăsăm imaginația
          să zboare și să creăm amintiri de pus în suflet!
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
