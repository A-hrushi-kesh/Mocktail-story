import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './components/Test';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Category from './components/home/catogory/Category';
import Filter from './components/home/alcoholfilter/Filter';
import Ing from './components/Ingredients/Ing';
import Filters from './components/Filter-cat-al-ing-drk/Filters';
import Recipe from './components/Recipe/Recipe';
import Search from './components/search/Search';
function App(){
   return (
    <div>
      <Home/>
      <Category/>
      <Filter/>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/ing' element={<Ing/>}/>
        <Route path='/fil/:data' element={<Filters/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
        <Route path='/src/:sdata' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

