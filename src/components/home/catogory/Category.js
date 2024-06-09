import React, { useEffect , useState } from 'react'
import axios from 'axios';
import Homecard from './Homecard';
function Category() {
    const [categorydata,setCategorydata]=useState([])
    useEffect(() => {
        getCategoryData();
      }, []);
    
      const getCategoryData = async() => {
       await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
          .then((categoryData) => {
            setCategorydata(categoryData.data.drinks);
            console.log(categorydata);
          })
          .catch((error) => {
            console.error(error);
            alert("Did not get the data");
          });
      };
  return (
    <div className='p-4'>
        <h2 className='text-center fw-light fst-italic bg-dark text-light p-2'>Category</h2>
        <div class="row row-cols-1 row-cols-md-4 g-3 m-0">
            {categorydata ? categorydata.map((ele,inx)=>{return <Homecard props={ele}/>}) : <p>Loading...</p>}
        </div>

    </div>
  )
}

export default Category