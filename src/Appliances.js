import React from 'react'
import BestAppliance from './BestAppliance'
import './Deals.css'


function Appliances() {
    return (
        <div className="appliance-div">
            <div className="deal-header">
                <div className="deal-header-heading"><h3>Best Appliances</h3></div>
                
                <button className="deal-button appliance-button">View All</button>
            </div>
            <div className="div-body">
                <BestAppliance 
                    img="https://rukminim1.flixcart.com/image/416/416/kltryq80/electric-kettle/d/n/3/electric-kettle-and-egg-cooker-kent-original-imagyv9hgxzy8yd8.jpeg?q=70"
                    title="Electric Kettles"
                    sale="Upto 70% Off"
                    company="Bajaj, Symphony or more"
                />

                <BestAppliance 
                    img="https://rukminim1.flixcart.com/image/800/960/bangle-bracelet-armlet/q/a/f/7-1-1-om-mani-padme-hum-engraved-multi-stone-crystal-bracelet-original-imaeqjgw46haheus.jpeg?q=50"
                    title="Yellow Chimes"
                    sale="Upto 50% Off"
                    company="Boat, Intex or more"
                />

                <BestAppliance 
                    img="https://rukminim1.flixcart.com/image/800/960/ki96c280-0/shoe/k/m/s/foryou-5-quince-white-original-imafy39sddsu2ehg.jpeg?q=50"
                    title="Sport shoes & Sneakers"
                    sale="Upto 80% Off"
                    company="Libas, Zara & more"
                />

                <BestAppliance 
                    img="https://rukminim1.flixcart.com/image/800/960/kjuby4w0/cargo/d/3/z/34-cargo451mk-kronmenien-original-imafzbvyrbjyh6ef.jpeg?q=50"
                    title="Men's Cargo"
                    sale="70% Off"
                    company="Denver, Fogg or more"
                />

                <BestAppliance 
                    img="https://rukminim1.flixcart.com/image/416/416/kku1yfk0/fan/f/v/s/apsra-5-star-pack-of-two-60-2-1200-ceiling-fan-activa-original-imagy3e9e2aj3yzk.jpeg?q=70"
                    title="Fans"
                    sale="90% Off"
                    company="Bajaj, Symphony or more"
                />

                <BestAppliance
                    img="https://rukminim1.flixcart.com/image/416/416/k0igia80/smart-lighting/f/t/r/sb0110-b22-led-smitch-original-imafka9umvxwrecq.jpeg?q=70"
                    title="Experience the change"
                    sale="50% Off"
                    company="Badminton, Football or more"
                />
            </div>
        </div>
    )
}

export default Appliances