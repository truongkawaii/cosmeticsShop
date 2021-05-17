import React, { Fragment } from 'react'
import Search from '../Search/Search';
import { Link,useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import {userLogoutPage} from '../../state/actions/index'
import { toastSuccess } from '../../Helper/toastHelper';
import './Header.scss';



function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const cartTotal = useSelector(state => state.cart.total)
  const token = localStorage.getItem('token')
  const handlerLogout = ()=>{
    dispatch(userLogoutPage()) 
    history.push('/login');
    toastSuccess('Logout success');    
    
  }
  return (
    <Fragment>
      <Search />
      <div className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          {/* Start Header Top */}
          <div className="header-top header-top-bg--black section-fluid">
            <div className="container">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-top-left">
                  <div
                    className="header-top-contact header-top-contact-color--white header-top-contact-hover-color--green">
                    <a href="tel:0123456789" className="icon-space-right"><i
                      className="icon-call-in"></i>0123456789</a>
                    <a href="mailto:demo@example.com" className="icon-space-right"><i
                      className="icon-envelope"></i>demo@example.com</a>
                  </div>
                </div>
                <div className="header-top-right">
                  <div
                    className="header-top-user-link header-top-user-link-color--white header-top-user-link-hover-color--green">
                    <a href="wishlist.html">Wishlist</a>
                    <Link to="/cart" >Cart</Link>
                    <Link to="/checkout">Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Top --> */}
          {/* <!-- Start Header Bottom --> */}
          <div className="header-bottom header-bottom-color--green section-fluid sticky-header sticky-color--white">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  {/* <!-- Start Header Logo --> */}
                  <div className="header-logo">
                    <div className="logo">
                      <a href="index.html"><img src="assets/images/logo.jpg" alt="" /></a>
                    </div>
                  </div>
                  {/* <!-- End Header Logo --> */}

                  {/* <!-- Start Header Main Menu --> */}
                  <div className="main-menu menu-color--black menu-hover-color--green">
                    <nav>
                      <ul>
                        <li className="has-dropdown">
                          <Link className="active main-menu-link" to="/">Home <i
                            className="fa fa-angle-down"></i></Link>
                          {/* <!-- Sub Menu --> */}
                          <ul className="sub-menu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li><a href="index-3.html">Home 3</a></li>
                            <li><a href="index-4.html">Home 4</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link to="/products">Products<i
                            className="fa fa-angle-down"></i></Link>
                          {/* <!-- Mega Menu --> */}
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Shop Layouts</a>
                                <ul className="mega-menu-sub">
                                  <li><a href="shop-grid-sidebar-left.html">Grid Left
                                                                    Sidebar</a></li>
                                  <li><a href="shop-grid-sidebar-right.html">Grid Right
                                                                    Sidebar</a></li>
                                  <li><a href="shop-full-width.html">Full Width</a></li>
                                  <li><a href="shop-list-sidebar-left.html">List Left
                                                                    Sidebar</a></li>
                                  <li><a href="shop-list-sidebar-right.html">List Right
                                                                    Sidebar</a></li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Other Pages</a>
                                <ul className="mega-menu-sub">
                                  <li><a href="cart.html">Cart</a></li>
                                  <li><a href="empty-cart.html">Cart</a></li>
                                  <li><a href="wishlist.html">Wishlist</a></li>
                                  <li><a href="compare.html">Compare</a></li>
                                  <li><a href="checkout.html">Checkout</a></li>
                                  <li><a href="login.html">Login</a></li>
                                  <li><a href="my-account.html">My Account</a></li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Product Types</a>
                                <ul className="mega-menu-sub">
                                  <li><a href="product-details-default.html">Product
                                                                    Default</a></li>
                                  <li><a href="product-details-variable.html">Product
                                                                    Variable</a></li>
                                  <li><a href="product-details-affiliate.html">Product
                                                                    Referral</a></li>
                                  <li><a href="product-details-group.html">Product Group</a>
                                  </li>
                                  <li><a href="product-details-single-slide.html">Product
                                                                    Slider</a></li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Product Types</a>
                                <ul className="mega-menu-sub">
                                  <li><a href="product-details-tab-left.html">Product Tab
                                                                    Left</a></li>
                                  <li><a href="product-details-tab-right.html">Product Tab
                                                                    Right</a></li>
                                  <li><a href="product-details-gallery-left.html">Product
                                                                    Gallery Left</a></li>
                                  <li><a href="product-details-gallery-right.html">Product
                                                                    Gallery Right</a></li>
                                  <li><a href="product-details-sticky-left.html">Product
                                                                    Sticky Left</a></li>
                                  <li><a href="product-details-sticky-right.html">Product
                                                                    Sticky right</a></li>
                                </ul>
                              </li>
                            </ul>
                            <div className="menu-banner">
                              <a href="#" className="menu-banner-link">
                                <img className="menu-banner-img"
                                  src="assets/images/banner/menu-banner.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="has-dropdown">
                          <a href="blog-single-sidebar-left.html">Blog <i
                            className="fa fa-angle-down"></i></a>
                          {/* <!-- Sub Menu --> */}
                          <ul className="sub-menu">
                            <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a>
                            </li>
                            <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a>
                            </li>
                            <li><a href="blog-full-width.html">Blog Full Width</a></li>
                            <li><a href="blog-list-sidebar-left.html">Blog List Sidebar Left</a>
                            </li>
                            <li><a href="blog-list-sidebar-right.html">Blog List Sidebar Right</a>
                            </li>
                            <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a>
                            </li>
                            <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar
                                                        Right</a></li>
                          </ul>
                        </li>
                     
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        {!token ?<li>
                          <Link to="/login">Login</Link>
                        </li>:<li>
                          <span  className="out" onClick={handlerLogout}>Logout</span>
                        </li>}

                      </ul>
                    </nav>
                  </div>
                  {/* <!-- End Header Main Menu Start --> */}

                  {/* <!-- Start Header Action Link --> */}
                  <ul className="header-action-link action-color--black action-hover-color--green">
                    <li>
                      <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                        <i className="icon-heart"></i>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <Link to="/cart" className="offcanvas-toggle">
                        <i className="icon-bag"></i>
                        <span className="item-count">{cartTotal}</span>
                      </Link>
                    </li>
                    <li>
                      <a href="#search">
                        <i className="icon-magnifier"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- End Header Action Link --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Bottom --> */}
        </div>
      </div>
      <div className="mobile-header mobile-header-bg-color--white section-fluid d-lg-block d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              {/* <!-- Start Mobile Left Side --> */}
              <div className="mobile-header-left">
                <ul className="mobile-menu-logo">
                  <li>
                    <a href="index.html">
                      <div className="logo">
                        <img src="assets/images/logo/logo_black.png" alt="" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Mobile Left Side --> */}

              {/* <!-- Start Mobile Right Side --> */}
              <div className="mobile-right-side">
                <ul className="header-action-link action-color--black action-hover-color--green">
                  <li>
                    <a href="#search">
                      <i className="icon-magnifier"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                      <i className="icon-heart"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                      <i className="icon-bag"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                      <i className="icon-menu"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Mobile Right Side --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
