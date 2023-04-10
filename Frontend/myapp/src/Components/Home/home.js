import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/navbar';

const home = () => {
  return (
    <div>
   <>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}\n\nbody, html {\n  height: 100%;\n  line-height: 1.8;\n}\n\n/* Full height image header */\n.bgimg-1 {\n  background-position: center;\n  background-size: cover;\n  background-image: url("/w3images/mac.jpg");\n  min-height: 100%;\n}\n\n.w3-bar .w3-button {\n  padding: 16px;\n}\n'
    }}
  />
  <NavBar/>
  {/* Header with full-height image */}
  <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
    <div className="w3-display-left w3-text-white" style={{ padding: 48 }}>
      <span className="w3-jumbo w3-hide-small">
        Start something that matters
      </span>
      <br />
      <span className="w3-xxlarge w3-hide-large w3-hide-medium">
        Start something that matters
      </span>
      <br />
      <span className="w3-large">
        Stop wasting valuable time with projects that just isn't you.
      </span>
      <p>
        <a
          href="#about"
          className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
        >
          Learn more and start today
        </a>
      </p>
    </div>
    <div
      className="w3-display-bottomleft w3-text-grey w3-large"
      style={{ padding: "24px 48px" }}
    >
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
  </header>
  {/* About Section */}
  <div className="w3-container" style={{ padding: "128px 16px" }} id="about">
    <h3 className="w3-center">ABOUT THE COMPANY</h3>
    <p className="w3-center w3-large">Key features of our company</p>
    <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
      <div className="w3-quarter">
        <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
        <p className="w3-large">Responsive</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Passion</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Design</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Support</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </div>
  </div>
  {/* Promo Section - "We know design" */}
  <div className="w3-container w3-light-grey" style={{ padding: "128px 16px" }}>
    <div className="w3-row-padding">
      <div className="w3-col m6">
        <h3>We know design.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore.
        </p>
        <p>
          <a href="#work" className="w3-button w3-black">
            <i className="fa fa-th">&nbsp;</i> View Our Works
          </a>
        </p>
      </div>
      <div className="w3-col m6">
        <img
          className="w3-image w3-round-large"
          src="/w3images/phone_buildings.jpg"
          alt="Buildings"
          width={700}
          height={394}
        />
      </div>
    </div>
  </div>
  
 
  {/* Promo Section "Statistics" */}
  <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
    <div className="w3-quarter">
      <span className="w3-xxlarge">14+</span>
      <br />
      Partners
    </div>
    <div className="w3-quarter">
      <span className="w3-xxlarge">55+</span>
      <br />
      Projects Done
    </div>
    <div className="w3-quarter">
      <span className="w3-xxlarge">89+</span>
      <br />
      Happy Clients
    </div>
    <div className="w3-quarter">
      <span className="w3-xxlarge">150+</span>
      <br />
      Meetings
    </div>
  </div>
  
 
  {/* Skills Section */}
  <div className="w3-container w3-light-grey w3-padding-64">
    <div className="w3-row-padding">
      <div className="w3-col m6">
        <h3>Our Skills.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-col m6">
        <p className="w3-wide">
          <i className="fa fa-camera w3-margin-right" />
          Photography
        </p>
        <div className="w3-grey">
          <div
            className="w3-container w3-dark-grey w3-center"
            style={{ width: "90%" }}
          >
            90%
          </div>
        </div>
        <p className="w3-wide">
          <i className="fa fa-desktop w3-margin-right" />
          Web Design
        </p>
        <div className="w3-grey">
          <div
            className="w3-container w3-dark-grey w3-center"
            style={{ width: "85%" }}
          >
            85%
          </div>
        </div>
        <p className="w3-wide">
          <i className="fa fa-photo w3-margin-right" />
          Photoshop
        </p>
        <div className="w3-grey">
          <div
            className="w3-container w3-dark-grey w3-center"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
      </div>
    </div>
  </div>
{/*header */}
<header>
<div className="overlay">
<h1>Simply The Best</h1>
<h3>Reasons for Choosing US</h3>
<h1>Quete Technologie</h1>
	

		</div>
    </header>




