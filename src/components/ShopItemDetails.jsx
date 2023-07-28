import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './ShopItemDetails.css'
const ShopItemDetails = ({data}) => {
  const  {itemId}  = useParams();
  
  const [flag,setFlag]=useState(true)
  const obj=data[itemId-1];
  if(obj==null){
return <h1>loading</h1>
  }
  return (
    <div>
      <div className="itemShopBox">
        <div className="itemShopBox1">
       
         <div className='itemShopImg'><img src={obj.image} alt="" /></div>
         <div className="buy">
         <a href="/error" className='buyIcon'>Add to Cart</a>
         <a href="/error" className='buyIcon'>Buy Now</a>
         
         </div>
        </div>
        <div className="itemShopBox2">
         
          <p className='itemTitle'>{obj.title}</p>
         <p className='itemDescript'>{obj.description}</p>
         <div className="priceDetail">
           <p className='itemPrice'>{obj.price}$</p>
        <p className='itemPrice'>{obj.rating.rate}&#11088;</p>
         
          </div>
          <div className="addWar">
          <div className="warrenty">
            <p>Warrenty</p>
            <p>1 Year Warranty from the Date of Purchase</p>
          </div>
          <div className="warrenty">
            <p>Delivery</p>
            {flag ? <p><input type="text" placeholder='Enter the pincode'/><button onClick={()=>setFlag(!flag)}>Check</button></p>:`:Available`}
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ShopItemDetails