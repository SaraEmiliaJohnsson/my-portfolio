import "./HomeComponent.css";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomeComponent = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <Trans i18nKey="hero_title">
              Hi, I'm <span className="highlight">Sara Johnsson</span>
            </Trans>
          </h1>
          <p className="hero-subtitle">{t("hero_subtitle")}</p>
          <p className="hero-text">{t("hero_text")}</p>
          <Link to="/portfolio" className="hero-button">
            {t("hero_button")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
