import React, { useEffect } from "react";
import "./Home.css";
import { add } from "../redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../redux/Productslice";

const Home = () => {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  });

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // if (status === STATUSES.Loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" className="card-img" />
          <div className="card-body">
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <button className="btn" onClick={() => handleAdd(product)}>
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
