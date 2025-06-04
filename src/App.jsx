import { useEffect, useState } from 'react'
import styles from "./App.module.css"
import { useTranslation } from 'react-i18next'

import LanguageButton from './components/LanguageButton'
import ColorModeButton from './components/ColorModeButton'
import ProjectsMap from './components/ProjectsMap'

import myAvatar from './assets/images/my-avatar.png'
import iconDesign from './assets/images/icon-design.svg'
import iconDev from './assets/images/icon-dev.svg'
import designTool1 from './assets/images/ferramenta-1-projetista.png'
import designTool2 from './assets/images/ferramenta-2-projetista.png'
import designTool3 from './assets/images/ferramenta-3-projetista.png'
import designTool4 from './assets/images/ferramenta-4-projetista.png'
import designTool5 from './assets/images/ferramenta-5-projetista.png'
import designTool6 from './assets/images/ferramenta-6-projetista.png'
import devTool1 from './assets/images/ferramenta-1-desenvolvedor.png'
import devTool2 from './assets/images/ferramenta-2-desenvolvedor.png'
import devTool3 from './assets/images/ferramenta-3-desenvolvedor.png'
import devTool4 from './assets/images/ferramenta-4-desenvolvedor.png'
import devTool5 from './assets/images/ferramenta-5-desenvolvedor.png'
import devTool6 from './assets/images/ferramenta-6-desenvolvedor.png'
import devTool7 from './assets/images/ferramenta-7-desenvolvedor.png'
import projectsData from './assets/map/portfolio.json'

