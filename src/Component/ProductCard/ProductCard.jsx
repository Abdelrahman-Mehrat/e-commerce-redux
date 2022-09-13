import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/shoppingSlice";
import { BsEmojiSmile } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
const ProductCard = () => {
  const [show, setShow] = useState(false);
  //Redux
  const products = useSelector((state) => state.fetchProduct.products);
  const filteredProducts = useSelector(
    (state) => state.fetchProduct.filteredProducts
  );
  const dispatch = useDispatch();
  // Add to list function
  const favIconFunc = (e) => {
    e.stopPropagation();
  };
  const addToCard = (e, payload) => {
    e.stopPropagation();
    dispatch(addToCart(payload));
    // navigate(`./shopping`);

    setShow(false);
    let removeAlert;
    clearTimeout(removeAlert);
    setTimeout(() => {
      setShow(true);
    }, 500);

    removeAlert = setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  // card Link
  const navigate = useNavigate();
  return (
    <>
      <Alert
        show={show}
        key={"info"}
        variant={"info"}
        className="addCard_alert"
      >
        Product added to cart
      </Alert>
      {filteredProducts.length > 0
        ? // Filter
          filteredProducts.map((singleProduct) => (
            <div
              className="col-lg-4    p-3 col-sm-6"
              id={singleProduct.id}
              key={singleProduct.id}
            >
              <div
                onClick={() => {
                  navigate(`./product/${singleProduct.id}`);
                }}
                className="Link_noStyle card product-card h-100"
              >
                <button
                  className="card_fav-icon"
                  onClick={(e) => {
                    favIconFunc(e);
                  }}
                >
                  <BsEmojiSmile />
                </button>
                <div className="text-center p-1 card_img-container">
                  <img src={singleProduct.url} />
                </div>
                <div className="card-body">
                  <p className="card-title CairoBold mb-0 d-flex justify-content-between">
                    <span>{singleProduct.title}</span>{" "}
                    <span>{singleProduct.price}$</span>{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Category: {singleProduct.category}
                  </small>
                </div>
                <button
                  className="add-to-card-btn"
                  onClick={(e) => {
                    addToCard(e, singleProduct);
                  }}
                >
                  Add to list{" "}
                </button>
              </div>
            </div>
          ))
        : // all products
          products.map((singleProduct) => (
            <div
              className="col-lg-4    p-3 col-sm-6"
              id={singleProduct.id}
              key={singleProduct.id}
            >
              <div
                onClick={() => {
                  navigate(`./product/${singleProduct.id}`);
                }}
                className="Link_noStyle card product-card h-100"
              >
                <button
                  className="card_fav-icon"
                  onClick={(e) => {
                    favIconFunc(e);
                  }}
                >
                  <BsEmojiSmile />
                </button>
                <div className="text-center p-1 card_img-container">
                  <img src={singleProduct.url} />
                </div>
                <div className="card-body">
                  <p className="card-title CairoBold mb-0 d-flex justify-content-between">
                    <span>{singleProduct.title}</span>{" "}
                    <span>{singleProduct.price}$</span>{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Category: {singleProduct.category}
                  </small>
                </div>
                <button
                  className="add-to-card-btn"
                  onClick={(e) => {
                    addToCard(e, singleProduct);
                  }}
                >
                  Add to list{" "}
                </button>
                
              </div>
            </div>
          ))}
    </>
  );
};
export default ProductCard;
