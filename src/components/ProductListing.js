import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { setProducts } from '../containers/Redux/actions/productActions'
import ProductComponent from './ProductComponent'

const ProductListing=()=>{
    const products=useSelector(state=>state)
    console.log(products);
    const {name,email}=products
    const dispatch=useDispatch();
    const fetchProducts=async ()=>{
        const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log('Error',err))
        console.log(response.data);
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    return (
       <div>
           <ProductComponent />
       </div>
    )
}
export default ProductListing