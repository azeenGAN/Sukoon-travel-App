import React, { useContext, useEffect, useState } from 'react'
import Carousel from './carousel'
import Destinationscards from './Destinationscard'
import { maindata } from '../App'

function Destinations() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect once on mount

  useEffect(() => {
    // Check window width and update class accordingly
    const container = document.querySelector('.wrapq');

    if (windowWidth <= 425) {
      container.classList.remove('row-cols-2');
      container.classList.add('row-cols-1');
    } else {
      container.classList.remove('row-cols-1');
      container.classList.add('row-cols-2');
    }
  }, [windowWidth]);

  const desData = useContext(maindata)




  return (
    <div>
      <Carousel />
      <div style={{ padding: "25px", backgroundColor: "#d4d4d4" }}>
        <div className="row row-cols-lg-4 row row-cols-md-3 row-cols-sm-2 row-cols-2 g-3 wrapq">

          <Destinationscards datashift={desData.Dubai} />
          <Destinationscards datashift={desData.Turkey} />
          <Destinationscards datashift={desData.France} />
          <Destinationscards datashift={desData.Skardu} />
          <Destinationscards datashift={desData.Germany} />
          <Destinationscards datashift={desData.Newyork} />
          <Destinationscards datashift={desData.Alaska} />
          <Destinationscards datashift={desData.Netherland} />
          <Destinationscards datashift={desData.London} />
        </div>

      </div>

    </div>


  )
}

export default Destinations
