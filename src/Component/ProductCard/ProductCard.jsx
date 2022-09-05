import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = () => {
  const products = useSelector((state) => state.fetchProduct.products);
  const filteredProducts = useSelector(
    (state) => state.fetchProduct.filteredProducts
  );
 
  return (
    <>

      {
        filteredProducts.length > 0 
        ?
        // Filter 
        filteredProducts.map((singleProduct) => (
          <div
            className="col-lg-4    p-3 col-sm-6 "
            id={singleProduct.id}
            key={singleProduct.id}
          >
            <Link to={`./product/${singleProduct.id}`} className="Link_noStyle card product-card h-100 product-card-wrapper">
              <div className="text-center p-1 card_img-container">
                <img src={singleProduct.url} />
              </div>
              <div className="card-body">
                <p className="card-title CairoBold mb-0 d-flex justify-content-between"><span>{singleProduct.title}</span> <span>{singleProduct.price}$</span> </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Category: {singleProduct.category}</small>
              </div>
            </Link>
          </div>
        ))
        // all products
        : products.map((singleProduct) => (
        <div
          className="col-lg-4    p-3 col-sm-6"
          id={singleProduct.id}
          key={singleProduct.id}
        >
          <Link to={`./product/${singleProduct.id}`} className="Link_noStyle card product-card h-100">
            <div className="text-center p-1 card_img-container">
              <img src={singleProduct.url} />
            </div>
            <div className="card-body">
              <p className="card-title CairoBold mb-0 d-flex justify-content-between"><span>{singleProduct.title}</span> <span>{singleProduct.price}$</span> </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Category: {singleProduct.category}</small>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default ProductCard;
