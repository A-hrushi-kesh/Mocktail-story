import React, { useEffect , useState } from 'react'
import axios from 'axios';

import Ingcard from './Ingcard';

function Ing() {
    const [ingdata,setIngdata]=useState([])
    useEffect(() => {
        getIngData();
      }, []);
    
      const getIngData = async() => {
       await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
          .then((ingData) => {
            setIngdata(ingData.data.drinks);
            console.log(ingdata);
          })
          .catch((error) => {
            console.error(error);
            alert("Did not get the data");
          });
      };
  return (
    <div className='p-4'>
        <h2 className='text-center fw-light fst-italic bg-dark text-light p-2'>Ingredients</h2>
        <div class="row row-cols-1 row-cols-md-4 g-2 m-0">
            {ingdata ? ingdata.map((ele,inx)=>{return <Ingcard props={ele}/>}) : <p>Loading...</p>}
        </div>

    </div>
  )

}

export default Ing