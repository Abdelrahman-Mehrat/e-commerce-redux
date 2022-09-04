import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProductCard.css";
const ProductCard = () => {
  const products = useSelector((state) => state.fetchProduct.products);
  const filteredProducts = useSelector(
    (state) => state.fetchProduct.filteredProducts
  );

  useEffect(() => {
    console.log(filteredProducts);
  }, []);
  return (
    <>
      {products?.map((singleProduct) => (
        <div
          className=" col-md-4 p-3"
          id={singleProduct.id}
          key={singleProduct.id}
        >
          <div className="card product-card h-100">
            <div className="text-center p-1 card_img-container">
              <img src={singleProduct.url} />
            </div>
            <div className="card-body">
              <p className="card-title">{singleProduct.title}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{singleProduct.category}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProductCard;
