import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Backup.css'

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
import project1 from './assets/images/project-1.png'
import project2 from './assets/images/project-2.png'
import project3 from './assets/images/project-3.png'

function App() {
  const [mainContent, setMainContent] = useState("apresentação")

  return (
    <>
      <main>
        {/* SIDEBAR */}
        <aside className="sidebar" data-sidebar>
          <div className="sidebar-info">
            <figure class="avatar-box">
              <img src={myAvatar} alt="Felipe Dieguez" width="80"></img>
            </figure>
            <div class="info-content">
              <h1 class="name" title="Felipe Dieguez">Felipe Dieguez</h1>
              <p class="title">Engenheiro Civil</p>
            </div>
            <button class="info_more-btn" data-sidebar-btn>
              <span>Mostrar Contatos</span>
              <ion-icon name="chevron-down"></ion-icon>
            </button>
          </div>
          <div class="sidebar-info_more">
            <div class="separator"></div>
            <ul class="contacts-list">
              <li class="contact-item">
                <div class="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div class="contact-info">
                  <p class="contact-title">Email</p>
                  <a href="mailto:felipedieguez2000@gmail.com" class="contact-link">felipedieguez2000@gmail.com</a>
                </div>
              </li>
              <li class="contact-item">
                <div class="icon-box">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <div class="contact-info">
                  <p class="contact-title">Celular</p>
                  <a href="tel:43998088815" class="contact-link">(43) 99808-8815</a>
                </div>
              </li>
              <li class="contact-item">
                <div class="icon-box">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
                <div class="contact-info">
                  <p class="contact-title">Aniversário</p>
                  <time datetime="2000-11-06">6 de Novembro de 2000</time>
                </div>
              </li>
              <li class="contact-item">
                <div class="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div class="contact-info">
                  <p class="contact-title">Localização</p>
                  <address>Penha, SC /</address>
                  <address>Londrina, PR</address>
                </div>
              </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
              <li class="social-item">
                <a href="https://www.linkedin.com/in/felipe-dieguez-378473212/" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li class="social-item">
                <a href="https://www.instagram.com/felipedieguezz/" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li class="social-item">
                <a href="https://github.com/FelipeDieguez" class="social-link">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* MAIN-CONTENT */}
        <div className="main-content">
          {/* NAVBAR */}
          <nav class="navbar">
            <ul class="navbar-list">
              <li class="navbar-item">
                <button class="navbar-link  active" data-nav-link>Apresentação</button>
              </li>
              <li class="navbar-item">
                <button class="navbar-link" data-nav-link>Biografia</button>
              </li>
              <li class="navbar-item">
                <button class="navbar-link" data-nav-link>Portfólio</button>
              </li>
            </ul>
          </nav>
          {/* ABOUT */}
          <article class="apresentação  active" data-page="apresentação">
            <header>
              <h2 class="h2 article-title">Apresentação</h2>
            </header>
            <section class="about-text">
              <p>
                Engenheiro Civil formado pela Universidade Estadual de Londrina em 2023
              </p>
              <p>
                Atualmente trabalho na FX, uma empresa de projetos estruturais onde estou envolvido em diversas tarefas relacionadas ao desenvolvimento de projetos utilizando Autocad, Revit, SAP2000 e TQS.
              </p>
              <p>
                No tempo livre estudo diferentes linguagens de programação como Python e Javascript, utilizo esse conhecimento para automatizar algumas etapas repetitivas que me deparo na rotina de trabalho, além disso desenvolvo aplicações web voltadas para a Engenharia Civil
              </p>
              <p>As aplicações podem ser acessadas no site: </p>
              <a href="https://engenhars.com.br" class="link">engenhars.com.br</a>
            </section>
            {/* SERVICE */}
            <section class="service">
              <h3 class="h3 service-title">Responsabilidades</h3>
              <ul class="service-list">
                <li class="service-item">
                  <div class="service-icon-box">
                    <img src={iconDesign} alt="design icon" width="40"></img>
                  </div>
                  <div class="service-content-box">
                    <h4 class="h4 service-item-title">Projetista Estrutural</h4>
                    <p class="service-item-text">
                      Concepção, cálculo e detalhamento de diversos tipos de estruturas.
                    </p>
                  </div>
                </li>
                <li class="service-item">
                  <div class="service-icon-box">
                    <img src={iconDev} alt="Web development icon" width="40"></img>
                  </div>
                  <div class="service-content-box">
                    <h4 class="h4 service-item-title">Desenvolvimento Web</h4>
                    <p class="service-item-text">
                      Desenvolvimento de softwares voltados ao setor de construção civil.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            {/* CLIENTS */}
            <section class="clients">
              <h3 class="h3 clients-title">Ferramentas (Projetista Estrutural)</h3>
              <ul class="clients-list has-scrollbar">
                <li class="clients-item">
                  <img src={designTool1} alt="client logo"></img>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={designTool2} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={designTool3} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={designTool4} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={designTool5} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={designTool6} alt="client logo"></img>
                  </a>
                </li>
              </ul>
            </section>
            <section class="clients">
              <h3 class="h3 clients-title">Ferramentas (Desenvolvimento Web)</h3>
              <ul class="clients-list has-scrollbar">
                <li class="clients-item">
                  <img src={devTool1} alt="client logo"></img>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool2} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool3} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool4} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool5} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool6} alt="client logo"></img>
                  </a>
                </li>
                <li class="clients-item">
                  <a href="#">
                    <img src={devTool7} alt="client logo"></img>
                  </a>
                </li>
              </ul>
            </section>
          </article>
          {/* RESUME */}
          <article class="biografia" data-page="biografia">
            <header>
              <h2 class="h2 article-title">Biografia</h2>
            </header>
            <section class="timeline">
              <div class="title-wrapper">
                <div class="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>
                <h3 class="h3">Formação Acadêmica</h3>
              </div>
              <ol class="timeline-list">
                <li class="timeline-item">
                  <h4 class="h4 timeline-item-title">Universidade Estadual de Londrina</h4>
                  <span>2018 - 2023</span>
                  <p class="timeline-text">
                    Participação em projetos de pesquisa, empresa júnior e centro acadêmico.
                  </p>
                </li>
              </ol>
            </section>
            <section class="timeline">
              <div class="title-wrapper">
                <div class="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>
                <h3 class="h3">Experiências Profissionais</h3>
              </div>
              <ol class="timeline-list">
                <li class="timeline-item">
                  <h4 class="h4 timeline-item-title">Estagiário</h4>
                  <span>2021 — 2023</span>
                  <p class="timeline-text">
                    FX Projetos de Engenharia
                  </p>
                </li>
                <li class="timeline-item">
                  <h4 class="h4 timeline-item-title">Engenheiro Projetista</h4>
                  <span>2023 - até hoje</span>
                  <p class="timeline-text">
                    FX Projetos de Engenharia
                  </p>
                </li>
              </ol>
            </section>
            {/* <section class="skill">

              <h3 class="h3 skills-title">My skills</h3>

              <ul class="skills-list content-card">

                <li class="skills-item">

                  <div class="title-wrapper">
                    <h5 class="h5">Web design</h5>
                    <data value="80">80%</data>
                  </div>

                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 80%;"></div>
                  </div>

                </li>

                <li class="skills-item">

                  <div class="title-wrapper">
                    <h5 class="h5">Graphic design</h5>
                    <data value="70">70%</data>
                  </div>

                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 70%;"></div>
                  </div>

                </li>

                <li class="skills-item">

                  <div class="title-wrapper">
                    <h5 class="h5">Branding</h5>
                    <data value="90">90%</data>
                  </div>

                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 90%;"></div>
                  </div>

                </li>

                <li class="skills-item">

                  <div class="title-wrapper">
                    <h5 class="h5">WordPress</h5>
                    <data value="50">50%</data>
                  </div>

                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 50%;"></div>
                  </div>

                </li>

              </ul>

            </section> */}
          </article>
          {/* PORTFOLIO */}
          <article class="portfólio" data-page="portfólio">
            <header>
              <h2 class="h2 article-title">Portfólio</h2>
            </header>
            <section class="projects">
              <ul class="filter-list">
                <li class="filter-item">
                  <button class="active" data-filter-btn>Todos</button>
                </li>
                <li class="filter-item">
                  <button data-filter-btn>Projetista Estrutural</button>
                </li>
                <li class="filter-item">
                  <button data-filter-btn>Desenvolvimento Web</button>
                </li>
              </ul>
              <div class="filter-select-box">
                <button class="filter-select" data-select>
                  <div class="select-value" data-selecct-value>Selecionar categoria</div>
                  <div class="select-icon">
                    <ion-icon name="chevron-down"></ion-icon>
                  </div>
                </button>
                <ul class="select-list">
                  <li class="select-item">
                    <button data-select-item>Todos</button>
                  </li>
                  <li class="select-item">
                    <button data-select-item>Projetista Estrutural</button>
                  </li>
                  <li class="select-item">
                    <button data-select-item>Desenvolvimento Web</button>
                  </li>
                </ul>
              </div>
              <ul class="project-list">
                <li class="project-item  active" data-filter-item data-category="projetista estrutural">
                  <a href="#">
                    <figure class="project-img">
                      <div class="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img src={project1} alt="rotinas" loading="lazy"></img>
                    </figure>
                    <h3 class="project-title">Rotinas Dynamo</h3>
                    <p class="project-category">Projetista Estrutural</p>
                  </a>
                </li>
                <li class="project-item  active" data-filter-item data-category="desenvolvimento web">
                  <a href="https://engenhars.com.br">
                    <figure class="project-img">
                      <div class="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img src={project2} alt="quantitars" loading="lazy"></img>
                    </figure>
                    <h3 class="project-title">QuantitArs</h3>
                    <p class="project-category">Desenvolvimento Web</p>
                  </a>
                </li>
                <li class="project-item  active" data-filter-item data-category="desenvolvimento web">
                  <a href="https://engenhars.com.br">
                    <figure class="project-img">
                      <div class="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img src={project3} alt="fundars" loading="lazy"></img>
                    </figure>
                    <h3 class="project-title">FundArs</h3>
                    <p class="project-category">Desenvolvimento Web</p>
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}

export default App
