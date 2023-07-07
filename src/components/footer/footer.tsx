import "./footer.scss";
import Menu from "../menu/menu";

export const Footer = () => {
  return (
    <footer className="footer">
      <Menu />
      <div className="footer-row">
        <a
          href="https://www.facebook.com/profile.php?id=100090807386681"
          className="footer-social-media"
        >
          <img src="/images/facebook.png" alt="facebook" width="40px" />
        </a>
        <a
          href="https://www.instagram.com/prushamedia/"
          className="footer-social-media"
        >
          <img src="/images/instagram.png" alt="instagram" width="40px" />
        </a>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Prusha - Extreme Creative Media PHOTOGRAPHY
      </div>
    </footer>
  );
};

export default Footer;
