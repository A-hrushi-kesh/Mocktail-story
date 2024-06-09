import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filterscard from './Filterscard';
import { useParams } from 'react-router-dom';
function Filters() {
    const[filtersdata ,setFlitersdata]=useState([])
    const{data}=useParams()
    useEffect(()=>{
        getfiltersdata();
    },[])
    const getfiltersdata = async()=>{
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${data}`)
        .then((fdata)=>{
                setFlitersdata(fdata.data.drinks)
                console.log(filtersdata)
        })
        .catch((error)=>{
            alert("didnot get the data")
        })
    }
  return (
    <div className='p-4'>
          <h2 className='text-center fw-light fst-italic bg-dark text-light p-2'>Filtered by {data.slice(2)}</h2>
          <div class="row row-cols-1 row-cols-md-4 g-3 m-0">
        {
            filtersdata ?filtersdata.map((ele,inx)=>{return <Filterscard props={ele}/>}): <h3>Loading....</h3>
        }
          </div>
    </div>
  )
}

export default Filters