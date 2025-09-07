import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/logo.png" alt="VSITR Logo" className="footer-logo" />
      </div>
      <div className="footer-center">
        <span>VSITR | Question Paper</span>
      </div>

      <div className="footer-center">
        <p>&copy; {new Date().getFullYear()} VSITR. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
