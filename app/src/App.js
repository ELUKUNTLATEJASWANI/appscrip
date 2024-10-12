
import React, { useState ,useEffect} from 'react';
import Header from './componets/header';
import './App.css';
import Footer from './componets/footer';
import SecondFooter from './componets/secondFooter'; 

function App() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <div className="item-filter-section">
        <div className="item-count-filter">
          <span className="item-count">3425 Items</span>
          <span className="filter-toggle" onClick={toggleFilter}>
            {filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </span>
        </div>
        <div className="sort-dropdown">
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div >
      <div className="main-content">
      {filterVisible && (
        <div className="filter-section">
           <div className="filter-item">
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion">
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="work">Work:</label>
            <select id="work" name="work">
              <option value="office">Office</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="fabric">Fabric:</label>
            <select id="fabric" name="fabric">
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="segment">Segment:</label>
            <select id="segment" name="segment">
              <option value="luxury">Luxury</option>
              <option value="casual">Casual</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="suitableFor">Suitable For:</label>
            <select id="suitableFor" name="suitableFor">
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="rawMaterials">Raw Materials:</label>
            <select id="rawMaterials" name="rawMaterials">
              <option value="cotton">Cotton</option>
              <option value="leather">Leather</option>
            </select>
            
          </div>
          <div className="filter-item">
            <label htmlFor="pattern">PATTERN</label>
          
            <select id="pattern">
              <option>Unselect all</option>
            </select>
            
          </div>
        </div>
      )}
        <div className="product-section">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
              
                {product.rating?.count === 0 && <p className="out-of-stock">Out of Stock</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <SecondFooter /> 
    </div>
  );
}

export default App;
