import React, { useContext, useState, useEffect } from 'react'
import Carousel from './carousel'
import Destinationscards from './Destinationscard'
import { maindata } from '../App'
import './Body1.css'

export const Body1 = (props) => {

  const desData = useContext(maindata)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    function count_anim_function(nmbr) {


      let target_count = +nmbr.dataset.count
      let init_count = +nmbr.innerText
      let speed = Math.floor(target_count / 20)

      function updateNumber() {
        init_count += speed
        nmbr.innerText = init_count
        if (init_count < target_count) {
          setTimeout(() => { updateNumber() }, 50)
        }
      }
      updateNumber()
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          count_anim_function(entry.target); // Pass entry.target to countinganim
          observer.unobserve(entry.target); // Stop observing once it's triggered
        }
      });
    });




    const myNum = document.querySelectorAll('.countanim');
    myNum.forEach((nmbr1) => {
      observer.observe(nmbr1);
    });


    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };






  }, []); // Empty dependency array to run the effect once on mount

  useEffect(() => {
    // Check window width and update class accordingly
    const container = document.querySelector('.rrrr');

    if (windowWidth <= 425) {
      container.classList.remove('row-cols-2');
      container.classList.add('row-cols-1');
    } else {
      container.classList.remove('row-cols-1');
      container.classList.add('row-cols-2');
    }
  }, [windowWidth]);






  const user_reviews = Object.entries(props.user_reviews)

  let count = 1


  const nextreview = () => {
    let review = document.querySelector(".reviewper")
    let user = document.querySelector(".reviewnameprt")
    let btnleft = document.querySelector(".btn-left")
    let btnright = document.querySelector(".btn-right")
    switch (count) {
      case 0:
        review.innerText = user_reviews[0][1]
        user.innerText = user_reviews[0][0]

        count++
        console.log(count)
        break;
      case 1:
        review.innerText = user_reviews[1][1]
        user.innerText = user_reviews[1][0]
        btnleft.style.display = "inline-block"
        count++
        console.log(count)
        break;
      case 2:
        review.innerText = user_reviews[2][1]
        user.innerText = user_reviews[2][0]

        count++
        console.log(count)
        break;
      case 3:
        review.innerText = user_reviews[3][1]
        user.innerText = user_reviews[3][0]

        count++
        btnright.style.display = "none"
        console.log(count)
        break;
      default:
        if (count >= 4) {
          count = 4;
          console.log(count)
        }
        break;
    }
  }
  const prereview = () => {
    let review = document.querySelector(".reviewper")
    let user = document.querySelector(".reviewnameprt")
    let btnleft = document.querySelector(".btn-left")
    let btnright = document.querySelector(".btn-right")

    switch (count) {
      case 1:
        review.innerText = user_reviews[0][1]
        user.innerText = user_reviews[0][0]

        console.log(count)
        break;
      case 2:
        review.innerText = user_reviews[0][1]
        user.innerText = user_reviews[0][0]

        count--
        btnleft.style.display = "none"
        console.log(count)
        break;
      case 3:
        review.innerText = user_reviews[1][1]
        user.innerText = user_reviews[1][0]

        count--
        console.log(count)
        break;
      case 4:
        review.innerText = user_reviews[2][1]
        user.innerText = user_reviews[2][0]
        btnright.style.display = "inline-block"

        count--
        console.log(count)
        break;
      default:
        if (count < 1) {
          count = 1;
        }
        break;
    }
  }



  return (
    <>
      <Carousel />
      <div className="main">
        <div className="main2">
          <div className="upperpart">
            <h3>Travelers point</h3>
            <div className="upperpart2">
              <div className="upperpart2left d-flex flex-column ">
                <h2>We help to find your place</h2>
                <div className="body2">
                  Explore the world's treasures on our travel website, where dreams take flight. From awe-inspiring landmarks to cultural gems, embark on a journey of discovery to top tourist attractions across the globe
                </div>
                <div className="numbers ">
                  <div className="num">
                    <h1 className='countanim' data-count={30} style={{ color: '#cd864c', display: "inline-block" }}>0</h1><h1 style={{ color: '#cd864c', display: "inline-block" }} >+</h1>
                    <div className="body2">Countries</div>
                  </div>
                  <div className="num">
                    <h1 className='countanim' data-count={2000} style={{ color: '#cd864c', display: "inline-block" }}>0</h1>
                    <div className="body2">Possibilities</div>
                  </div>
                  <div className="num">
                    <h1 className='countanim' data-count={50} style={{ color: '#cd864c', display: "inline-block" }}>0</h1><h1 style={{ color: '#cd864c', display: "inline-block" }}>+</h1>
                    <div className="body2">Programs</div>
                  </div>
                  <div className="num">
                    <h1 className='countanim' data-count={110} style={{ color: '#cd864c', display: "inline-block" }}>0</h1><h1 style={{ color: '#cd864c', display: "inline-block" }}>+</h1>
                    <div className="body2">Hosts</div>
                  </div>
                </div>
              </div>
              <div className="upperpart2right">

              </div>
            </div>
          </div>
          <div className="slideshow ">
            <h3 className='slidetext'>Our popular destinations</h3>
            <div className=" rrrr row row-cols-lg-4 row row-cols-md-3 row-cols-sm-2 row-cols-1">
              <div className="card1">
                <Destinationscards datashift={desData.Dubai} />
              </div>
              <div className="card1">
                <Destinationscards datashift={desData.Turkey} />
              </div>
              <div className="card1">
                <Destinationscards datashift={desData.Skardu} />
              </div>
              <div className="card1">
                <Destinationscards datashift={desData.Newyork} />
              </div>
            </div>
          </div>
          <div className="userreviewprt">
            <div className="urpleft">
              <h2>A Customer Said</h2>
              <h2>About Us:</h2>
              <div className="urpcard">
                <div className="urpcardupper">
                  <div className="reviewper">{user_reviews[0][1]}</div>
                  <i style={{ paddingRight: "12px", color: "#cd864c", fontSize: "24px" }} className="fa-solid fa-user-tie"></i>
                  <h3 style={{ display: "inline-block" }}><div className="reviewnameprt">

                    {user_reviews[0][0]}</div></h3>
                </div>
                <div className="urpbuttons">
                  <i onClick={prereview} className="fa-solid fa-circle-arrow-left btn-left"></i><i onClick={nextreview} className="fa-solid fa-circle-arrow-right btn-right"></i>
                </div>

              </div>
            </div>
            <div className="urpright">
              <img src={require('../images/userreview.png')} title='we value you' alt='we value you' />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};


