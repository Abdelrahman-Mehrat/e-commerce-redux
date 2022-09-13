import { useState } from "react";
import { useEffect } from "react";
import "./ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shoppingSlice";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/homeproduct/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setSelectedProduct(data));
  }, []);

  return (
    <section className="single-product">
      <div className="container ">
        <div className="row">
          <div className="col-md-5 col-9 col-sm-6 ">
            <figure>
              <img src={selectedProduct?.url} alt="" className="w-100" />
            </figure>
          </div>
          <div className="col-md-7">
            <div>
              <h2 className="">{selectedProduct?.title}</h2>
              <p>Details: {selectedProduct?.desc}</p>
              <span className="product-price">
                Price: {selectedProduct?.price}$
              </span>
              <div className="CairoBold d-flex justify-content-between align-items-center mt-3">
                <button
                  className="backBtn backBtn_style"
                  onClick={() => {
                    dispatch(addToCart(selectedProduct));
                  }}
                >
                  Add to cart
                </button>
                <span>
                  <button
                    className="backBtn"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Back
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
