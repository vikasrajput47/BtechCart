import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ShopItem from './ShopItem';
const MenClothing = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/men's clothing`)
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

export default MenClothing