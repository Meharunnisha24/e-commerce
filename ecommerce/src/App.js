import './App.css';
import Card from './Card';
import Carousel from './Carousel';
import Navbar from './Navbar';
import data from './Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';

function App() {
   const[cartData, setCartData] =useState([])

   const handleCartData = (product)=>{
    console.log(product)
    setCartData((cartData) => [...cartData,{data:product}])
   }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel />
        <Routes>
          <Route exact path="/" element={<Card data={data} handleCartData={handleCartData} />} />
          <Route exact path="/cart" element={ <Cart data={cartData}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
