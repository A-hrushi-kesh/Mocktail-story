import React from 'react'
import "./Home.css"
import img from "./image.jpg"
import Test from '../Test'
function Home() {
  return (
        <div id="carouselExample" class="carousel slide text-center">
        <div class="carousel-inner">
          <div class="carousel-item active bg-img carasol-img">
           <div className='text-light row align-items-end fst-italic' style={{marginTop:"40vh"}}>
            <h2>Mocktail Story</h2>
            <p className='text-capitalize'>a place to find all mocktail recipes</p>
           </div>
          </div>
        </div>
      </div>
       
  )
}

export default Home
