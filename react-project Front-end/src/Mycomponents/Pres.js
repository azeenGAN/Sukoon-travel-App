import React, {useState, useEffect } from 'react';
import Reveal from 'reveal.js';
import '/node_modules/reveal.js/dist/reveal.css';
import '/node_modules/reveal.js/dist/theme/dracula.css'



export default function Pres() {
  useEffect(() => {
    try {
      let deck = new Reveal({});
      deck.initialize({ embedded: true, autoPlayMedia: true });

    } catch (error) {
      console.error("Error initializing Reveal:", error.message);
    }
  }, []);

  
    const [videoError, setVideoError] = useState(false);
  
    const handleVideoError = () => {
      setVideoError(true);
    };





  return (<>
    <div className="reveal" style={{ height: "400px" }}>
      <div className="slides">
        <section style={{ height: "400px" }} ><h2 className="r-fit-text">Sukoon</h2>
          <h2 className="r-fit-text">We are here to serve</h2></section>
        <section>
          <section ><p >sukoon makes no guarantees for prices advertised on our site and application.</p><a href="#reveal">
            <img className="r-frame " src={process.env.PUBLIC_URL + '/android-chrome-512x512.png'} style={{ borderRadius: "50px" }} width="250" alt='sukoon' />
          </a><p><a style={{textDecoration:"underline"}} href="https://www.siteminder.com/r/hotel-fees/">Guide to hotel fees and surcharges for hotels</a></p></section>

          <section ><h2 style={{ color: "#34E0A1" }}>Book with us</h2>
          {!videoError && (
        <video
          style={{ borderRadius: '10px' }}
          muted
          controls
          onError={handleVideoError}
          src="/Travel-video.mp4"
        ></video>  )}
            <p style={{ margin: "10px", color: "#ffaedc", fontFamily: "impact" }} className="fragment fade-up">Fill the form and receive mail from us!!</p>
          </section>
        </section>
        <section data-auto-animate data-auto-animate-id="two"><p style={{ fontStyle: "oblique", color: "#BD93F9" }}>At Tripadvisor, we want to ensure our platform works for all travelers, that's why we are committed to making our website and app accessible to everyone. We are in a constant pursuit of integrating accessibility into the core of everything we design and build.</p></section>
        <section data-auto-animate data-auto-animate-id="two"><p style={{ fontStyle: "oblique", color: "#10B981" }}>At Tripadvisor, we want to ensure our platform works for all travelers, that's why we are committed to making our website and app accessible to everyone. We are in a constant pursuit of integrating accessibility into the core of everything we design and build.</p>
          <h3>sukoon212@gmail.com</h3></section>

      </div>
    </div>

  </>)
}
