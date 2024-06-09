import React from 'react'
import "./Drinkcard.css"
import { Link } from 'react-router-dom'
function Drinkcard({props}) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={`/recipe/${props.idDrink}`} style={{ textDecoration: 'none' }} onClick={handleClick}>
    <div className="col card-container ">
        <div className="card h-100 w-auto border border-0 rounded-0 buttoncard">
          <img src={props.strDrinkThumb} className="card-img-top h-100 d-inline-block rounded-0" alt="..." />
          <div className="card-body h-50 d-inline-block">
            <h5 className="">{props.strDrink}</h5>
          </div>
        </div>
      </div>
  </Link>
  )
}

export default Drinkcard
