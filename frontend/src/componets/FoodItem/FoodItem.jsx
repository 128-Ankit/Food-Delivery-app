import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContex";
import "./FoodItem.css";

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, food_list } =
    useContext(StoreContext);
  console.log(cartItems);
//   const [loading, setLoading] = useState(false);
//   if (!cartItems) {
//     setLoading(true);
//   }
  return (
    <>
      {(!food_list || !cartItems) ? (
        "loading data"
      ) : (
        <div className="food-item">
          <div className="food-item-img-container">
            <img
              className="food-item-image"
              src={`${url}/images/${image}`}
              alt=""
            />
            {!cartItems[id] ? (
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
              />
            ) : (
              <div className="food-item-counter">
                <img
                  onClick={() => removeFromCart(id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
                <p>{cartItems[id]}</p>
                <img
                  onClick={() => addToCart(id)}
                  src={assets.add_icon_green}
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