{/*cards partie */}
<div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&nbsp;years old
        </div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">04.11.2022</span>
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          UX/UI Web-Design&nbsp;+ Mobile Design
        </div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">04.11.2022</span>
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Annual package "Product+UX/UI+Graph designer&nbsp;2022"
        </div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">04.11.2022</span>
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Graphic Design</div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">04.11.2022</span>
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Motion Design</div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">30.11.2022</span>
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Front-end development&nbsp;+ jQuery&nbsp;+ CMS
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>
        <div className="ag-courses-item_title">Digital Marketing</div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Interior Design</div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">31.10.2022</span>
        </div>
      </a>
    </div>
  </div>
</div>











  {/* Pricing Section */}
  <div
    className="w3-container w3-center w3-dark-grey"
    style={{ padding: "128px 16px" }}
    id="pricing"
  >
    <h3>Nos services</h3>
    <p className="w3-large">Notre société de développement de sites web propose des services pour la conception, le développement et la maintenance de sites web pour les entreprises et les organisations.</p>
    <div className="w3-row-padding" style={{ marginTop: 64 }}>
      <div className="w3-third w3-section">
        <ul className="w3-ul w3-white w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Création de site web vitrine</li>
          <li className="w3-padding-16">
          </li>
          <li className="w3-padding-16">
          Avec les progrès et l'expansion d'Internet, tout le monde est connecté. Et, bien que les réseaux sociaux soient très utiles pour votre entreprise, avoir un site vitrine offre beaucoup plus de crédibilité et d'autorité à votre entreprise. Car ce type de site Web constitue un moyen efficace et utile de mettre en valeur vos services, faire connaître votre entreprise et développer votre activité par l’acquisition de nouveaux prospects.

Notre agence de création de site internet est spécialisée en conception de site vitrine axée sur l'augmentation des conversions et des contacts clients, afin de faire ressortir votre marque sur le Web avec une apparence professionnelle et de qualité. Et nous développons votre site web vitrine selon les nouvelles technologies Web, en privilégiant une excellente expérience entre l'entreprise et le client, à travers des pages avec une structure bien conçue et optimisée pour Google. Répondez aux besoins des clients, augmentez les ventes et maximisez votre retour sur investissement avec un site vitrine.
          </li>
          </ul>
          </div>
      <div className="w3-third">
        <ul className="w3-ul w3-white w3-hover-shadow">
          <li className="w3-red w3-xlarge w3-padding-48">Maintenance et mise à jour</li>
          <li className="w3-padding-16">
          Un site Web doit être bien structuré, interactif et toujours mis à jour, tant sur le plan fonctionnel que visuel. Il ne s’agit plus seulement d’avoir un site Web pour afficher des informations sur l’entreprise, de nos jours, créer un site Web avec un contenu pertinent qui convertit plus de prospects (clients potentiels) vers votre entreprise est essentiel à son succès, alors n’hésitez pas quand il s’agit d’embaucher les services de mise à jour et de maintenance de Novatis.

Après un certain temps, il est nécessaire de reformuler la mise en page. Depuis de petits changements (modernisation) de la mise en page, comme une refonte totale. Nous avons toujours des modalités spéciales pour ce type de travail pour nos clients.


          </li>
           
        </ul>
      </div>
      <div className="w3-third w3-section">
        <ul className="w3-ul w3-white w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Réferencement SEO</li>
          <li className="w3-padding-16">
          L'optimisation pour les moteurs de recherche (SEO) ou référencement naturel consiste en de nombreuses méthodes et stratégies ayant pour objectif d'augmenter la présence et la visibilité de votre site web dans les moteurs de recherche, tels que Google, Bing et Yahoo.
          </li>
        </ul>
      </div>
    </div>
  </div>







  
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-64">
    <a href="#home" className="w3-button w3-light-grey">
      <i className="fa fa-arrow-up w3-margin-right" />
      To the top
    </a>
    <div className="w3-xlarge w3-section">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
    <p>
      Powered by Hammami Soumaya
      <a
        href="https://www.w3schools.com/w3css/default.asp"
       
        target="_blank"
        className="w3-hover-text-green"
      >
        
      </a>
    </p>
  </footer>
</>

    </div>
  )
}

export default home