import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ShopItem from './ShopItem';
const Jewelery = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/category/jewelery')
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

export default Jewelery