import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);
    const navigate = useNavigate();


  // API call
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <h1> My Product List</h1>

      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.images?.[0]} alt={item.title} />
            <h3>{item.title.slice(0, 40)}...</h3>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}