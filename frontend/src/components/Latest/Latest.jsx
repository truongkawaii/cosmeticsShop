import React from 'react'
import './Latest.scss';

function Latest() {
  return (
    <div className="latest">
      <h2>Latest Transactions</h2>
      <div className="latest-item">
        <div className="latest-time">
          <h5>APR</h5>
          <h6>25</h6>
        </div>
        <div className="latest-user">
          <h4>Devias IO</h4>
          <h3>Payment received</h3>
        </div>
        <div className="latest-money">
          <h5>+ $25,000.00</h5>
          <h4>USD</h4>
        </div>
      </div>
      <div className="latest-item">
        <div className="latest-time">
          <h5>APR</h5>
          <h6>25</h6>
        </div>
        <div className="latest-user">
          <h4>Zimbru</h4>
          <h3>Payment sent</h3>
        </div>
        <div className="latest-money">
          <h5 className="red">- $6,843.00</h5>
          <h4>USD</h4>
        </div>
      </div>
      <div className="latest-item">
        <div className="latest-time">
          <h5>APR</h5>
          <h6>25</h6>
        </div>
        <div className="latest-user">
          <h4>Vertical Jelly</h4>
          <h3>Payment sent</h3>
        </div>
        <div className="latest-money">
          <h5 className="red">- $91,823.00</h5>
          <h4>USD</h4>
        </div>
      </div>
      <div className="latest-item">
        <div className="latest-time">
          <h5>APR</h5>
          <h6>25</h6>
        </div>
        <div className="latest-user">
          <h4>Devias IO</h4>
          <h3>Payment received</h3>
        </div>
        <div className="latest-money">
          <h5>+ $49,550.00</h5>
          <h4>USD</h4>
        </div>
      </div>
    </div>
  )
}

export default Latest
