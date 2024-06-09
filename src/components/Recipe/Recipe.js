import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Recipe.css";
import Drinkcard from '../drinkcard/Drinkcard';

function Recipe() {
  const [repdata, setRepdata] = useState(null);
  const [categorydata, setCategorydata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getRepdata = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (response.data.drinks && response.data.drinks.length > 0) {
          setRepdata(response.data.drinks[0]);
        } else {
          alert("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Didn't get the data");
      }
    };

    getRepdata();
  }, [id]);

  useEffect(() => {
    if (repdata && repdata.strCategory) {
      const getCategoryData = async () => {
        try {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${repdata.strCategory}`);
          setCategorydata(response.data.drinks);
        } catch (error) {
          console.error("Error fetching category data:", error);
          alert("Did not get the data");
        }
      };

      getCategoryData();
    }
  }, [repdata]);

  if (!repdata) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="card mb-3 rounded-0">
        <div className="row g-0 d-flex justify-content-center">
          <div className="col-md-4">
            <img src={repdata.strDrinkThumb} className="img-fluid h-100 rounded-0" alt={repdata.strDrink} />
          </div>
          <div className="col-md-8 button-card">
            <div className="card-body">
              <h5 className="card-title bg-dark text-light p-1">{repdata.strDrink}</h5>
              <p className="card-text"><h5>Category:</h5> {repdata.strCategory}</p>
              <p className="card-text"><h5>Type:</h5> {repdata.strAlcoholic}</p>
              <p className="card-text">
                <big>Ingredients</big>
                <div>
                  <ul>
                  <li>{repdata.strIngredient1}</li>
                  <li>{repdata.strIngredient2}</li>
                  <li>{repdata.strIngredient3}</li>
                  </ul>
                </div>
                <div>
                  <big>Measurements</big>
                  <ul>
                  <li>{repdata.strMeasure1}</li>
                  <li>{repdata.strMeasure2}</li>
                  <li>{repdata.strMeasure3}</li>
                  </ul>
                </div>
              </p>
              <p className="card-text"><big>RECIPE:</big> {repdata.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className='p-4 mt-3 ms-3 me-3 mb-0 bg-dark text-light'>Drinks of Similar Category</h4>
      <div className="row row-cols-1 row-cols-md-4 g-5 m-0">
        {categorydata.length > 0 
          ? categorydata.map((ele, inx) => <Drinkcard key={inx} props={ele} />) 
          : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Recipe;
