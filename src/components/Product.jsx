import React from 'react'
import '../CSS/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id, price, image, title , description} = product;
    
    const navigate = useNavigate();
  return (
    <div className='card'>
        <img className='images' src={image} alt="" />
        <div>
            <p style={{textAlign:"center"}}>{title}</p>
            <h4 style={{textAlign:"center"}}>{price} $</h4>
        </div>
        <div className='flex-row'>
            <button onClick={()=> navigate("/product-details/" + id)} className='button-detail'>Detail</button>
        </div>
    </div>
  )
}

export default Product