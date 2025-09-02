import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { use } from 'react';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const { id } = useParams(); // URL'den id parametresini alıyoruz
    const { products, selectedProduct } = useSelector((store) => store.product); // Redux store'dan products ve selectedProduct state'ini alıyoruz
    const dispatch = useDispatch();
    const { price, image, title , description} = selectedProduct;
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1); 

    }

    const decrement =()=>{
        setCount(count - 1);
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,  
            description,
            count

        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, []); 

    const getProductById = () => {
        products && products.map((product)=>{
            if(product.id == id){
                dispatch(setSelectedProduct(product));
                
        }
        }
    ,);};

    return (
        <div className='flex-row' style={{marginTop: '30px'}} >
            <div style={{marginRight: '40px'}}>
            <img src={image} width={300} height={500} alt="" />
           </div>
           <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h1>{price} $</h1>
            <div  style={{ display:'flex' , alignItems: 'center', }}>
                <CiCirclePlus onClick={increment} style={{fontSize:'40px', marginRight: '5px'}}/> <span style={{fontSize: '30px' }}>{count}</span> <CiCircleMinus onClick={decrement} style={{fontSize:'40px', marginLeft: '5px'}}/>
            </div>
            <div>
                <button onClick={addBasket} style={{marginTop:'25px', border: 'none', padding: '10px', backgroundColor: 'orange', borderRadius:'5px'}}>Add a cart</button>
            </div>
           </div>
        </div>
    );
}

export default ProductDetails;