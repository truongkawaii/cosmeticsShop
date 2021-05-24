import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Layout from '../../hoc/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.scss'


function Checkout() {
  const cart = useSelector(state => state.cart.data);
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    items: [
      {
        itemId: 0,
        count: 0
      }
    ]
  })

  const renderItems = () => {
    let totalPrice = 0;
    const data = cart?.map(item => {
      totalPrice += (item.count * item.price);
      return <tr>
        <td> {item.name} <strong> × {item.count}</strong></td>
        <td> {item.price * item.count}đ</td>
      </tr>
    })

    return { data, totalPrice }

  }
  return (
    <Layout>
      <BreadCrumb title={'CHECKOUT'} />
      <div className="checkout-section">
        <div className="container">
          <div className="row">
          </div>
          {/* <!-- Start User Details Checkout Form --> */}
          <div className="checkout_form" data-aos="fade-up" data-aos-delay="400">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <form action="#">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>First Name <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>Last Name <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <div className="default-form-box">
                        <label>Company Name</label>
                        <input type="text" />
                      </div>
                    </div> */}
                    {/* <div className="col-12">
                      <div className="default-form-box">
                        <label for="country">country <span>*</span></label>
                        <select className="country_option nice-select wide" name="country" id="country">
                          <option value="2">Bangladesh</option>
                          <option value="3">Algeria</option>
                          <option value="4">Afghanistan</option>
                          <option value="5">Ghana</option>
                          <option value="6">Albania</option>
                          <option value="7">Bahrain</option>
                          <option value="8">Colombia</option>
                          <option value="9">Dominican Republic</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <div className="default-form-box">
                        <label>Address <span>*</span></label>
                        <input placeholder="House number and street name" type="text" />
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <div className="default-form-box">
                        <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                      </div>
                    </div> */}
                    {/* <div className="col-12">
                      <div className="default-form-box">
                        <label>Town / City <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="default-form-box">
                        <label>State / County <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>Phone<span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label> Email Address <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <label className="checkbox-default" for="newAccount" data-bs-toggle="collapse"
                        data-bs-target="#newAccountPassword">
                        <input type="checkbox" id="newAccount" />
                        <span>Create an account?</span>
                      </label>
                      <div id="newAccountPassword" className="collapse mt-3"
                        data-parent="#newAccountPassword">
                        <div className="card-body1 default-form-box">
                          <label> Account password <span>*</span></label>
                          <input placeholder="password" type="password" />
                        </div>
                      </div>
                    </div> */}

                    <div className="col-12 mt-3">
                      <div className="order-notes">
                        <label for="order_note">Order Notes</label>
                        <textarea id="order_note"
                          placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-6">
                <form action="#">
                  <h3>Your order</h3>
                  <div className="order_table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {renderItems().data}
                        {/* <tr>
                          <td> Handbag fringilla <strong> × 2</strong></td>
                          <td> $165.00</td>
                        </tr>
                        <tr>
                          <td> Handbag justo <strong> × 2</strong></td>
                          <td> $50.00</td>
                        </tr>
                        <tr>
                          <td> Handbag elit <strong> × 2</strong></td>
                          <td> $50.00</td>
                        </tr>
                        <tr>
                          <td> Handbag Rutrum <strong> × 1</strong></td>
                          <td> $50.00</td>
                        </tr> */}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Cart Subtotal</th>
                          <td>{renderItems().totalPrice}đ</td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td><strong>30000đ</strong></td>
                        </tr>
                        <tr className="order_total">
                          <th>Order Total</th>
                          <td><strong>{renderItems().totalPrice + 30000}đ</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment_method">
                    <div className="panel-default">
                      <label className="checkbox-default" for="currencyCod" data-bs-toggle="collapse"
                        data-bs-target="#methodCod">
                        <input type="checkbox" id="currencyCod" />
                        <span>Cash on Delivery</span>
                      </label>

                      <div id="methodCod" className="collapse" data-parent="#methodCod">
                        <div className="card-body1">
                          <p>Please send a check to Store Name, Store Street, Store Town, Store State
                                                / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel-default">
                      <label className="checkbox-default" for="currencyPaypal" data-bs-toggle="collapse"
                        data-bs-target="#methodPaypal">
                        <input type="checkbox" id="currencyPaypal" />
                        <span>PayPal</span>
                      </label>
                      <div id="methodPaypal" className="collapse " data-parent="#methodPaypal">
                        <div className="card-body1">
                          <p>Pay via PayPal; you can pay with your credit card if you don’t have a
                                                PayPal account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="order_button pt-3">
                      <span className="btn btn-md btn-black-default-hover btn-pay" >Proceed to
                                        PayPal</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Start User Details Checkout Form --> */}
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
