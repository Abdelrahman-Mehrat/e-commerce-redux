import "./ProductCard.css"
const ProductCard=({data})=>{
    return(
        <>
            {data?.map((singleProduct) => (
                <div className=" col-md-4 p-3" id={singleProduct.id} key={singleProduct.id}>
            <div className="card product-card h-100">
              <div className="text-center">
                <img src={singleProduct.url} />
              </div>
              <div className="card-body">
                <h3>
              {singleProduct.title}
                </h3>              
              </div>
              <div class="card-footer">
        <small class="text-muted">{singleProduct.category}</small>
      </div>
            </div>
                </div>
          ))}
        </>
    )
}
export default ProductCard;