import React, { useState, useEffect, useRef } from "react";
import ReactFlagsSelect from "react-flags-select";

import './Buypage.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { error } from "jquery";

// import { Carousel, initMDB } from "mdb-ui-kit";
// initMDB({ Carousel });



function Buypage() {

  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);

  // Access the data from the URL parameters
  const name = queryParams.get('name');
  const category = queryParams.get('category');
  const pickup = queryParams.get('pickup');
  const durations = queryParams.get('durations');
  const means = queryParams.get('means');
  const food = queryParams.get('food');


  const people = queryParams.get('people');
  const overview = queryParams.get('overview');
  const price = queryParams.get('price');
  const requirements = queryParams.get('requirements');
  const city_id = queryParams.get('city_id');

  const [selected, setSelected] = useState("");
  let traveltips = ["Keep your medications with you",
    " Always keep cash with you",
    "Avoid long hikes and treks without a guide",
    'Keep a handy backpack',
    "Explore hidden locations",
    "Be mindful of the local culture",
    "Pack all your gadgets",
    "Research the location before traveling",
    "Carry a basic first-aid kit box",
    "ALways monitize your children, so they dont get lost"]

  let handlereq = (e) => {
    e = e.split(",")
    let element = [];

    for (let i = 0; i < e.length; i++)
      element.push(<li key={i}>{e[i]}</li>);
    return element;
  };

  let handletip = (e) => {
    let t = [];
    for (let i = 0; i < e.length; i++) {

      t.push(<li key={i}>{e[i]}</li>);
    }
    return t
  }

  const g = () => {

    let back = document.createElement('div')
    back.classList.add('back')
    back.innerHTML = `<div class="sticker">
    <img style="width:150px" src=${require('../images/backlogo.png')} alt="your info submitted" />
    <p style="font-style:italic ; padding:0px 10px">${resdata}</p>
    <h3>Thankyou!!</h3>
  </div>`
    let formcont = document.querySelector('.formcont')
    formcont.insertAdjacentElement('afterbegin', back)
    formcont.style.height = "90vh"

    let formgroup = document.querySelector('.form-group')
    formgroup.style.visibility = 'hidden'
  }

  var resdata;
  let [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    'e-mail': '',
    phone: '',
    address: '',
    country: '',
    zip: '',
    comments: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setFormSubmitted(true)
    console.log(formData);


    axios.post('http://localhost:5000/api/form', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(function (response) {
        resdata = response.data;
        g()
      })
      .catch(function (error) {
        resdata=error.message
          g()
      }
      );
   

  };

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, country: selected }));
  }, [selected]);

  const apiKey = 'dee65d2234fc52e1bee6380fabb6563c'; // Replace with your OpenWeatherMap API key

  const url = `https://api.openweathermap.org/data/2.5/weather?&id=${city_id}&lang=en&appid=${apiKey}&units=metric`;
  const ref02 = useRef('')
  // Make the API call using the Fetch API
  let low_temp, temp, high_temp, humidity, visibility, sunTimes1, sunTimes2, wind
  const c = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();



      // Handle the API response data
      console.log(data);
      low_temp = data.main.temp_min
      temp = data.main.temp
      high_temp = data.main.temp_max
      humidity = data.main.humidity
      visibility = data.visibility
      wind = Object.entries(data.wind)
      //   console.log(data);
      //   console.log(data.main.temp_min)
      // console.log(data.main.temp)
      // console.log(data.main.temp_max)
      // console.log(data.main.humidity)
      // console.log(data.visibility)

      sunTimes1 = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US');// Multiply by 1000 to convert seconds to milliseconds
      sunTimes2 = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US'); // Multiply by 1000 to convert seconds to milliseconds

      // sunTimes = {
      //   sunrise: {
      //     hours: sunriseDate.getHours(),
      //     minutes: sunriseDate.getMinutes(),
      //     seconds: sunriseDate.getSeconds()
      //   },
      //   sunset: {
      //     hours: sunsetDate.getHours(),
      //     minutes: sunsetDate.getMinutes(),
      //     seconds: sunsetDate.getSeconds()
      //   }
      // };
    }
    catch (error) {
      // Handle errors during the API call
      console.error(error.message);
    }
    // <div className="Sunrise">Sunrise: ${sunTimes.sunrise.hours}h${sunTimes.sunrise.minutes}m${sunTimes.sunrise.seconds}s</div>
    //   <div className="Sunrise">Sunset: ${sunTimes.sunset.hours}h${sunTimes.sunset.minutes}m${sunTimes.sunset.seconds}s</div>`

    ref02.current.innerHTML = `<div className="weahead" style="display: inline-block ; padding-right:5px" >Min Temperature: <span style="font-weight: 300 ; color:black">${low_temp}&deg;C</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Temperature:<span style="font-weight: 300 ; color:black"> ${temp}&deg;C</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Temperature: <span style="font-weight: 300 ; color:black">${high_temp}&deg;C</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Humidity:<span style="font-weight: 300 ; color:black"> ${humidity}%</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Visibility: <span style="font-weight: 300 ; color:black">${visibility}m</span></div>
    
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Sunrise: <span style="font-weight: 300 ; color:black">${sunTimes1}s</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >Sunset:<span style="font-weight: 300 ; color:black"> ${sunTimes2}s</span></div>
    <div className="weahead" style="display: inline-block ; padding-right:5px" >wind <span style="font-weight: 300 ; color:black">${wind[0][0]}: ${wind[0][1]}m/s&nbsp; ${wind[1][0]}: ${wind[1][1]}&deg;</span>
    </div>
    <br>  <br>  
    <small style="font-size:10px ; font-weight:300; color:black">Weather values are Up-to-date and Legit </small>
    <small style="font-size:10px ; font-weight:300; color:black; display:block">Sunset and Sunrise time are based on your local TimeZone </small>`
    ref02.current.style.color = "#122F8D"
    ref02.current.style.fontWeight = "600"

    console.log(wind)
  }
  // const main = async () => {
  //   await c();

  //   console.log(sunTimes.sunrise.hours,'h', sunTimes.sunrise.minutes,'m', sunTimes.sunrise.seconds,'s');
  //   console.log(sunTimes.sunset);

  // };




  return (

    <>

      <div className="mian">
        <div className="buycontainer">
          <div id="carouselExampleCrossfade" className="carousel slide carousel-fade " data-bs-ride="carousel" data-bs-carousel-init>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require(`../images/${name}img1.jpg`)} className="d-block w-100 buycarousel" alt="Wild Landscape" />
              </div>
              <div className="carousel-item">
                <img src={require(`../images/${name}img2.jpg`)} className="d-block w-100  buycarousel" alt="Camera" />
              </div>
              <div className="carousel-item">
                <img src={require(`../images/${name}img3.jpg`)} className="d-block w-100  buycarousel" alt="Exotic Fruits" />
              </div>
              <div className="carousel-item">
                <img src={require(`../images/${name}img4.jpg`)} className="d-block w-100  buycarousel" alt="destination pic 4" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="formcont pt-5 "  >
            <div className="form-group col-10" style={{ paddingLeft: "25px", }}>

              <form onSubmit={handleSubmit} className="row g-3" action="" method="post" id="contact_form">
                <fieldset>
                  <legend>Book your tour to {name}!!</legend>

                  <div className="mb-2">
                    <label htmlFor="first_name" className="form-label">First name</label>
                    <div className="inputbox">
                      <i className='bx bx-edit-alt'></i>
                      <input onChange={handleChange} name="first_name" id="first_name" placeholder="First Name" className="form-control" type="text" title="Alphabets only" minLength="3" pattern='[A-Z a-z]*' required />

                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="last_name" className="form-label">Last name</label>
                    <div className="inputbox"><i className='bx bxs-edit-alt' ></i>
                      <input onChange={handleChange} name="last_name" id="last_name" placeholder="Last Name" className="form-control" type="text" minLength="3" pattern='[A-Z a-z]*' title='alphabets only' required />

                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="e-mail" className="form-label">E-mail</label>
                    <div className="inputbox"><i className='bx bx-mail-send'></i>
                      <input onChange={handleChange} name="e-mail" id="e-mail" placeholder="e-mail address" className="form-control" type="email" minLength="10" required />

                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="phone" className="form-label">Contact no</label>
                    <div className="inputbox"><i className='bx bxs-phone-call'></i>
                      <input onChange={handleChange} name="phone" id="phone" placeholder="Contact no" className="form-control" pattern="\d*" title='numbers only' minLength="7" required />

                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="adress" className="form-label">Present address</label>
                    <div className="inputbox"><i className='bx bx-home'></i>
                      <input onChange={handleChange} name="address" id="adress" placeholder="Present address" className="form-control" type="text" minLength="8" required />

                    </div>
                  </div>

                  <div className="mb-2">

                    <label htmlFor="country" className="form-label">Country</label>
                    <div className="inputbox">

                      <ReactFlagsSelect
                        selected={selected}

                        onSelect={(code) => setSelected(code)}
                        placeholder="Select your country" searchable searchPlaceholder="Search countries"
                      />
                    </div>
                  </div>


                  <div className="mb-3">
                    <label htmlFor="zip" className="form-label">Zip code</label>
                    <div className="inputbox"><i className='bx bx-code-alt' ></i>
                      <input onChange={handleChange} name="zip" id="zip" placeholder="Zip code" className="form-control" type="tel" required />
                    </div>
                  </div>





                  <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Description</label>
                    <div className="inputbox">
                      <textarea onChange={handleChange} className="form-control" name="comments" id="comments" placeholder="Description" type="text" maxLength="100"></textarea>
                    </div>
                  </div>


                  <div className="inputbox">
                    <div className="mb-3">
                      <button type="submit" disabled={isFormSubmitted} className="btn btn-warning">Send</button>
                    </div>
                  </div>

                </fieldset>
              </form>
            </div>

          </div>
          <div className="writting" >
            <h3>Overview</h3>
            <p style={{ marginBottom: "15px" }}>{overview}</p>
            <h3>Main points:</h3>
            <ul style={{ paddingLeft: "18px", fontWeight: "300" }}>
              <li>{category}</li>
              <li>{means}</li>
              <li>{durations}</li>
              <li>{pickup}</li>
              <li>{food}</li>
              <li>{people}</li>
            </ul>
            <h3>Requirements</h3>
            <ul style={{ paddingLeft: "18px", fontWeight: "300" }}>{handlereq(requirements)}</ul>
            <h3>Travel tips</h3>
            <ul style={{ paddingLeft: "18px", fontWeight: "300" }}>{handletip(traveltips)}</ul>


            <h3>Price</h3>
            <div style={{ fontSize: "20px", fontFamily: "Times New Roman, Times, serif", fontStyle: "italic", fontWeight: "900" }}> {price + " PKR"}</div>

            <div className="weather">
              <div class="accordion w-100" id="accordionExample">
                <div class="card w-100">
                  <div class="card-header w-100" >
                    <h2 class="mb-0">
                      <button onClick={c} class="btn w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">


                        <div className="accordiontext">See details about <b>Weather</b> in {name} below</div>
                      </button>
                      <i class="bi bi-caret-right"></i>
                    </h2>
                  </div>

                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div ref={ref02} class="card-body">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default Buypage
