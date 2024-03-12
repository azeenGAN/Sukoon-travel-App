import React from 'react'
import { useNavigate } from "react-router-dom";

function Destinationscards(props) {
  const navigate = useNavigate();
  const {
    name,
    category,
    pickup,
    durations,
    means,
    food,
    note,
    img_src,
    people,
    overview,
    price,
    requirements,
    desimages,
    city_id
  } = props.datashift

  const pickupValues = () => {
    let e = pickup.join();
    return e
  }
  const handleBuyClick = () => {
    navigate(`/destinations/buy?name=${name}&category=${category}&pickup=${pickupValues()}&requirements=${requirements}&durations=${durations}&means=${means}&food=${food}&note=${note}&img_src=${img_src}&people=${people}&overview=${overview}&price=${price}&city_id=${city_id}&desimages=${desimages}`);
  };
  return (
    <>
      <div className="col">
        <div className="card" style={{ backgroundColor: "#EBF0F4", borderRadius: "30px", overflow: "hidden" }} >
          <img src={img_src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <div className="card-text body3"><ul style={{
              paddingLeft: "0px",
              listStyleType: "none", fontStyle: "italic"
            }}>
              <li><i className='bx bxs-car'></i>&nbsp;{category}</li>
              <li><i className='bx bx-location-plus'></i>&nbsp;{pickupValues()}</li>
              <li><i className='bx bx-home-alt'></i>&nbsp;{durations}</li>
              <li><i className='bx bxs-plane-alt'></i>&nbsp;{means}</li>
              <li><i className='bx bx-bowl-rice'></i>&nbsp;{food}</li>
              <li><i className='bx bx-male-female'></i>&nbsp;{people}</li>

            </ul></div>
            <h4 >{note}</h4>

          </div>

          <button type="button" style={{ backgroundColor: '#4E8098', color: "whitesmoke", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
            className="btn w-100" onMouseOver={(e) => { e.target.style.backgroundColor = "#01497c" }}
            onMouseOut={(e) => { e.target.style.backgroundColor = "#4E8098" }} onClick={handleBuyClick}>Buy</button>
        </div>
      </div>

    </>
  )
}

export default Destinationscards;
