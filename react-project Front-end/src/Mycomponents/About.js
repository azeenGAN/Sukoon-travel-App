import React, { useEffect, useRef } from 'react';
import Pres from './Pres';
import './About.css'
import { useReactToPrint } from 'react-to-print';


export default function About(props) {

  let whereclick = props.whereclick

  let a, b, c, d, e, f, ff
  let tri = []

  const ref01 = useRef('')
  const ref02 = useRef()
  
  function www() {
    ff = document.createElement('div');
    a = document.querySelector('.aboutdesc')
    b = document.querySelector('.officesworldwidedesc')
    c = document.querySelector('.leadership')
    d = document.querySelector('.Discountoffers')
    e = document.querySelector('.PrivacyandCookieStatement')
    f = document.querySelector('.Careeropportunities')
  }


  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/leadership');

      tri = Object.values(await response.json());
      const handsome = tri.map((item, index) => (
        `
          <tr key=${index}>
            <td>${item["name"]}</td>
            <td>${item["position"]}</td>
            <td>${item["depart"]}</td>
            <td>${item["join_date"]}</td>
            <td>${item["status"]}</td>
            <td>${item["education"]}</td>
            <td>${item["description"]}</td>
          </tr>`
      ));
      ref01.current.innerHTML = handsome.join('')//this will remove the commas between the entities of array otherwise innerHTML will impplicitly call toString().  console.log(handsome)
      console.log(handsome)//the reason to not use useState and useRef is that usestate gonna re-render the component again and again due to asynchronous nature of fetch().
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {



    const setInitialScale = () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (window.innerWidth < 767) {
        // Set initial scale to 0.7 for devices with width <= 767px
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.6');
      } else {
        // Set original scale for other devices
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
      }
    };

    setInitialScale(); // Set initial scale on component mount

    const handleResize = () => {
      setInitialScale(); // Adjust scale on window resize
    };

    window.addEventListener('resize', handleResize);

    www()
    fetchData()
    switch (whereclick) {
      case 'contact':
        b.click();
        break;
      default:
        a.click();
        break;
    }

    return () => {
      // Cleanup function to reset the scale on component unmount
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
      window.removeEventListener('resize', handleResize);
    };
  })


  const handlePrint = useReactToPrint({//React library to print specific div
    content: () => ref02.current,
  });

  function handleSelection(descKey) {
    ff.innerHTML = '';
    ff.innerHTML = descKey.innerHTML
    let rightcont = document.querySelector('.rightcont')
    rightcont.innerHTML = ''
    rightcont.insertAdjacentElement('beforeend', ff)

  }
  
  return (
    <>

      <Pres />

      <div className="maindiv">
        <div className="leftcont">
          <div className="listcontent">
            <ul>
              <li onClick={() => { handleSelection(a) }}><div>About sukoon.com</div>
                <div className="aboutdesc">
                  <div className=' desc'><h1>About sukoon.com</h1>
                    <p>Founded in 2020 in Lahore, Pakistan, Sukoon.com has evolved from a modest local startup into a promising digital travel enterprise. Operating as part of Sukoon Holdings Inc., our mission at Sukoon.com is to simplify the exploration of the world for everyone.</p>
                    <p>By investing in innovative technology that streamlines travel processes, Sukoon.com seamlessly connects a diverse community of travelers with unforgettable experiences, a variety of transportation options, and charming accommodations - ranging from cozy homes to boutique hotels. Serving as a vibrant travel marketplace for both emerging brands and small-scale entrepreneurs, Sukoon.com empowers properties worldwide to expand their reach and foster business growth.</p>
                    <p>Sukoon.com, available in multiple languages, boasts an array of over 2 million reported accommodation listings, including more than 400,000 unique places to stay such as homes and apartments. Wherever your travel aspirations take you, Sukoon.com simplifies the journey, providing reliable support around the clock to ensure a hassle-free experience.</p>
                  </div>
                </div>
              </li>
              <li onClick={() => {

                handleSelection(c)

              }}><div>Leadership</div>
                <div className='leadership'>
                  <div className="desc">
                    <h1 style={{ marginBottom: "15px" }}>Leadership</h1>
                    <table className="maintable"><thead>
                      <tr>

                        <th rowSpan="2">Name</th>
                        <th rowSpan="2">Position</th>
                        <th rowSpan="2">Depart.</th>
                        <th colSpan="2" >Status</th>
                        <th rowSpan="2">Education</th>
                        <th className='lastcol' rowSpan="2">Desc.</th>
                      </tr>
                      <tr>
                        <th>Joining</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                      <tbody ref={ref01} className='tablebody'></tbody>
                    </table>
                  </div>
                </div>
              </li>
              <li onClick={() => { handleSelection(b) }}><div >Offices worldwide</div>  <div className="officesworldwidedesc">
                <div className=' desc'><h1>Offices world wise</h1>
                  <p>
                    Sukoon.com, based in Lahore, Pakistan, operates as an online trip management service. We serve as the principal owner, controller, and manager of our website, www.sukoon.com. Globally, Sukoon.com receives support from various local entities listed below, tasked with providing on-the-ground assistance tailored to our community's needs. </p>
                  <h2 className='gradient3'>Main office:</h2>
                  <div>Muslim Town B-Block Block A Muslim Town, Faisalabad, Punjab 38000, Pakistan</div>
                  <div style={{ paddingTop: "5px" }} className="telephone"><i className="fa-solid fa-tty"></i><span><a style={{ textDecoration: "none ", marginLeft: "4px" }} href="tel:+92 41 8580382">+92 41 8580382</a></span>
                    <p><i style={{ marginRight: "5px", marginTop: "5px" }} className="fa-regular fa-clock"></i>Office hours: 8am - 5pm</p>
                  </div>
                  <h2 className='gradient3' style={{ fontSize: "32px" }}>Paris office:</h2>
                  <div>292 Rue Saint-Martin, 75141 Paris, France</div>
                  <div style={{ paddingTop: "5px" }} className="telephone"><i className="fa-solid fa-tty"></i><span><a style={{ textDecoration: "none ", marginLeft: "4px" }} href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a></span>
                    <p><i style={{ marginRight: "5px", marginTop: "5px" }} className="fa-regular fa-clock"></i>Office hours: 8am - 5pm</p>
                  </div>
                  <h2 className='gradient3' style={{ fontSize: "32px" }}>London Office:</h2>
                  <div>1-5 West St,London WC2H 9NQ, United Kingdom</div>
                  <div style={{ paddingTop: "5px" }} className="telephone"><i className="fa-solid fa-tty"></i><span><a style={{ textDecoration: "none ", marginLeft: "4px" }} href="tel:+442072402042">+442072402042</a></span>
                    <p><i style={{ marginRight: "5px", marginTop: "5px" }} className="fa-regular fa-clock"></i>Office hours: 8am - 5pm {`{current closed due to protest}`}</p>
                  </div>
                  <h2 className='gradient3' style={{ fontSize: "32px" }}>Newyork office</h2>
                  <div>378 Park Ave S, New York, NY 10010</div>
                  <div style={{ paddingTop: "5px" }} className="telephone"><i className="fa-solid fa-tty"></i><span><a style={{ textDecoration: "none ", marginLeft: "4px" }} href="tel:+33 1 83 65 81 00">+33 1 83 65 81 00</a></span>
                    <div><i style={{ marginRight: "5px", marginTop: "5px" }} className="fa-regular fa-clock"></i>Office hours: 8am - 5pm</div>
                  </div>
                </div>
              </div></li>
              <li onClick={() => { handleSelection(d) }}><div>Discount Offers</div>
                <div className="Discountoffers">
                  <div className=' desc'><h1>Discount Offers</h1>
                    <div className='gradient'>Popular Offers</div>
                    <h3 className='gradient2'>New year,New Adventures offer:</h3>
                    <p>This offer starts at the begining of every month and remain for whole month of January</p>
                    <p>If you seeing this in January,Why waiting apply coupon code and get discount</p>
                    <p><b>Discount: </b>15%</p>
                    <p><strong>Coupon code: </strong>II-11</p>
                    <h3 className='gradient2'>Old is Gold offer:</h3>
                    <p>This offer is only for our those customers who has done their 2 trips withus.</p>
                    <p>Why waiting apply coupon code and book another trip with us</p>
                    <p ><b>Discount: </b>10%</p>
                    <p style={{ marginBottom: "25px" }}><strong>Coupon code: </strong>24k-2</p>
                    <div className="imgpartdisc"><h5>
                      Explore our exclusive Discount Offers for a limited time!</h5><p> Dive into our Popular Offers featuring exciting deals. Experience the thrill of our "New Year, New Adventures" offer, available throughout January.</p>
                      <p style={{ paddingBottom: "80px" }}> Hurry and use coupon code 24k-2 and II-11 to embark on another unforgettable journey with us.</p>
                      <h3>sukoon support Palestine<img style={{ width: "30px", marginLeft: "5px" }} src={process.env.PUBLIC_URL + '/plstflag.jpg'} alt=''></img></h3>
                      <p>Donate for
                        <a style={{ textDecoration: "none", color: "red" }} rel="noopener noreferrer" target="_blank" href='https://alkhidmat.org/appeal/emergency-appeal-palestine-save-lives-in-gaza-today'> Gaza</a> they need you rightnow.</p></div>
                  </div>
                </div>
              </li>
              <li onClick={() => {
                handleSelection(f)
              }}><div >Career opportunities</div><div className="Careeropportunities">
                  <div className=' desc'><h1>Career opportunities</h1>
                    <div style={{ paddingTop: "7px" }}><span style={{ fontWeight: "700" }}>Currently, </span>We have no opportunities.You can send your resume to us at       <a href='mailto:sukoon212@gmail.com' style={{ textDecoration: "none", fontWeight: "400", fontStyle: "oblique" }}>sukoon212@gmail.com</a></div>
                  </div>

                </div></li>
              <li onClick={() => {
                handleSelection(e)

                if (!document.querySelector('.btn')) {
                  let alex = document.createElement('div')
                  alex.innerHTML = '<div class="container text-center w-100"><button class="btn btn-primary" style="margin:18px auto"  >Print / save Statement</button></div>'
                  alex.addEventListener('click', handlePrint);
                  let rr = document.querySelector('.rightcont')
                  rr.insertAdjacentElement("afterbegin", alex)
                }
              }}><div>Privacy and Cookie Statement</div>
                <div className="PrivacyandCookieStatement">
                  <div ref={ref02} className='printView desc'><h1 >Privacy and Cookie Statement</h1>
                    <h2 style={{ paddingTop: "15px", marginBottom: "15px", fontWeight: "600" }} className="gradient" >Privacy Statement</h2>
                    <div>First things first - your privacy is important to us. That might be the kind of thing all these notices say, but we mean it. You place your trust in us by using Sukoon.com services and we value that trust. That means we are committed to protecting and safeguarding your personal data. We act in our customers" best interest and we are transparent about the processing of your personal data.

                      This document ("this Privacy Statement" or "our Privacy Statement") describes how we use and process your personal data, provided in a readable and transparent manner. It also tells you what rights you can exercise in relation to your personal data and how you can contact us. Please also read our Cookie Statement, which tells you how Sukoon.com uses cookies and other similar tracking technologies.</div>
                    <h3 className="gradient4" style={{ margin: "13px 0" }}>Terms we use in this Privacy Statement</h3>
                    <div>'Trip' means the various different travel products and services that can be ordered, acquired, purchased, bought, paid, rented, provided, reserved, combined, or consummated by you from the Trip Provider.

                      'Trip Provider' means the provider of accommodation (e.g. hotel, motel, apartment, bed & breakfast, landlord), attractions (e.g. (theme) parks, museums, sightseeing tours), transportation provider (e.g. car rentals, cruises, rail, airport rides, coach tours, transfers), tour operators, travel insurances and any other travel or related product or service as from time to time available for Trip Reservation on the platform.

                      'Trip Service' means the online purchase, order, (facilitated) payment or reservation service as offered or enabled by Sukoon.com in respect of various products and services as from time to time made available by Trip Providers on the platform.

                      'Trip Reservation' means the order, purchase, payment, booking or reservation of a Trip.</div>
                    <h3 className="gradient4" style={{ margin: "13px 0" }}>Why does sukoon.com collect and use your personal data?</h3>
                    <div>he main reason we ask you for personal details is to help you organise your online Trip Reservations and ensure you get the best service possible.

                      We also use your personal data to contact you about the latest deals, special offers and other products or services we think you might be interested in. </div>
                    <h3 className="gradient4" style={{ margin: "13px 0" }}>What security and retention procedures does sukoon.com put in place to safeguard your personal data?</h3>
                    <div>We have implemented a range of procedures to prevent unauthorised access to, and the misuse of, personal data that we process.</div>
                    <h3 className="gradient4" style={{ margin: "13px 0" }}>How can you control the personal data you've given to sukoon.com?</h3>
                    <div>Among others, you have the right to review the personal data we keep about you at any time and request access to or deletion of your personal data by emailing us at sukoon212@gmail.com. If you want to find out more about your rights to control your personal data, read on.</div>
                    <p className="gradient4" style={{ fontWeight: "700", margin: "15px 0" }}>Personal data we receive from other sources.</p>
                    <div>It's not just the things you tell us, though - we may also receive information about you from other sources. These include business partners, such as affiliate partners, subsidiaries of the sukoon.com corporate group, other companies in the Booking Holdings Inc. corporate group and other independent third parties.

                      Information we receive from these partners may be combined with information provided by you. For example, sukoon.com Trip Reservation services are not only made available via sukoon.com and the sukoon.com apps but are also integrated into services of affiliate partners you can find online. When you use any of these services, you provide the reservation details to our business partners who then forward your details to us.</div>
                    <h2 className="gradient4" >Cookie statement</h2>
                    <div>Whenever you use our online services or apps, we use cookies and other online tracking technologies (which we'll also refer to as 'cookies' for the purpose of this Cookie Statement).

                      Cookies can be used in various ways, including to make the sukoon.com website work, to analyse traffic, or for advertising purposes.</div>
                    <h3 className="gradient4" style={{ margin: "13px 0" }}>What are cookies and online tracking technologies?</h3>
                    <div>A web browser cookie is a small text file that websites place on your computer's or mobile device's web browser.

                      These cookies store information about the content you view and interact with, in order to remember your preferences and settings or analyse how you use online services.

                      Cookies are divided into 'first party' and 'third party':</div>
                    <div><span style={{ fontWeight: "700" }}>First party cookies</span> are the cookies served by the owner of the domain - in our case that's sukoon.com. Any cookie we place ourselves is a 'first party cookie'.</div>
                    <div><span style={{ fontWeight: "700" }}>Third party cookies</span> are the cookies served by the owner of the domain - in our case that's sukoon.com. Any cookie we place ourselves is a 'first party cookie'.</div>
                    <div>And they can be either 'session cookies' or 'permanent cookies':</div>
                    <div><span style={{ fontWeight: "700" }}>session cookies</span> only exist until you close your browser, ending what is called your 'session'. They are then deleted..</div>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <div className="rightcont">

        </div>
      </div>
    </>
  );
}




