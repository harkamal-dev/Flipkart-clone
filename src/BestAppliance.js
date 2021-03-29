import React from 'react'
import './Deals.css'

function BestAppliance({img,title,sale,company}) {
    return (
        <div>
            <div className="deal-product">
                    <div><img src={img} alt=""></img></div>
                    <div><strong className="pricee">{title}</strong></div>
                    <div  ><p>{sale}</p></div>
                    <div className="company"><p>{company}</p></div>
            </div>
        </div>
    )
}

export default BestAppliance
