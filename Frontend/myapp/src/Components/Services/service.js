import React from 'react'
import NavBar from '../NavBar/navbar';

const service = () => {
  return (

    <div>
      
     <NavBar/>  
       
       <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
    <h3 className="w3-center">OUR WORK</h3>
    <p className="w3-center w3-large">What we've done for people</p>
    <div className="w3-row-padding" style={{ marginTop: 64 }}>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_mic.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A microphone"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_phone.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A phone"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_drone.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A drone"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_sound.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="Soundbox"
        />
      </div>
    </div>
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_tablet.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A tablet"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_camera.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A camera"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_typewriter.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A typewriter"
        />
      </div>
      <div className="w3-col l3 m6">
        <img
          src="/w3images/tech_tableturner.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
          alt="A tableturner"
        />
      </div>
    </div>
  </div>
  {/* Modal for full size images on click*/}
  <div
    id="modal01"
    className="w3-modal w3-black"
    onclick="this.style.display='none'"
  >
    <span
      className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
      title="Close Modal Image"
    >
      ×
    </span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image" />
      <p id="caption" className="w3-opacity w3-large" />
    </div>
  </div>

    </div>
  )
}

export default service