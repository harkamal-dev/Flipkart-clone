import React from 'react';
import "./Product.css";
import './Home';
import {useStateValue} from './StateProvider';

function Product({id,img,title,sale,price}) {

    const [ {basket},dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                img:img,
                title:title,
                sale:sale,
                price:price,
            }
            }
        )
        
    }

    return (
            <div className="product-container">
                
                <div><img src={img} alt=""></img></div>
                <div><strong className="pricee">{title}</strong></div>
                <div  className="flat-off"><p>{sale}</p></div>
                <div className="price"><h3>₹{price}</h3></div>
                <button onClick={addToBasket} className="add-to-basket-btn">Add to cart</button>
            </div>
    )
}

export default Product
