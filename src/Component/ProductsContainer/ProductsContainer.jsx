import ProductCard from "../ProductCard/ProductCard";
import "./ProductsContainer.css"
const ProductsContainer=({data})=>{
    return(
        <div className="row">
        
            <ProductCard data={data}/>
     
        </div>
    )
}
export default ProductsContainer;