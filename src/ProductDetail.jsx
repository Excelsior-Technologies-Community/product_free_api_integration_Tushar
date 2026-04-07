import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="ProductDetail">
  <div className="left">
    <button onClick={() => navigate(-1)}>⬅ Back</button>

    <img
      src={product.images?.[0]}
      alt={product.title}
    />
  </div>

  <div className="right">
    <h1>{product.title}</h1>
    <h2>₹ {product.price}</h2>
    <p>{product.description}</p>

    <button>Add to Cart 🛒</button>
  </div>
</div>
  );
}