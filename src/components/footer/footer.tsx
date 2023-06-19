import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <a href="https://www.facebook.com/profile.php?id=100090807386681" className="footer-social-media">
          <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/prushamedia/" className="footer-social-media">
          <img src="images/instagram.png" alt="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
