import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Drinkcard from './drinkcard/Drinkcard';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMemeData();
  }, []);

  const getMemeData = async() => {
   await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((memeData) => {
        setData(memeData.data.drinks);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Did not get the data");
      });
  };

  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 m-2 bg-secondary-emphasis">
      {data ? data.map((ele,inx)=>{return <Drinkcard props={ele}/>}) : <p>Loading...</p>} 
    </div>
  );
}

export default Test;
