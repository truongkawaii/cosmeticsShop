import React from 'react'
import './ProgessCard.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function ProgessCard({color,title,desc}) {
    return (
        <div className="progess-item">
            <div className="progress-info">
                <div className="progess-icon">
                    <CircularProgressbar value={88} pathColor="#ccc" text={` `} styles={buildStyles({
                        pathColor: `#197E8F`,
                        trailColor: '#191E27',
                    })} />

                </div>
                <div className="value-text">
                    <h2 style={{color:`${color?color:`rgb(104, 142, 255)`}`}}>{title&&title}</h2>
                    <h6>{desc&&desc}</h6>
                </div>
                <span className="upIcon"><i class="fas fa-chevron-up"></i></span>
            </div>
          <div className="progess-btn">
          <h3>See all activity <span><i class="fas fa-arrow-right"></i></span></h3>
          </div>
        </div>
    )
}

export default ProgessCard
