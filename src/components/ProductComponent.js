import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
const ProductComponent=()=>{
    const products=useSelector(state=>state.allProducts.products)
    console.log(products);
    const renderList=products.map((product)=>{
        const { id, title, image, price, category } = product;
        return (
        <div className=' column ' key={id}>
            <Link to={`/products/${id}`}  >
                <div className='card'>
                        <div className='img'>
                            <img src={image} title={title} />
                        </div>
                        <div className='content'>
                            <div className='headerTitle'>{title}</div>
                            <div className='price'>$ {price}</div>
                            <div className='cat'>{category}</div>
                        </div>

                </div>
            </Link> 
        </div>
        )
    })
    return(
        <div className='grid'>{renderList}</div>
        )
}
export default ProductComponent