import {  useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navbar,ShopItemDetails,WomenClothing,ShopItem,Jewelery,Electronics,MenClothing,Error} from './components/index'
const App=()=>{
  const [data, setData] = useState({});
  const [search,setSearch]=useState({});
  const getData=(tempItem)=>{
    
      setSearch(tempItem); 
      console.log(search)
  }
 
  
//calling the api from fake product API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(json => {
      setData(json); 
    // console.log(json)
    });
  }, []);  

  return (
   <>
    <Navbar data={data} getData={getData} />

     <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<ShopItem data={data}/>} />
      <Route exact path="/search" element={<ShopItem data={search} />} />
      <Route exact path="/item/:itemId" element={<ShopItemDetails data={data}/>} />
      <Route  path="/Men clothing" element={<MenClothing/>} />
      <Route  path="/Women clothing" element={<WomenClothing/>} />
      <Route  path="/Jewelery" element={<Jewelery/>} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/error" element={<Error />} />
      
      </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
