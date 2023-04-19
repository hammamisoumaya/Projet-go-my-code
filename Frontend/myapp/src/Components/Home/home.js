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
  {/*header */}
<header>
<div className="overlay">

<h1>Quete Technologie</h1>
	<p>Une agence Web Tunisie pour améliorer la présence digitale de votre marque et augmenter le trafic de votre site Web avec des solutions complètes de Webdesign, conseil et communication digitale pour les besoins uniques de votre entreprise.</p>

		</div>
    </header>
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
    <h3 className="w3-center">Une agence Web innovatrice</h3>
    
    <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
      <div className="w3-quarter">
        <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
        <p className="w3-large">Responsive</p>
        <p>
        En tant qu'agence digitale renommée, nous offrons un service personnalisé pour aider les entreprises à établir une présence en ligne solide. C'est pourquoi nous nous sommes présentés sous forme d'un clip hip hop pour transmettre notre message de manière originale et engageante.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Passion</p>
        <p>
        Le hip hop, qui célèbre la créativité, l'individualité et la détermination, reflète parfaitement notre esprit déterminé et créatif
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Design</p>
        <p>
        Avec notre expertise en conception de sites web, développement d'applications mobiles et e-commerce, ainsi que notre expérience en référencement web et stratégies de marketing digital, nous pouvons vous aider à vous démarquer de vos concurrents.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Support</p>
        <p>
        Notre objectif est de créer des sites web à la fois fonctionnels et esthétiques, tout comme le hip hop peut être à la fois énergique et artistique. Nous voulons que nos sites web soient amusants et faciles à utiliser, tout comme notre clip hip hop est amusant et donne envie de danser.
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
        Les utilisateurs peuvent naviguer à travers les différentes pages d'un site web en cliquant sur des liens hypertextes, en utilisant des menus de navigation, ou en effectuant des recherches internes sur le site
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
          src="https://www.wmagence.com/upload/service-informatique-1637129003-43195-0.jpg"
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
        <h3>Nos services</h3>
        <p>
        Nox experts pluridisciplinaires travaillent en équipe pour obtenir le meilleur résultat pour votre marque, grâce à la recherche et à la connaissance, nous priorisons vos objectifs et nous les transformons en nôtres.
          <br />
          tempor incididunt ut labore et dolore.
        </p>
        
      </div>
      <div className="w3-col m6">
        <p className="w3-wide">
          <i className="fa fa-camera w3-margin-right" />
          Création de site web vitrine
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
          Création de boutique en ligne
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
          Création de site catalogues
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





{/*cards partie */}
<div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Création de site Web
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
        Maintenance et mise à jour
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
        Stratégie Social Média
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
        <div className="ag-courses-item_title">Hébergement Web</div>
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
          
Référencement naturel
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
        <div className="ag-courses-item_title">Ergonomie et design</div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">31.10.2022</span>
        </div>
      </a>
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