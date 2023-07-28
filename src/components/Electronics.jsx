import React from 'react'
import { useEffect,useState } from 'react';
import ShopItem from './ShopItem';
const Electronics = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/category/electronics')
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

export default Electronics