import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

function Navbar(props) {

  let navigate = useNavigate();
  let navgate = () => {
    props.handleNavigate('contact')
    navigate('about');
  }
  let navgate2 = async () => {
    props.handleNavigate('')
    navigate('about');
  }

  // const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [z, setZ] = useState(true);

  const handleToggleClick = () => {


    if (z) {
      applyNavbarStyles('#696969', 'black');
    } else {
      setTimeout(() => {
        applyNavbarStyles('', '');
      }, 300);
    }

    setZ(!z);
    setIsNavbarExpanded((prevExpanded) => !prevExpanded);
    console.log(z);
    console.log('EXPANDED', isNavbarExpanded);
  };

  const applyNavbarStyles = (backgroundColor, textColor) => {
    const navbar = document.querySelector('.navbar');
    const elem = document.querySelectorAll('.nav-link');
    const elem1 = document.querySelector('.navbar-brand');

    navbar.style.backgroundColor = backgroundColor;
    elem.forEach((links) => {
      links.style.color = textColor;
    });
    elem1.style.color = textColor;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        applyNavbarStyles('#696969', 'black');
      } else if (!isNavbarExpanded) {
        applyNavbarStyles('', '');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarExpanded]);




  return (
    <>


      <nav className='navbar navbar-expand-lg fixed-top' >
        <div className="container">
          <Link className="navbar-brand" to="/">sukoon</Link>
          <button onClick={handleToggleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <div className="nav-link contactlink" onClick={navgate2}>About</div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="faqs">FAQs</Link>
              </li>
              <li className="nav-item">
                <div onClick={navgate} className="nav-link contactlink">Contacts</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
};
export default Navbar
