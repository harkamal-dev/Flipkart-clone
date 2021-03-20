import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div>
            <div className="three-product">
        <Product 
          id="1"
          img="https://rukminim1.flixcart.com/image/416/416/jmz7csw0/smartwatch/t/z/x/sm-r800nzsainu-samsung-original-imaf9rvuq4nwfe5f.jpeg?q=70"
          title="SAMSUNG Galaxy Watch 46 mm Smartwatch"
          sale="Flat 60% off"
          price="₹799"
        />
        <Product 
        id="2"
        img="https://rukminim1.flixcart.com/image/800/960/k5si2kw0/shoe/e/z/g/1763-blue-10-rewarm-blue-original-imafn3ysupytxyrn.jpeg?q=50"
        title="Running Shoes For Men  (Blue)"
        sale="Upto 40% off"
        price="₹349"
        />
        <Product 
        id="3"
        img="https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96ydu4getz7.jpeg?q=70        "
        title="BoAt BassHeads 900 Headset (Carbon Black)"
        sale="Flat 70% off"
        price="₹699"
        />
      </div>

      <div className="three-product-one">
        <Product 
        id="4"
        img="https://rukminim1.flixcart.com/image/416/416/k6l2vm80/computer-table/z/y/a/mdf-fk-28-limraz-furniture-brown-original-imafzy9ytkbegxg4.jpeg?q=70        "
        title="limraz furniture L 56 Engineered Wood Study Table  (Free Standing, Finish Color - brown)"
        sale="57% off"
        price="₹1179"/>
        <Product 
        id="5"
        img="https://rukminim1.flixcart.com/image/416/416/kikluvk0-0/office-study-table/j/k/u/particle-board-vi-ct-ph-ost-rw-14-flipkart-perfect-homes-studio-original-imafybz4cymgzyst.jpeg?q=70"
        title="Flipkart Perfect Homes Studio Noel Dual Tone Engineered Wood Study Table  "
        sale="Flat 25% off"
        price="₹5590"/>
        <Product 
        id="6"
        img="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70"
        title="mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV with Google Data Saver"
        sale="Flat 70% off"
        price="₹11999"/>
      </div>
        </div>
    )
}

export default Home
