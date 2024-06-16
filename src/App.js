import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Cart from "./container/Cart";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
