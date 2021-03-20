import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import './reducer';
import {useStateValue } from './StateProvider';

function Header() {

    const [{basket},dispatch] = useStateValue();

    
    return (
        <div>
            <div className='header'>
                <Link to='/'>
                    <img className="header-image" alt='' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>
                </Link>
                
                <input type="text" placeholder="Search for products,brands or more">
                </input>
                <img className="search-image" alt=" " src="https://www.flaticon.com/svg/vstatic/svg/3003/3003596.svg?token=exp=1616230210~hmac=85d431ba4c27aadcbbf86f07015c8a93"></img>

                <span className='header-children'>
                    <h3>Login</h3>
                    <h3>more</h3>
                    <Link to='/Checkout'>
                        <h3 className="cart-count">{basket.length}</h3>
                        <img onClick={()=>{}} src="https://newbuckethk.s3.ap-south-1.amazonaws.com/shopping-cart.png" alt=""></img>
                        <h3 className="cart-icon">cart</h3>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Header;
