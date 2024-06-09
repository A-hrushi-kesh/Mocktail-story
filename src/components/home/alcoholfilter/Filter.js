import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filtercard from './Filtercard';
function Filter() {
    const[filterdata ,setFliterdata]=useState([])
    useEffect(()=>{
        getfilterdata();
    },[])
    const getfilterdata = async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
        .then((fdata)=>{
                setFliterdata(fdata.data.drinks)
                console.log(filterdata)
        })
        .catch((error)=>{
            alert("didnot get the data")
        })
    }
  return (
    <div className='p-4'>
          <h2 className='text-center fw-light fst-italic bg-dark text-light p-2'>Alcohol Options</h2>
          <div class="row row-cols-1 row-cols-md-4 g-3 m-0">
        {
            filterdata ?filterdata.map((ele,inx)=>{return <Filtercard props={ele}/>}): <h3>Loading....</h3>
        }
          </div>
    </div>
  )
}

export default Filter