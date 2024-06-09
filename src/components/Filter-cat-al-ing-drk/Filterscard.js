import React from 'react'
import "./Filterscard.css"
import { Link } from 'react-router-dom'
function Filterscard({props}) {
  return (
    <Link to={`/recipe/${props.idDrink}`}  style={{textDecoration:"none"}}>
    <div className=''>
       <div class="card text-bg-light rounded-0 border border-0 p-4 cardimg">
        <img src={props.strDrinkThumb} class="rounded-0" alt="..."/>
        <div class="container text-center">
            <div className='row'>
            <h5 class="fw-normal fst-italic bg-light p-2 m-0 col align-self-end">{props.strDrink}</h5>
            </div>
        </div>
       </div> 
    </div>
    </Link>
  )
}

export default Filterscard