function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation()
  const [content, setContent] = useState('about')

  let concreteCount = 0;
  let steelCount = 0;
  let MasonryCount = 0;
  let areaCount = 0;
  let cities = new Set();

  projectsData["projects"].forEach(project => {
    const categories = project["categories"]

    if (categories.includes("Concreto Armado")) concreteCount++;
    if (categories.includes("Estrutura Metálica")) steelCount++;
    if (categories.includes("Alvenaria Estrutural")) MasonryCount++;

    areaCount += project.area;
    cities.add(project.city);
  });

  useEffect(() => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <LanguageButton
          t={t}
          changeLanguage={changeLanguage}
        />
        <ColorModeButton
          t={t}
        />
      </div>
      <div className={styles.section}>
        {/* SIDEBAR */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <figure className={styles.avatarBox}>
              <img src={myAvatar} alt='Felipe Dieguez'></img>
            </figure>
            <div className={styles.sidebarHeaderInfo}>
              <h1 title='Felipe Dieguez'>{t('name')}</h1>
              <p>{t('occupation')}</p>
            </div>
          </div>
          <div className={styles.separator}></div>
          <ul className={styles.sidebarSection}>
              <li className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className={styles.contactInfo}>
                  <p>{t('header-mail')}</p>
                  <a>{t('mail')}</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <div className={styles.contactInfo}>
                  <p>{t('header-phone')}</p>
                  <a>{t('phone')}</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
                <div className={styles.contactInfo}>
                  <p>{t('header-age')}</p>
                  <a>{t('age')}</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconBox}>
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className={styles.contactInfo}>
                  <p>{t('header-locate')}</p>
                  <a>{t('locate')}</a>
                </div>
              </li>
          </ul>
          <div className={styles.separator}></div>
          <ul className={styles.sidebarFooter}>
            <li className={styles.socialItem}>
              <a href="https://www.linkedin.com/in/felipe-dieguez-378473212/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="https://www.instagram.com/felipedieguezz/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li className={styles.socialItem}>
              <a href="https://github.com/FelipeDieguez">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        {/* MAIN-CONTENT */}
        <div className={styles.content}>
            {/* NAVBAR */}
            <ul className={styles.contentNavbar}>
              <li className={styles.navbarItem}>
                <button className={content === "about" ? styles.navbarButtonSelected : styles.navbarButton} onClick={() => setContent("about")}>{t("navbar-about")}</button>
              </li>
              <li className={styles.navbarItem}>
                <button className={content === "biography" ? styles.navbarButtonSelected : styles.navbarButton} onClick={() => setContent("biography")}>{t("navbar-biography")}</button>
              </li>
              <li className={styles.navbarItem}>
                <button className={content === "portfolio" ? styles.navbarButtonSelected : styles.navbarButton} onClick={() => setContent("portfolio")}>{t("navbar-portfolio")}</button>
              </li>
            </ul>
            {/* ABOUT */}
            {content === "about" && (
              <div className={styles.about}>
                <div>
                  <h1 className={styles.title1}>{t("about-header")}</h1>
                </div>
                <div>
                  <p>
                    {t("about-text-1")}
                  </p>
                  <p>
                    {t("about-text-2")}
                  </p>
                  <p>
                    {t("about-text-3")}
                  </p>
                  <p>{t("about-text-4")}</p>
                  <a href="https://engenhars.com.br">engenhars.com.br</a>
                </div>
                {/* RESPONSABILITIES */}
                <div>
                  <h2 className={styles.title2}>{t("about-responsabilities")}</h2>
                  <ul className={styles.responsabilities}>
                    <li className={styles.responsabilityItem}>
                      <img className={styles.responsabilityIcon} src={iconDesign}></img>
                      <div>
                        <h3 className={styles.title3}>{t("about-responsability-1-header")}</h3>
                        <p>
                          {t("about-responsability-1-text")}
                        </p>
                      </div>
                    </li>
                    <li className={styles.responsabilityItem}>
                        <img src={iconDev} alt="Web development icon" width="40"></img>
                      <div>
                        <h3 className={styles.title3}>{t("about-responsability-2-header")}</h3>
                        <p>
                          {t("about-responsability-2-text")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* TOOLS */}
                <div>
                  <h2 className={styles.title2}>{t("about-tool-1")}</h2>
                  <ul className={styles.tools}>
                    <li className={styles.toolItem}>
                      <img src={designTool1} alt="client logo"></img>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={designTool2} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={designTool3} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={designTool4} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={designTool5} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={designTool6} alt="client logo"></img>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className={styles.title2}>{t("about-tool-2")}</h2>
                  <ul className={styles.tools}>
                    <li className={styles.toolItem}>
                      <img src={devTool1} alt="client logo"></img>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool2} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool3} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool4} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool5} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool6} alt="client logo"></img>
                      </a>
                    </li>
                    <li className={styles.toolItem}>
                      <a href="#">
                        <img src={devTool7} alt="client logo"></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* BIOGRAPHY */}
            {content === "biography" && (
              <div className={styles.biography}>
                <header>
                  <h1 className={styles.title1}>{t("biography-header")}</h1>
                </header>
                <div>
                  <div className={styles.biographyTitle}>
                    <div className={styles.contactIconBox}>
                      <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h2 className={styles.title2}>{t("biography-1")}</h2>
                  </div>
                  <ol className={styles.biographyList}>
                    <li className={styles.biographyItem}>
                      <h3 className={styles.title3}>{t("biography-1-header")}</h3>
                      <span>{t("biography-1-year")}</span>
                      <p>
                        {t("biography-1-text")}
                      </p>
                    </li>
                  </ol>
                </div>
                <div>
                  <div className={styles.biographyTitle}>
                    <div className={styles.contactIconBox}>
                      <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h2 className={styles.title2}>{t("biography-2")}</h2>
                  </div>
                  <ol className={styles.biographyList}>
                    <li className={styles.biographyItem}>
                      <h3 className={styles.title3}>{t("biography-2-header-1")}</h3>
                      <span>{t("biography-2-year-1")}</span>
                      <p>
                        {t("biography-2-text-1")}
                      </p>
                    </li>
                    <li className={styles.biographyItem}>
                      <h3 className={styles.title3}>{t("biography-2-header-2")}</h3>
                      <span>{t("biography-2-year-2")}</span>
                      <p>
                        {t("biography-2-text-2-1")}
                      </p>
                      <p>
                        {t("biography-2-text-2-2")}
                      </p>
                      <p>
                        {t("biography-2-text-2-3")}
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            )}
            {/* PORTFOLIO */}
            {content === "portfolio" && (
              <div className={styles.portfolio}>
                <div className={styles.portfolioRow}>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle}>{t("portfolio-title-1")}</h1>
                    <h1 className={styles.portfolioText}>{projectsData["projects"].length}</h1>
                  </div>
                </div>
                <div className={styles.portfolioRow}>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle} margin="0px">{t("portfolio-title-2")}</h1>
                    <h1 className={styles.portfolioText}>{concreteCount}</h1>
                  </div>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle}>{t("portfolio-title-3")}</h1>
                    <h1 className={styles.portfolioText}>{steelCount}</h1>
                  </div>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle}>{t("portfolio-title-4")}</h1>
                    <h1 className={styles.portfolioText}>{MasonryCount}</h1>
                  </div>
                </div>
                <div className={styles.portfolioRow}>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle}>{t("portfolio-title-5")}</h1>
                    <h1 className={styles.portfolioText}>{cities.size}</h1>
                  </div>
                  <div className={styles.portfolioItem}>
                    <h1 className={styles.portfolioTitle}>{t("portfolio-title-6")}</h1>
                    <h1 className={styles.portfolioText}>{areaCount.toFixed(2)} m²</h1>
                  </div>
                </div>
                <div className={styles.portfolioMap}>
                  {language === 'pt' && (
                    <iframe
                      src='./src/assets/map/projects-pt.html'
                      style={{width: '100%',height: '100%', border: 'none' }}
                      title="Mapa de Projetos"
                    />
                  )}
                  {language === 'en' && (
                    <iframe
                      src='./src/assets/map/projects-en.html'
                      style={{width: '100%', height: '100%', border: 'none' }}
                      title="Mapa de Projetos"
                    />
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App
