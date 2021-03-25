import React from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import './reducer';
import {useStateValue} from './StateProvider';

function Checkout() {
        
  const [ {basket},dispatch] = useStateValue();

const getTotalBasket=(basket) =>

    basket?.reduce((amount,item) => item.price + amount , 0);    

        return (<>
<div className="small-container cart-page">
    <div className="checkout-heading">
      <div><strong className="header-checkout-1">Items</strong></div>
      <div className="header-checkout-2"><strong>Price</strong></div>
    </div>


    {basket.map(item=> (
      <CheckoutItem 
        id={item.id}
        img={item.img}
        price={item.price}
        title={item.title}
        sale={item.sale}
      />
    ))}

    {/* <div className="cart-items-list">
          <div><img src="" alt=""></img></div>
                <div><strong>title</strong></div>
                <div  className="flat-off"><p>sale</p></div>
                <div className="price"><h3>price</h3></div>
                <button className="add-to-basket-btn">Add to basket</button>
    </div> */}


  </div>

  <div className="total-price-new">
    <div><strong>Total</strong>({basket.length} items): ₹<strong>{getTotalBasket(basket)} </strong> </div>

</div>



<Link to="/login">
<div className="proceed-checkout">
  <button >Proceed to checkout</button>
</div>
</Link>


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