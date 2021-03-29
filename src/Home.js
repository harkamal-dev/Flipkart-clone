import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
      <div className="product-divv">
        <div className="three-product">
        <Product 
          id="1"
          img="https://static.bhphoto.com/images/images2500x2500/1565204800_1491588.jpg"
          title="SAMSUNG Galaxy Watch 46 mm Smartwatch"
          sale="Flat 60% off"
          price={799}
        />
        <Product 
        id="2"
        img="https://rukminim1.flixcart.com/image/800/960/k5si2kw0/shoe/e/z/g/1763-blue-10-rewarm-blue-original-imafn3ysupytxyrn.jpeg?q=50"
        title="Running Shoes For Men Nike air lightweight (Blue)"
        sale="Upto 40% off"
        price={349}
        />
        <Product 
        id="3"
        img="https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96ydu4getz7.jpeg?q=70        "
        title="BoAt BassHeads 900 Headset For men(Black)"
        sale="Flat 70% off"
        price={699}
        />
      </div>

      <div className="three-product-one">
        <Product 
        id="4"
        img="https://rukminim1.flixcart.com/image/416/416/k6l2vm80/computer-table/z/y/a/mdf-fk-28-limraz-furniture-brown-original-imafzy9ytkbegxg4.jpeg?q=70        "
        title="limraz furniture L 56 Engineered Table"
        sale="57% off"
        price={1179}/>
        <Product 
        id="5"
        img="https://rukminim1.flixcart.com/image/416/416/kikluvk0-0/office-study-table/j/k/u/particle-board-vi-ct-ph-ost-rw-14-flipkart-perfect-homes-studio-original-imafybz4cymgzyst.jpeg?q=70"
        title="Flipkart Perfect Homes Studio Noel Study Table  "
        sale="Flat 25% off"
        price={5590}/>
        <Product 
        id="6"
        img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1558081097.74988216.jpg"
        title="mi 4A PRO 80 cm (32 inch) HD LED Smart Android TV"
        sale="Flat 70% off"
        price={11999}/>
      </div>
        </div>
        
    )
}

export default Home
