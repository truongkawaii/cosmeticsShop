import React, { useEffect } from 'react'
import { tabContent } from '../../../utils'
import './Account.scss'

function Account() {
    useEffect(() => {
        tabContent('.account-tab', '.tab-ac', '.btn-ac');
        return () => {

        }
    }, [])
    return (
        <div className="account-tab">

            <h2>Account</h2>
            <p>Dashboard {'>'} <span>Account</span></p>
            <div className="tab-content">
                <div className="account-btns">
                    <h3 className="btn-ac active">GENERAL</h3>
                    <h3 className="btn-ac">Billing</h3>
                    <h3 className="btn-ac">Notifications</h3>
                    <h3 className="btn-ac">Security</h3>
                </div>
                <div className="account-tabs">
                    <div className="tab-ac active">
                      <div className="active-item">
                      <div className="left-card">
                            <div className="content-card">
                                <img width="100" src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png" alt="" />
                                <h4>Jane Rotanson</h4>
                                <h6>Your plan <span>Premium</span></h6>
                                <h5>Remove Picture</h5>
                            </div>
                        </div>

                        <div className="right-card">
                            <h2>Profile</h2>
                            <div className="list-input">
                                <input type="text" defaultValue="Jane Rotanson" />
                                <input type="text" defaultValue="demo@devias.io"/>
                                <input type="text" placeholder="Phone number" />
                                <input type="text" placeholder="Country"/>
                                <input type="text" placeholder="State/Region"/>
                                <input type="text" placeholder="City"/>
                            </div>
                            <div className="list-info">
                                <div className="detail-info">
                                    <h3>Public Profile</h3>
                                    <p>Means that anyone viewing your profile will be able to see your contacts details</p>
                                </div>
                                <div className="detail-info">
                                    <h3>Available to hire</h3>
                                    <p>Toggling this will let your teammates know that you are available for acquiring new projects</p>
                                </div>
                            </div>
                            <div className="btns">
                            <h3 className="btn">
                                Save Changes
                            </h3>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-ac">
                        2 
              </div>
                    <div className="tab-ac">3</div>
                    <div className="tab-ac">4</div>
                </div>
            </div>
        </div>
    )
}

export default Account
