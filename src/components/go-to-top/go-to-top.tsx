import styles from "./go-to-top.module.scss";

export const GoToTop = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={scrollTop} className={styles["go-to-top"]}>
      &#8593; Go to top &#8593;
    </div>
  );
};

export default GoToTop;
