import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContextProvider from "./Context/StoreContex.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
      <ToastContainer autoClose={1100} />
    </StoreContextProvider>
  </BrowserRouter>
);
