import React from 'react'
import "./Filtercard.css"
import { Link } from 'react-router-dom'
function Filtercard({props}) {
  const a="a="
  const b=props.strAlcoholic
  const c=a+b
  return (
    <Link to={`/fil/${encodeURIComponent(c)}`}  style={{textDecoration:"none"}}>
    <div>
        <div className='d-flex justify-content-center' style={{height:"20vh"}}>
       <div class="card Filtercard m-0 w-75 rounded-0 text-center d-flex align-items-end justify-content-center">
        <div class="card-body h-100">
            <h4 class="card-title">{props.strAlcoholic}</h4>
        </div>
        </div>
    </div>
    </div>
    </Link>
  )
}

export default Filtercard