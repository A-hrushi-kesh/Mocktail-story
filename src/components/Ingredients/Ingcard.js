import React from 'react'
import "./Ingcard.css"
import { Link } from 'react-router-dom'
function Ingcard({props}) {
    let a="i="
    let b=props.strIngredient1
    let c=a+b
    return (
        <Link to={`/fil/${encodeURIComponent(c)}`}  style={{textDecoration:"none"}}>
        <div className='d-flex justify-content-center' style={{height:"20vh"}}>
           <div class="card ingcard  m-0 w-75 rounded-0 text-center d-flex align-items-end justify-content-center">
            <div class="card-body h-100">
                <h4 class="card-title">{props.strIngredient1}</h4>
            </div>
            </div>
        </div>
        </Link>
      )
}

export default Ingcard