import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartProduct from "../../Component/shoppingCartProduct/ShoppingCartProduct";
import { removeAllCart } from "../../redux/shoppingSlice";
import "./ShoppingPage.css"
const ShoppingPage=()=>{
    const shopList = useSelector((state)=>state.shoppingCart.shoppingProducts)
    const totalPrice = useSelector((state)=>state.shoppingCart.shoppingTotalPrice)
    const productsQuantity = useSelector((state)=>state.shoppingCart.shoppingQuantity)
    const dispatch = useDispatch()

    return(
        <section className="ShoppingPage">
            <div className="container">
                    <div className="row">
                        <div className="col-md-9 cards-container">
                            <h3>Shopping Cart</h3>
                            <div>
                                {
                                    shopList.length > 0 ?
                                    shopList.map((singleShopCart)=>{
                                        return(
                                            
                                            <ShoppingCartProduct singleShopCart={singleShopCart}/>   
                                        )
                                    })
                                    :
                                    <p>No items to show</p>
                                }
                            </div>
                        </div>
                        <div className="col-md-3 subtitle-container pb-5">
                        <h3>Subtotal</h3>
                            <div className="subtitle-card">
                                <p>Total items : {productsQuantity}</p>
                                <p>Total Price : {totalPrice}$</p>
                                <button className="add-to-card-btn subtitle_btn mt-3">Buy</button>
                            <button className="remove_btn mt-3" onClick={()=>{dispatch(removeAllCart())}}>Delete All items</button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default ShoppingPage;