import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectedProduct } from "../containers/Redux/actions/productActions";
import { removeSelectedProduct } from "../containers/Redux/actions/productActions";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const product = useSelector((state) => state.selectedProduct);
  const { id, title, image, price, category, description } = product;
  console.log(product);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
    return ()=>{
        dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return (
    <div>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div className='center'>...Loading</div>
        ) : (
          <div className="ui two column stackable center aligned grid column">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown black header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      )
    </div>
  );
};
export default ProductDetails;
