import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Drinkcard from '../drinkcard/Drinkcard';

function Search() {
  const [srcdata, setSrcdata] = useState([]);
  const { sdata } = useParams();

  useEffect(() => {
    getsrcdata();
  }, [sdata]); 

  const getsrcdata = async ()=>{
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${sdata}`);
      if (response.data.drinks) {
        setSrcdata(response.data.drinks);
      } else {
        setSrcdata([]);
      }
    } catch (error) {
      alert("Data not received");
    }
  };
  
  return (
    <div>
      <h4 className='p-4 mt-3 ms-3 me-3 mb-0 bg-dark text-light'>Relevant Data</h4>
      <div className='row row-cols-1 row-cols-md-4 g-5 m-0'>
        {
          srcdata && srcdata.length === 0?<p>Loading...</p>:srcdata && srcdata.length > 0
          ? srcdata.map((ele, inx) => <Drinkcard key={inx} props={ele} />)
          :<p>Loading...</p>
        }
      </div>
    </div>
  );
}

export default Search;
