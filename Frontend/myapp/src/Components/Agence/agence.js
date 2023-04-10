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
    <h3 className="w3-center">THE TEAM</h3>
    <p className="w3-center w3-large">The ones who runs this company</p>
    <div className="w3-row-padding w3-grayscale" style={{ marginTop: 64 }}>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card">
          <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
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
          <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Anja Doe</h3>
            <p className="w3-opacity">Art Director</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
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
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Web Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
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
            <h3>Dan Star</h3>
            <p className="w3-opacity">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
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
  
    </div>
  )
}

export default agence