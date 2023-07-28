import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './img/logo.png';
import search from './img/search.png';
import cart from './img/cartLogo.png';


const Navbar = ({ data, getData }) => {
  const [flag, setFlag] = useState(false);
  const item = ['Electronics', 'Men clothing', 'Women clothing', 'Jewelery'];
  const [tempItem, setItem] = useState('');
  const setVal = (e) => {
    setItem(e.target.value);
  };




 function isRelatedToSearchTerm(string, searchTerm) {
  return string.toLowerCase().includes(searchTerm.toLowerCase());}
function findProductsByRelatedTitle(products, searchTerm) {
  const productsArray = Array.from(products);
  return productsArray.filter((product) => isRelatedToSearchTerm(product.title, searchTerm));
}
const findItems = findProductsByRelatedTitle(data, tempItem);

  useEffect(() => {
    getData(findItems);
  }, [findItems,getData]);


  return (
    <div> 
      <div className="navBar">
        <div className="leftNav">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="log" />
            </a>
          </div>
          <div className="searchNav">
            <input onChange={setVal}  type="text" placeholder='First open search page by clicking the search icon'/>
            <a href="/search">
              <img src={search} alt="" />
            </a>
          </div>
        </div>
        <div className="rightNav">
          <ul className="navItems">
            <li className="product">
              <button onClick={() => setFlag(!flag)}>
                Products {flag ? '▲' : '▼'}
              </button>
              <div className={flag ? 'proItem' : 'hid'}>
                {item.map((item, i) => (
                  <li className="proItems" key={i}>
                    <a href={`/${item}`}>{item}</a>
                  </li>
                ))}
              </div>
            </li>
          </ul>
          <li style={{ listStyle: 'none' }}>
            <a className="productNav" href="/error">
              <img src={cart} alt="" />
            </a>
          </li>
        </div>
      </div> 
    </div>
   
  );
};

export default Navbar;
