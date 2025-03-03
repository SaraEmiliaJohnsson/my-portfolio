import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import './HeaderComponet.css';
import { useState } from "react";


const HeaderComponent = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link to="/">Sara Johnsson</Link>
        </h1>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburger />
        </div>
        <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
          <ul className="header-ul">
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/portfolio">{t("projects")}</Link></li>
            <li><Link to="/contact">{t("contact")}</Link></li>
          </ul>
          <button className="lang-btn" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "sv" : "en")}>
            {t("language")}
          </button>
        </nav>

      </header>
    </>
  )
}

export default HeaderComponent;