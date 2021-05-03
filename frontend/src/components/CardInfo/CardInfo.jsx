import React from 'react'
import './CardInfo.scss'

function CardInfo({ icon, title, desc, content, btnTitle, latestIcon }) {
    return (
        <div className="card-cpn">
            <div className="card__top">
                <div className="card__title">
                    <span><i class={icon}></i></span>
                    <h3>{title}</h3>
                </div>
                <h5> {desc}</h5>
                <h6> {content}</h6>
            </div>

            <div className="down-btn">
                <h4> <p>{btnTitle}</p> <span><i class={latestIcon}></i></span> </h4>
            </div>
        </div>
    )
}

export default CardInfo
