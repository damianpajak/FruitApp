import { FooterIcons } from "../components/Footer/FooterIcons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div>
          <p className="footer_text">
            Final project for the JavaScript Developer course from Coders Lab
          </p>
          <p className="footer_text">Created by Damian Pająk</p>
          <p className="footer_text">Copyrights &#169; 2024</p>
        </div>
        <FooterIcons />
      </div>
    </footer>
  );
};
