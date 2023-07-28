import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ShopItem from './ShopItem';
const WomenClothing = () => {
    const [data, setData] = useState({});
  
  //calling the Fake product API for the woman Clothing
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then(res => res.json())
      .then(json => {
        setData(json); 
      // console.log(json)
      });
    }, []);  
   
  return (
    <div>
      <ShopItem data={data}/>
    </div>
  )
}

export default WomenClothing