import "./header.scss";
import Menu from "../menu/menu";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <div>Ioana</div>
        <img src="/images/logo.jpg" alt="logo" height="180px" />
        <div>Pruşu</div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
