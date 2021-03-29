import React from 'react'
import DealProducts from './DealProducts'
import './Deals.css'
import Timer from './Timer'

function Deals() {
    return (
        <div className="deal-div">
            <div className="deal-header">
                <div className="deal-header-heading"><h3>Deals of the Day</h3></div>
                <img className="timer-image" src="https://www.flaticon.com/svg/vstatic/svg/850/850960.svg?token=exp=1617026843~hmac=42bc27ef7df801a704dff5aa7cffbe6d" alt="" />
                <div className="timer-div"><Timer /></div>
                
                <button className="deal-button">View All</button>
            </div>
            <div className="div-body">
                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/416/416/air-cooler/w/e/p/md-2020-bajaj-original-imaergyyvqhjxyhh.jpeg?q=70"
                    title="Window Air Cooler"
                    sale="70% Off"
                    company="Bajaj, Symphony or more"
                />

                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/416/416/jl6wjgw0/speaker-refurbished/w/f/3/u-a110-f-d-original-imaf8dugbygcue2v.jpeg?q=70"
                    title="Speakers"
                    sale="Upto 50% Off"
                    company="Boat, Intex or more"
                />

                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/800/960/kc0u7bk0/sari/t/h/j/free-1363s505-1458s150-saara-unstitched-original-imaft8yfakcsvfme.jpeg?q=50"
                    title="Printed Sarees"
                    sale="Upto 80% Off"
                    company="Libas, Zara & more"
                />

                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/416/416/jy0frm80/deodorant/g/f/p/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg?q=70"
                    title="Deodrants and Perfumes"
                    sale="70% Off"
                    company="Denver, Fogg or more"
                />

                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/416/416/kdhphu80/data-cable/micro-usb-cable/j/v/h/flipkart-smartbuy-amrbr1m04-original-imafudyfwsa5cz4v.jpeg?q=70"
                    title="Cables and Chargers"
                    sale="90% Off"
                    company="Bajaj, Symphony or more"
                />

                <DealProducts 
                    img="https://rukminim1.flixcart.com/image/416/416/kirr24w0/racquet/t/u/w/g3-3-5-inches-strung-combat-pro-8000-1-br06-84-badminton-racquet-original-imafyhcgzajaqxcu.jpeg?q=70"
                    title="Sports gear"
                    sale="50% Off"
                    company="Badminton, Football or more"
                />
            </div>
        </div>
    )
}

export default Deals
