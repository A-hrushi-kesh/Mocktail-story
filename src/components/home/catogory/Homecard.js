import React from 'react'
import "./catcard.css"
import { Link } from 'react-router-dom'
function Homecard({props}) {
  const a= props.strCategory
  const b="c="
  const c=b+a
  return (
    <Link to={`/fil/${encodeURIComponent(c)}`}  style={{textDecoration:"none"}}>
    <div className='d-flex justify-content-center' style={{height:"20vh"}}>
       <div class="card cat-card m-0 w-75 rounded-0 text-center d-flex align-items-end justify-content-center">
        <div class="card-body h-100">
            <h4 class="card-title">{props.strCategory}</h4>
        </div>
        </div>
    </div>
    </Link>
  )
}

export default Homecard