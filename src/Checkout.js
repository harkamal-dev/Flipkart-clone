import React from 'react'
import './Checkout.css';
import './reducer';
import { getTotalBasket } from './reducer';
import {useStateValue} from './StateProvider';

function Checkout({id,img,title,sale,price}) {
        
  const [ {basket},dispatch] = useStateValue();

        return (<>
<div className="small-container cart-page">
    <div className="checkout-heading">
      <div>Product</div>
      <div>Subtotal</div>
    </div>

    <div className="cart-items-list">
          <div><img src={img} alt=""></img></div>
                <div><strong>{title}</strong></div>
                <div  className="flat-off"><p>{sale}</p></div>
                <div className="price"><h3>{price}</h3></div>
                <button className="add-to-basket-btn">Add to basket</button>
    </div>


  </div>

  <div className="total-price-new">
    <div>Subtotal({basket.length} items) : </div>
    <div>Total : {getTotalBasket(basket)}</div>
</div>


<div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h3>Download Our App</h3>
        <p>Download App for Android and iso mobile phone.</p>
        <div className="app-logo">
          <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
          <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
        </div>
      </div>

      <div className="footer-col-2">
        <img src="" alt="" />
        <p>
          Our Purpose Is To Sustainably Make the Pleasure and Benefits of
          Sports Accessible to the Many.
        </p>
      </div>

      <div className="footer-col-3">
        <h3>Useful Links</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Post</li>
          <li>Return Policy</li>
          <li>Join Affiliate</li>
        </ul>
      </div>

      <div className="footer-col-4">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <hr />
    
  </div>
</div>
</>
        )
    }
    
    export default Checkout