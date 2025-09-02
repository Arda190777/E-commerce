import React from 'react'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';


function ProductList() {
    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product);
    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    


  return (
    <div className='flex-row' style={{flexWrap: 'wrap', marginTop: '35px'}}>
        {
            products && products.map((product)=>(
                <Product key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default ProductList