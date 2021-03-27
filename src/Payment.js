import React from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';

import Icon from '@material-ui/core/Icon';

function Payment() {

    const [{basket,user},dispatch] = useStateValue();

    const getTotalBasket=(basket) =>
    basket?.reduce((amount,item) => item.price + amount , 0);

    return (
        <>
        <div className="payment-container">
            <div className="left-divsss">
            <div className="left-div">
                <div className="header-payment">
                    <h3>PAYMENT OPTIONS</h3>
                </div>

            <div className="payment-radios-div">
                <label className="upi-label left-div-cont"><input type="radio"></input>
                <img src="https://img1a.flixcart.com/linchpin-web/batman-returns/logos/upiLogo6.gif" />UPI</label>
                <label className="debitcard-label left-div-cont"><input type="radio"></input>Debit/Credit/ATM card</label>
                <label className="emi-label left-div-cont"><input type="radio"></input>EMI (Easy Installments)</label>
                <label className="cod-label "><input type="radio"></input>Cash on Delivery</label>
            </div>
            </div>

            <div className="left-div-1">
                <div className="gift-card">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1616825769~hmac=c0c7ebad31c4050e4c940208268b8bb6" alt=""></img>
                     <div className="gift-span">Add Gift Card</div>
                </div>
            </div>

            <div className="gift-span return-span">Safe and Secure Payments. Easy Returns. 100% Authentic Products</div>            
            </div>

            


<div className="right-containers">
            <div className="right-div">
                <div className="right-header right-div-cont"><h3>PRICE DETAILS</h3> </div>
                <div className="right-price right-div-cont">Price(1 item)
                    <p className="right-price-p1">₹{getTotalBasket(basket)}</p>
                </div>
                <div className="right-delivery right-div-cont">Delivery Charges
                    <p className="right-price-p2">FREE</p>
                </div>

                <div className="right-total right-div-cont">
                    <h2>Amount Payable</h2>
                    <h2 className=" right-price right-price-p3">₹{getTotalBasket(basket)}</h2>
                </div>
            </div>


            <div className="right-div right-div-1">
                <div className="right-header right-div-cont-1"><h3>OFFERS</h3> </div>
                <div className="right-price-1 right-div-cont-1">
                    <p className="right-price-1 offers-p">10% off on SBI Credit Card first time transaction, Terms and Conditions apply</p>
                </div>
                <div className="right-price-1 right-div-cont-1">
                    <p className="right-price-1 offers-p">5% Unlimited cashback on Flipkart Axis Bank Credit Card</p>
                </div>

                <div className="right-price-1 right-div-cont-1">
                    <p className="right-price-1 offers-p">No Cost EMI on Flipkart Axis Bank Credit Card</p>
                </div>
            </div>

            </div>


            
        </div>
        <div  className="pay"><button >Place Order</button></div>

</>
        
    )
}

export default Payment
