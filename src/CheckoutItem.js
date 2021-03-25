import React from 'react'
import './CheckoutItem.css';
import './reducer';
import {useStateValue} from './StateProvider';

function CheckoutItem({id,title,img,sale,price}) {

    const [{basket},dispatch] = useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
                id:id,
            }
        )
    }


    return (
        <div className="cart-item-div">
            <img className="cart-item-image" src={img} alt=""></img>
            
            <div className="right-div-cart">
            <strong className="cart-item-title">{title}</strong>
            <p className="cart-item-sale">{sale}</p>
            <div className="remove-from-cart">
            <button onClick={removeFromBasket} className="add-to-basket-btn ">Remove from cart</button>
            </div>
            
            </div> 
            <div className="item-cart-price">₹{price}</div>




            
            {/*<strong className="cart-item-price">{price}</strong> */}
        </div>
    )
}

export default CheckoutItem
