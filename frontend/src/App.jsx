import Navbar from "./componets/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlacedOrder from "./pages/PlacedOrder/PlacedOrder";
import Footer from "./componets/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;