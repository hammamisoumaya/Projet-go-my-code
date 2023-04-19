import React from 'react'
import NavBar from '../NavBar/navbar';

const agence = () => {
  return (
    
    <div>
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
      <div className="w3-container" style={{ padding: "128px 16px" }} id="team">
    <h1 className="w3-center">Nos offre d'emploi</h1>
    <p className="w3-center w3-large">Nous sommes une société de développement web à la pointe de la technologie, spécialisée dans la création de sites web et d'applications web pour une clientèle diversifiée. Nous recherchons actuellement plusieurs profils talentueux et passionné pour rejoindre notre équipe dynamique.</p>
    <div className="w3-row-padding w3-grayscale" style={{ marginTop: 64 }}>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card">
          <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Développeurs Web</h3>
            <p className="w3-opacity">Les développeurs web sont responsables de la conception, du développement et de la maintenance des sites web et des applications web. Ils utilisent des langages de programmation tels que JavaScript, HTML, CSS, PHP, Python, etc., ainsi que des frameworks et des outils de développement pour créer des solutions web fonctionnelles et conviviales.</p>
            
            <p>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-envelope" /> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card">
          <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Concepteurs Web </h3>
            
            <p>
            Les concepteurs web sont chargés de la création des interfaces utilisateur attractives et ergonomiques pour les sites web et les applications web. Ils utilisent des outils de conception tels que Adobe Photoshop, Sketch, ou Figma pour créer des maquettes de conception, des prototypes interactifs et des éléments graphiques 
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-envelope" /> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card">
          <img src="/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Gestionnaires de projet</h3>
            
            <p>
            Les gestionnaires de projet sont responsables de la planification, de l'organisation et de la coordination de l'ensemble du processus de développement web. Ils veillent à ce que les projets soient livrés dans les délais, respectent les budgets et répondent aux exigences des clients. Ils peuvent également assurer la communication avec les clients et coordonner les efforts de l'équipe de développement.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-envelope" /> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card">
          <img src="/w3images/team4.jpg" alt="Dan" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Testeurs/QA</h3>
            
            <p>
            Les testeurs ou spécialistes de l'assurance qualité sont chargés de tester les sites web et les applications web pour s'assurer qu'ils fonctionnent correctement, sont exempts de bugs et répondent aux normes de qualité établies. Ils effectuent des tests fonctionnels, de compatibilité, de performance et de sécurité pour garantir que les produits développés sont fiables et de haute qualité.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-envelope" /> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  
    </div>
  )
}

export default agence