import "./ProductCard.css"
const ProductCard=({data})=>{
    return(
        <>
            {data?.map((singleProduct) => (
                <div className=" col-md-4 p-3" id={singleProduct.id} key={singleProduct.id}>
            <div className="card product-card h-100">
              <div className="text-center p-1">
                <img src={singleProduct.url} />
              </div>
              <div className="card-body">
                <p className="card-title">
              {singleProduct.title}
                </p>              
              </div>
              <div className="card-footer">
        <small className="text-muted">{singleProduct.category}</small>
      </div>
            </div>
                </div>
          ))}
        </>
    )
}
export default ProductCard;