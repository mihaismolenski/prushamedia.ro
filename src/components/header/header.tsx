import "./header.scss";
import Menu from "../menu/menu";
import { useState } from "react";
import Sidemenu from "../sidemenu/sidemenu";

export const Header = () => {
  const [showSidemenu, setShowSideMenu] = useState(false);

  return (
    <header className="header">
      <img
        src={showSidemenu ? "/images/close.png" : "/images/hamburger.png"}
        alt="hamburger"
        width={showSidemenu ? "28px" : "36px"}
        className="header-mobile-icon"
        onClick={() => setShowSideMenu(!showSidemenu)}
      />
      <div className="header-logo">
        <div>Ioana</div>
        <img src="images/logo2.png" alt="logo" height="180px" />
        <div>Pruşu</div>
      </div>
      <Menu />
      <Sidemenu
        visible={showSidemenu}
        handleClose={() => setShowSideMenu(false)}
      />
    </header>
  );
};

export default Header;
