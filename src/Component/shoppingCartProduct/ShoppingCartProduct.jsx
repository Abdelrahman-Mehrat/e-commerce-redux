import "./shoppingCartProduct.css";
import { useDispatch } from "react-redux";
import {
  changeProductQuantity,
  removeFromCart,
} from "../../redux/shoppingSlice";
import { RiDeleteBack2Line } from "react-icons/ri";
const ShoppingCartProduct = ({ singleShopCart }) => {
  // removeFromCart
  const dispatch = useDispatch();
  const removeProduct = (payload) => {
    dispatch(removeFromCart(payload));
  };
  return (
    <div className="d-flex shopping-product" key={singleShopCart.id}>
      <div className="img-container">
        <img src={singleShopCart.url} alt="" className="w-100" />
      </div>
      <div className="flex-grow-1 ps-3 card_details">
        <div>
          <p className="mb-0">
            <span>Product name: </span> {singleShopCart.title}
          </p>
          <p>
            <span>Product ID: </span> {singleShopCart.id}
          </p>
        </div>
        <button
          className="remove_btn"
          onClick={() => {
            removeProduct(singleShopCart);
          }}
        >
          <RiDeleteBack2Line /> Delete
        </button>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button
            className="increase-dec_btn"
            onClick={() =>
              dispatch(
                changeProductQuantity({
                  product: singleShopCart,
                  type: "increment",
                })
              )
            }
          >
            +
          </button>
          <span>Quantity {singleShopCart.quantity}</span>
          <button
            className="increase-dec_btn"
            onClick={() =>
              dispatch(
                changeProductQuantity({
                  product: singleShopCart,
                  type: "decrement",
                })
              )
            }
          >
            -
          </button>
        </div>
      </div>
      <p className="price">{singleShopCart.price}$</p>
    </div>
  );
};
export default ShoppingCartProduct;
