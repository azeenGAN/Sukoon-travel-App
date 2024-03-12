import React from 'react'
import colimg1 from '../images/colimg1.jpg';
import colimg2 from '../images/colimg2.jpg';
import colimg3 from '../images/colimg3.jpg';
import colimg4 from '../images/colimg4.jpg';

function carousel() {
  return (
    <>


      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={colimg1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Alps of Austria</h5>
              <p>
                "The majestic Austrian Alps boast breathtaking landscapes, featuring snow-capped peaks, pristine alpine meadows,
                and charming villages, making them a haven for nature enthusiasts and adventure seekers alike."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={colimg2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rice field Bangladesh</h5>
              <p>"In the lush fields of Bangladesh, diligent farmers carefully harvest ripe rice plants,
                embodying the timeless rhythm of agricultural life in the heart of the country."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={colimg3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Miyajima, Japan</h5>
              <p>
                "Miyajima, Japan, enchants with its iconic 'Floating Torii Gate' set against scenic coastal landscapes, where the fusion of Shinto spirituality,
                historic shrines, and friendly deer create a tranquil and magical island experience."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={colimg4} alt="Fourth slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Agra, India</h5>
              <p>

                "Taj Mahal, an iconic masterpiece of Mughal architecture, stands as a testament to eternal love, showcasing exquisite white marble
                craftsmanship against the backdrop of the Yamuna River."</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default carousel
