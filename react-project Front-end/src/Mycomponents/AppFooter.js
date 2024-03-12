import React, { useState, useEffect, useRef } from 'react'
import './AppFooter.css'



const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const container = document.querySelector('.officenmbrs');

    const rr = document.createElement('div');
    rr.classList.add('addedcontent');
    rr.innerHTML = '<a href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a><a href="tel:+442072402042">+442072402042</a><a href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a>';

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial check on component mount
    checkWindowWidth();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    function checkWindowWidth() {
      if (windowWidth <= 768) {
        const q = container.querySelector('.addedcontent');
        if (!q) container.appendChild(rr);
      } else {
        const q = container.querySelector('.addedcontent');
        if (q) q.remove();
      }
    }
  }, [windowWidth]);

  const ref1 = useRef("")
  function handlingon() {
    ref1.current.style.color = "black"
    ref1.current.style.textDecoration = "underline"
  }

  function handlingoff() {
    ref1.current.style.color = "white"
    ref1.current.style.textDecoration = "none"

  }




  return (
    <>
      <footer className="ofooter">
        <div className="uofooter">
          <div className="imgpart">
            <img src={process.env.PUBLIC_URL + '/android-chrome-512x512.png'} alt="" />
            <p>sukoon</p>
          </div>
          <div className="quote"><i className="fa-solid fa-quote-left" style={{ marginRight: "5px" }}></i>Embark on unforgettable journeys with us, where every destination becomes a cherished chapter in your wanderlust story<i className="fa-solid fa-quote-right" style={{ marginLeft: "5px" }}></i></div>
        </div>


        <div className="lofooter">

          <div className="firstportion">
            <p className='connect' style={{ paddingBottom: "15px" }}>connect with us</p>
            <p><a href='https://www.facebook.com/login/' target='_blank' rel='noreferrer'><i className='bx bxl-facebook-circle'></i><b>Facebook</b></a></p>
            <p><a href='https://twitter.com/i/flow/login' target='_blank' rel='noreferrer'><i className='bx bxl-twitter' ></i><b>Twitter</b></a></p>
            <p><a href='https://www.instagram.com/login/' target='_blank' rel='noreferrer'><i className='bx bxl-instagram-alt' ></i><b>Instagram</b></a></p>
            <p><a href='https://www.linkedin.com/login/' target='_blank' rel='noreferrer'><i className='bx bxl-linkedin-square' ></i><b>Linkedin</b></a></p>
          </div>

          <div className="ourfirstlocation">
            <p id='officelocname' style={{ paddingBottom: "15px" }}><b>Our Locations:</b></p>
            <p id='officelocname'><b>Our head office:</b></p>
            <p>Muslim Town B-Block Block A Muslim Town, Faisalabad, Punjab 38000, Pakistan</p>
            <a ref={ref1} onMouseEnter={handlingon} onMouseLeave={handlingoff} style={{ textDecoration: "none", color: "white", }} href="tel:+92 41 8580382">+92 41 8580382</a>
            <div className="officenmbrs"></div>
            <p></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.404488079509!2d73.07847377547066!3d31.458057574242584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242713755fddf%3A0x88ed30d434a59f35!2sUmer%20St%2C%20Muslim%20Town%20B-Block%20Block%20A%20Muslim%20Town%2C%20Faisalabad%2C%20Punjab%2038000%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1706045807056!5m2!1sen!2sus" title='location' style={{ border: "0", width: "90%", marginTop: "6px", borderRadius: "5px" }} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <div className="oursecondlocation">
            <p id='officelocname'><b>Paris Office:</b></p>
            <p>292 Rue Saint-Martin, 75141 Paris, France</p>
            <a href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a>
            <p></p>
            <p id='officelocname'><b>London Office:</b></p>
            <p>1-5 West St,London WC2H 9NQ, United Kingdom</p>
            <a href="tel:+442072402042">+442072402042</a>
            <p id='officelocname'><b>Newyork Office:</b></p>
            <p>378 Park Ave S, New York, NY 10010</p>
            <a href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a>

          </div>



        </div>

        <div className="footerline"></div>
        <div>copyright &copy; 2024 sukoon.com </div>
      </footer>
    </>
  )
}

export default Footer
