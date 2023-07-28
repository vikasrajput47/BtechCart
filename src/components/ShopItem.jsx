import './ShopItem.css'
const ShopItem = ({data}) => {
    if (!Array.isArray(data)) {
        return <div>loading...</div>; 
      }

  

  return (
    <div>
        <div className='shopBox'>
       
        <div className='mainItemBox'>
        {
            data.map((item)=>(
                <a href={`/item/${item.id}`} key={item.id} ><div className='itemBox'>
                <div className='itemImage'><img src={item.image} alt="itemImage" /></div>
                <div className="info">
                <p >{item.title}</p>
                <div className="priceInfo">
                 <p>{item.rating.rate}&#11088;</p>
                 <p>{item.price}$</p>
                </div>
          
                </div>
             </div></a>
            ))
        }
  </div>
  </div> 
  
  </div>
 
  )
}

export default ShopItem