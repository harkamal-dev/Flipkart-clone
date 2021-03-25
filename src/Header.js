import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import './reducer';
import {useStateValue } from './StateProvider';

function Header() {

    const [{basket},dispatch] = useStateValue();
    
    return (
        <div className="header-divv">
            <div className='header'>
                <Link to='/'>
                    <img className="header-image" alt='' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>
                </Link>
                
                <input className="header-input" type="text" placeholder="Search for products...">
                </input>
                <img className="search-image" alt=" " src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-search-vector-icon-png-image_696422.jpg"></img>

                <span className='header-children'>
                    
                    <Link to='/Login'>
                    <h3 className="login-page">Login</h3>
                    </Link>
                    
                    <h3 className="more-item">More</h3>

                    <Link to='/Checkout'>
                        
                        <img onClick={()=>{}} src="https://newbuckethk.s3.ap-south-1.amazonaws.com/shopping-cart.png" alt=""></img>
                        
                    </Link>
                    <Link to='/Checkout'>
                    <strong className="cart-count">{basket.length}</strong>
                    <div className="cart-icon"><strong >cart</strong></div>
                    </Link>
                    
                </span>
            </div>
        </div>
    )
}

export default Header;
