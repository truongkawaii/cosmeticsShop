import React from 'react'

function SlideSection() {
 
    return (
        <div className="hero-slider-section">
        {/* <!-- Slider main container --> */}
        <div className="hero-slider-active swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Start Hero Single Slider Item --> */}
                <div className="hero-single-slider-item swiper-slide">
                    {/* <!-- Hero Slider Image --> */}
                    <div className="hero-slider-bg">
                        <img src="assets/images/hero-slider/home-2/hero-slider-1.jpg" alt=""/>
                    </div>
                    {/* <!-- Hero Slider Content --> */}
                    <div className="hero-slider-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="hero-slider-content">
                                        <h4 className="subtitle">Made of Fresh Ingredients</h4>
                                        <h1 className="title">A natural & <br/> organic Skincare </h1>
                                        <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                            now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> 
                 {/* <!-- End Hero Single Slider Item --> */} 
                {/* <!-- Start Hero Single Slider Item --> */}
                <div className="hero-single-slider-item swiper-slide">
                    {/* <!-- Hero Slider Image --> */}
                    <div className="hero-slider-bg">
                        <img src="assets/images/hero-slider/home-2/hero-slider-2.jpg" alt=""/>
                    </div>
                    {/* <!-- Hero Slider Content --> */}
                    <div className="hero-slider-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="hero-slider-content">
                                        <h4 className="subtitle">Premium Facial Skincare</h4>
                                        <h1 className="title">Fresh Face <br/> Natural Skincare</h1>
                                        <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                            now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>  {/* <!-- End Hero Single Slider Item --> */}
            </div>

            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination active-color-green"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev d-none d-lg-block"></div>
            <div className="swiper-button-next d-none d-lg-block"></div>
        </div>
    </div> )
}

export default SlideSection
