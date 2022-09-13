import { Link } from "react-router-dom";
import "./HeroSection.css"
const HeroSection = () => {

  return (
    <section className="Home-page">
        <div className="Home-page_img">
                <div className="container Home-page_text-container d-flex align-items-center ">
                    <div>
                <h1 className="CairoBold home_title mb-3">E-commerce</h1>
                <Link className="add-to-card-btn home_btn" to="/homeproduct">
                Start shopping
              </Link>
              
                    </div>
                </div>
        </div>
    <div className="container">
        <section className="category-cards mt-2">
            <h2 className="text-center category-title">Category</h2>
            <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="category_card_wrapper card ">
    <div className="img_container">
      <img className="w-100" src={`https://res.cloudinary.com/practice-nodejs-project/image/upload/v1661893254/ecommerce%20react-nodejs/shoes/shoes6_fzwpri.jpg`} alt="" />
    </div>
      <div className="categorytitle">Shoes</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category_card_wrapper card ">
    <div className="img_container">
      <img className="w-100" src={`https://res.cloudinary.com/practice-nodejs-project/image/upload/v1661893252/ecommerce%20react-nodejs/watch/watch6_vnlgtd.jpg`} alt="" />
    </div>
      <div className="categorytitle">Watches</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category_card_wrapper card ">
    <div className="img_container">
      <img className="w-100" src={`https://res.cloudinary.com/practice-nodejs-project/image/upload/v1661893214/ecommerce%20react-nodejs/pants/pants3_fols3x.jpg`} alt="" />
    </div>
      <div className="categorytitle">Pants</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category_card_wrapper card ">
    <div className="img_container">
      <img className="w-100" src={`https://res.cloudinary.com/practice-nodejs-project/image/upload/v1661893233/ecommerce%20react-nodejs/shirt/shirt1_bg8tcs.jpg`} alt="" />
    </div>
      <div className="categorytitle">Shirts</div>
              </div>
            </div>
            </div>
        </section>
    </div>
    </section>
  );
};
export default HeroSection;
