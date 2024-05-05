import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/add/Add";
import List from "./Pages/list/List";
import Orders from "./Pages/orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
