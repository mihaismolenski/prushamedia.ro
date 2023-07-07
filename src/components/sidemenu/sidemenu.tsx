import "./sidemenu.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Sidemenu = ({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: Function;
}) => {
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "unset";
  }, [visible]);

  return (
    <>
      <div
        className={`sidemenu-background ${visible ? "visible" : "hidden"}`}
        onClick={() => handleClose && handleClose()}
      ></div>
      <aside className={`sidemenu ${visible ? "active" : ""}`}>
        <Link to="/" onClick={() => handleClose()}>
          Home
        </Link>
        <Link
          onClick={() => handleClose()}
          to={{
            pathname: "/",
            hash: "#about",
          }}
        >
          About
        </Link>
        <Link to="/portofolio" onClick={() => handleClose()}>
          Portofolio
        </Link>
        <Link to="/stories" onClick={() => handleClose()}>
          Stories
        </Link>
        <Link
          onClick={() => handleClose()}
          to={{
            pathname: "/",
            hash: "#contact",
          }}
        >
          Contact
        </Link>
      </aside>
    </>
  );
};

export default Sidemenu;
