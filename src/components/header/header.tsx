import "./header.scss";
import Menu from "../menu/menu";

export const Header = () => {
  return <header className="header">
    <img src="images/logo.jpg" alt="logo" height="180px"/>
    <Menu />
  </header>;
};

export default Header;
