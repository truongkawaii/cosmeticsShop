import React, { Fragment, useEffect } from 'react'
import Layout from '../../hoc/Layout/Layout'
import {useDispatch,useSelector} from 'react-redux';
import { getAllProduct } from '../../state/actions';

function Products() {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.products.data);
  console.log(data,'items');
  useEffect(() => {
    dispatch(getAllProduct())
    return () => {
       
    }
  }, [])
  return (
    <Layout>
        <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="breadcrumb-title">Shop - List Product Comestic</h3>
                        <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop-grid-sidebar-left.html">Product</a></li>
                                    <li className="active" aria-current="page">Shop List Left Sidebar</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-3">
              {/* <!-- Start Sidebar Area --> */}
              <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">

                {/* <!-- Start Single Sidebar Widget --> */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">CATEGORIES</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li>
                        <ul className="sidebar-menu-collapse">
                          {/* <!-- Start Single Menu Collapse List --> */}
                          <li className="sidebar-menu-collapse-list">
                            <div className="accordion">
                              <a href="#" className="accordion-title collapsed"
                                data-bs-toggle="collapse" data-bs-target="#men-fashion"
                                aria-expanded="false">Men <i
                                  className="ion-ios-arrow-right"></i></a>
                              <div id="men-fashion" className="collapse">
                                <ul className="accordion-category-list">
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Jackets &amp; Coats</a></li>
                                  <li><a href="#">Sweaters</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Blouses &amp; Shirts</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          {/* <!-- End Single Menu Collapse List --> */}
                        </ul>
                      </li>
                      <li><a href="#">Football</a></li>
                      <li><a href="#"> Men's</a></li>
                      <li><a href="#"> Portable Audio</a></li>
                      <li><a href="#"> Smart Watches</a></li>
                      <li><a href="#">Tennis</a></li>
                      <li><a href="#"> Uncategorized</a></li>
                      <li><a href="#"> Video Games</a></li>
                      <li><a href="#">Women's</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Single Sidebar Widget --> */}

                {/* <!-- Start Single Sidebar Widget --> */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">FILTER BY PRICE</h6>
                  <div className="sidebar-content">
                    <div id="slider-range"></div>
                    <div className="filter-type-price">
                      <label for="amount">Price range:</label>
                      <input type="text" id="amount" />
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Sidebar Widget --> */}

                {/* <!-- Start Single Sidebar Widget --> */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">MANUFACTURER</h6>
                  <div className="sidebar-content">
                    <div className="filter-type-select">
                      <ul>
                        <li>
                          <label className="checkbox-default" for="brakeParts">
                            <input type="checkbox" id="brakeParts" />
                            <span>Brake Parts(6)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="accessories">
                            <input type="checkbox" id="accessories" />
                            <span>Accessories (10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="EngineParts">
                            <input type="checkbox" id="EngineParts" />
                            <span>Engine Parts (4)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="hermes">
                            <input type="checkbox" id="hermes" />
                            <span>hermes (10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="tommyHilfiger">
                            <input type="checkbox" id="tommyHilfiger" />
                            <span>Tommy Hilfiger(7)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div></div>
                {/*  <!-- End Single Sidebar Widget --> */}

                {/* <!-- Start Single Sidebar Widget --> */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">SELECT BY COLOR</h6>
                  <div className="sidebar-content">
                    <div className="filter-type-select">
                      <ul>
                        <li>
                          <label className="checkbox-default" for="black">
                            <input type="checkbox" id="black" />
                            <span>Black (6)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="blue">
                            <input type="checkbox" id="blue" />
                            <span>Blue (8)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="brown">
                            <input type="checkbox" id="brown" />
                            <span>Brown (10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="Green">
                            <input type="checkbox" id="Green" />
                            <span>Green (6)</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-default" for="pink">
                            <input type="checkbox" id="pink" />
                            <span>Pink (4)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Sidebar Widget --> */}

                {/* <!-- Start Single Sidebar Widget --> */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">Tag products</h6>
                  <div className="sidebar-content">
                    <div className="tag-link">
                      <a href="#">asian</a>
                      <a href="#">brown</a>
                      <a href="#">euro</a>
                      <a href="#">fashion</a>
                      <a href="#">hat</a>
                      <a href="#">t-shirt</a>
                      <a href="#">teen</a>
                      <a href="#">travel</a>
                      <a href="#">white</a>
                    </div>
                  </div>
                  {/* </div> <!-- End Single Sidebar Widget --> */}

                  {/* <!-- Start Single Sidebar Widget --> */}
                  <div className="sidebar-single-widget">
                    <div className="sidebar-content">
                      <a href="product-details-default.html" className="sidebar-banner img-hover-zoom">
                        <img className="img-fluid" src="assets/images/banner/side-banner.jpg" alt="" />
                      </a>
                    </div>
                    {/*  <!-- End Single Sidebar Widget --> */}
                  </div>
                </div>
                {/* <!-- End Sidebar Area --> */}
              </div>
              </div>
              <div className="col-lg-9">
                {/* <!-- Start Shop Product Sorting Section --> */}
                <div className="shop-sort-section">
                  <div className="container">
                    <div className="row">
                      {/* <!-- Start Sort Wrapper Box --> */}
                      <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                        data-aos="fade-up" data-aos-delay="0">
                        {/* <!-- Start Sort tab Button --> */}
                        <div className="sort-tablist d-flex align-items-center">
                          <ul className="tablist nav sort-tab-btn">
                            <li><a className="nav-link" data-bs-toggle="tab" href="#layout-3-grid"><img
                              src="assets/images/icons/bkg_grid.png" alt="" /></a></li>
                            <li><a className="nav-link active" data-bs-toggle="tab" href="#layout-list"><img
                              src="assets/images/icons/bkg_list.png" alt="" /></a></li>
                          </ul>

                          {/* <!-- Start Page Amount --> */}
                          <div className="page-amount ml-2">
                            <span>Showing 1–9 of 21 results</span>
                          </div>
                          {/* <!-- End Page Amount --> */}
                        </div>
                        {/* <!-- End Sort tab Button --> */}

                        {/* <!-- Start Sort Select Option --> */}
                        <div className="sort-select-list d-flex align-items-center">
                          <label className="mr-2">Sort By:</label>
                          <form action="#">
                            <fieldset>
                              <select name="speed" id="speed">
                                <option>Sort by average rating</option>
                                <option>Sort by popularity</option>
                                <option selected="selected">Sort by newness</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                                <option>Product Name: Z</option>
                              </select>
                            </fieldset>
                          </form>
                        </div>
                        {/* <!-- End Sort Select Option --> */}
                      </div>
                      {/* <!-- Start Sort Wrapper Box --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- End Section Content --> */}

                {/* <!-- Start Tab Wrapper --> */}
                <div className="sort-product-tab-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-content tab-animate-zoom">
                          {/* <!-- Start Grid View Product --> */}
                          <div className="tab-pane sort-layout-single" id="layout-3-grid">
                            <div className="row">
                              {data?.map(item=>  <div className="col-xl-4 col-sm-6 col-12">
                                {/* <!-- Start Product Default Single Item --> */}
                                <div className="product-default-single-item product-color--golden">
                                  <div className="image-box">
                                    <a href="product-details-default.html" className="image-link">
                                      <img src={item.image}
                                        alt="" />
                                      {/* <img src="assets/images/product/default/home-1/default-10.jpg"
                                        alt="" /> */}
                                    </a>
                                    <div className="action-link">
                                      <div className="action-link-left">
                                        <a href="#" data-bs-toggle="modal"
                                          data-bs-target="#modalAddcart">Add to Cart</a>
                                      </div>
                                      <div className="action-link-right">
                                        <a href="#" data-bs-toggle="modal"
                                          data-bs-target="#modalQuickview"><i
                                            className="icon-magnifier"></i></a>
                                        <a href="wishlist.html"><i
                                          className="icon-heart"></i></a>
                                        <a href="compare.html"><i
                                          className="icon-shuffle"></i></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="content-left">
                                      <h6 className="title"><a
                                        href="product-details-default.html">{item.name}</a></h6>
                                      <ul className="review-star">
                                        <li className="fill"><i className="ion-android-star"></i>
                                        </li>
                                        <li className="fill"><i className="ion-android-star"></i>
                                        </li>
                                        <li className="fill"><i className="ion-android-star"></i>
                                        </li>
                                        <li className="fill"><i className="ion-android-star"></i>
                                        </li>
                                        <li className="empty"><i className="ion-android-star"></i>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="content-right">
                                      <span className="price">{item.price}đ</span>
                                    </div>

                                  </div>
                                </div>
                                {/* <!-- End Product Default Single Item --> */}
                              </div>
                              )
                              }
                            </div>
                          </div>
                          {/* <!-- End Grid View Product --> */}
                          {/* <!-- Start List View Product --> */}
                          <div className="tab-pane active show sort-layout-single" id="layout-list">
                            <div className="row">
                              {data?.map(item=><div className="col-12">
                                {/* <!-- Start Product Defautlt Single --> */}
                                <div className="product-list-single product-color--golden"
                                  data-aos="fade-up" data-aos-delay="0">
                                  <a href="product-details-default.html"
                                    className="product-list-img-link">
                                    <img className="img-fluid"
                                      src={item.image}
                                      alt="" />
                                    {/* <img className="img-fluid"
                                      src="assets/images/product/default/home-1/default-2.jpg"
                                      alt="" /> */}
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a
                                      href="product-details-default.html">{item.name}</a></h5>
                                    <ul className="review-star">
                                      <li className="fill"><i className="ion-android-star"></i></li>
                                      <li className="fill"><i className="ion-android-star"></i></li>
                                      <li className="fill"><i className="ion-android-star"></i></li>
                                      <li className="fill"><i className="ion-android-star"></i></li>
                                      <li className="empty"><i className="ion-android-star"></i></li>
                                    </ul>
                                    <span className="product-list-price"><del>{item.price+200000}</del>
                                                                {item.price}</span>
                                    <p>{item.description}</p>
                                    <div className="product-action-icon-link-list">
                                      <a href="#" data-bs-toggle="modal"
                                        data-bs-target="#modalAddcart"
                                        className="btn btn-lg btn-black-default-hover">Add to
                                                                    cart</a>
                                      <a href="#" data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"
                                        className="btn btn-lg btn-black-default-hover"><i
                                          className="icon-magnifier"></i></a>
                                      <a href="wishlist.html"
                                        className="btn btn-lg btn-black-default-hover"><i
                                          className="icon-heart"></i></a>
                                      <a href="compare.html"
                                        className="btn btn-lg btn-black-default-hover"><i
                                          className="icon-shuffle"></i></a>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- End Product Defautlt Single --> */}
                              </div>
                              )}
                        </div>
                          </div>
                          {/* <!-- End List View Product --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Tab Wrapper --> */}

                {/* <!-- Start Pagination --> */}
                <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay="0">
                  <ul>
                    <li><a className="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="ion-ios-skipforward"></i></a></li>
                  </ul>
                </div>
                {/* <!-- End Pagination --> */}
              </div>
              {/* <!-- End Shop Product Sorting Section  --> */}
            </div>
          </div>
        </div>
       
    </Layout>
  )
}

export default Products
