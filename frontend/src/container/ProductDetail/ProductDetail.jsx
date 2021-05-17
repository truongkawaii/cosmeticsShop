import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../hoc/Layout/Layout';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch}  from 'react-redux';
import './ProductDetail.scss';
import { addCart } from '../../state/actions';
import ModalCart from '../../components/ModalCart/ModalCart';

function ProductDetail() {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.products.data);
  let { id } = useParams();
  const [item,setItem] = useState(null);
  const cart = useSelector(state => state.cart.data);

  const [itemCart, setItemCart] = useState({
    img: '',
    itemCount: '',
    price: ''
  })
  useEffect(() => {
     data?.forEach(prd=>{
       if (prd.id===Number(id)) {
          setItem(prd)
       }
     })
  
    return () => {
       
    }
  }, [data])
 
  const handlerAddToCart = (item)=>{
    console.log(item);
    const productItem = cart?.find(prd => prd.id === item.id);

    if (productItem) {
      setItemCart({ img: item.image, price: item.price, itemCount: productItem.count + 1 })

    } else {
      setItemCart({ img: item.image, price: item.price, itemCount: 1 })

    }
    dispatch(addCart(item))
  }

  return (
    <Layout>
       <ModalCart itemCart={itemCart} />
      <BreadCrumb title="PRODUCT DETAILS" />
      <div class="product-details-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-6">
              <div class="product-details-gallery-area" data-aos="fade-up" data-aos-delay="0">
                {/* <!-- Start Large Image --> */}
                <div class="product-large-image product-large-image-horaizontal swiper-container">
                  <div class="swiper-wrapper">
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src={item?.image} alt="" />
                    </div>
                    {/* <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src="assets/images/product/default/home-1/default-2.jpg" alt="" />
                    </div>
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src="assets/images/product/default/home-1/default-3.jpg" alt="" />
                    </div>
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src="assets/images/product/default/home-1/default-4.jpg" alt="" />
                    </div>
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src="assets/images/product/default/home-1/default-5.jpg" alt="" />
                    </div>
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src="assets/images/product/default/home-1/default-6.jpg" alt="" />
                    </div> */}
                  </div>
                </div>
                {/* <!-- End Large Image --> */}
                {/* <!-- Start Thumbnail Image --> */}
               
                {/* <!-- End Thumbnail Image --> */}
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="product-details-content-area product-details--golden" data-aos="fade-up"
                data-aos-delay="200">
                {/* <!-- Start  Product Details Text Area--> */}
                <div class="product-details-text">
                  <h4 class="title">{item?.name}</h4>
                  <div class="d-flex align-items-center">
                    <ul class="review-star">
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="empty"><i class="ion-android-star"></i></li>
                    </ul>
                    <a href="#" class="customer-review ml-2">(customer review )</a>
                  </div>
                  <div class="price">{item?.price}đ</div>
                  <p>{item?.description}</p>
                </div>
                {/* <!-- End  Product Details Text Area--> */}
                {/* <!-- Start Product Variable Area --> */}
                <div class="product-details-variable">
                  <h4 class="title">Available Options</h4>
                  {/* <!-- Product Variable Single Item --> */}
                  <div class="variable-single-item">
                    <div class="product-stock"> <span class="product-stock-in"><i
                      class="ion-checkmark-circled"></i></span> 200 IN STOCK</div>
                  </div>
                  {/* <!-- Product Variable Single Item --> */}
                  <div class="d-flex align-items-center ">
                    {/* <div class="variable-single-item ">
                      <span>Quantity</span>
                      <div class="product-variable-quantity">
                        <input min="1" max="100" value="1" type="number" />
                      </div>
                    </div> */}

                    <div class="product-add-to-cart-btn">
                      <a href="#" class="btn btn-block btn-lg btn-black-default-hover"
                       onClick={() => handlerAddToCart(item)}
                        data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Add To Cart</a>
                    </div>
                  </div>
                  {/* <!-- Start  Product Details Meta Area--> */}
                  <div class="product-details-meta mb-20">
                    <a href="wishlist.html" class="icon-space-right"><i class="icon-heart"></i>Add to
                                    wishlist</a>
                    <a href="compare.html" class="icon-space-right"><i class="icon-refresh"></i>Compare</a>
                  </div>
                  {/* <!-- End  Product Details Meta Area--> */}
                </div>
                {/* <!-- End Product Variable Area --> */}

                {/* <!-- Start  Product Details Catagories Area--> */}
                <div class="product-details-catagory mb-2">
                  <span class="title">CATEGORIES:</span>
                  <ul>
                    <li><a href="#">BAR STOOL</a></li>
                    <li><a href="#">KITCHEN UTENSILS</a></li>
                    <li><a href="#">TENNIS</a></li>
                  </ul>
                </div>
                {/* <!-- End  Product Details Catagories Area--> */}
                {/* <!-- Start  Product Details Social Area--> */}
                <div class="product-details-social">
                  <span class="title">SHARE THIS PRODUCT:</span>
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
                {/* <!-- End  Product Details Social Area--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-content-tab-section section-top-gap-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay="0">

                {/* <!-- Start Product Details Tab Button --> */}
                <ul class="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                  <li><a class="nav-link active" data-bs-toggle="tab" href="#description">
                    Description
                                </a></li>
                  <li><a class="nav-link" data-bs-toggle="tab" href="#specification">
                    Specification
                                </a></li>
                  <li><a class="nav-link" data-bs-toggle="tab" href="#review">
                    Reviews (1)
                                </a></li>
                </ul>
                {/* <!-- End Product Details Tab Button --> */}

                {/* <!-- Start Product Details Tab Content --> */}
                <div class="product-details-content-tab">
                  <div class="tab-content">
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane active show" id="description">
                      <div class="single-tab-content-item">
                        <p>{item?.description} </p>
 
                      </div>
                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane" id="specification">
                      <div class="single-tab-content-item">
                        <table class="table table-bordered mb-20">
                          <tbody>
                            <tr>
                              <th scope="row">Compositions</th>
                              <td>Polyester</td>
                            </tr>
                            <tr>
                              <th scope="row">Styles</th>
                              <td>Girly</td>
                            </tr>
                            <tr>
                              <th scope="row">Properties</th>
                              <td>Short Dress</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>Fashion has been creating well-designed collections since 2010. The brand
                        offers feminine designs delivering stylish separates and statement dresses
                        which have since evolved into a full ready-to-wear collection in which every
                        item is a vital part of a woman's wardrobe. The result? Cool, easy, chic
                        looks with youthful elegance and unmistakable signature style. All the
                        beautiful pieces are made in Italy and manufactured with the greatest
                        attention. Now Fashion extends to a range of accessories including shoes,
                                            hats, belts and more!</p>
                      </div>
                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane" id="review">
                      <div class="single-tab-content-item">
                        {/* <!-- Start - Review Comment --> */}
                        <ul class="comment">
                          {/* <!-- Start - Review Comment list--> */}
                          <li class="comment-list">
                            <div class="comment-wrapper">
                              <div class="comment-img">
                                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/164059500_896532601180604_234376205484885230_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8Ra0flooOesAX-1NnO3&_nc_ht=scontent.fhan14-1.fna&oh=8bd74fc9f9dec71d5d0bc3ba7555a8a8&oe=60C92C71" alt="" />
                              </div>
                              <div class="comment-content">
                                <div class="comment-content-top">
                                  <div class="comment-content-left">
                                    <h6 class="comment-name">Xuân Trường</h6>
                                    <ul class="review-star">
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="empty"><i class="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="comment-content-right">
                                    <a href="#"><i class="fa fa-reply"></i>Reply</a>
                                  </div>
                                </div>

                                <div class="para-content">
                                  <p>Sản phẩm chất lượng , tôi rất hài lòng </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Start - Review Comment Reply--> */}
                            <ul class="comment-reply">
                              <li class="comment-reply-list">
                                <div class="comment-wrapper">
                                  <div class="comment-img">
                                    <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/184270862_105131905093145_8047392059755959343_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sQktkgEQ9kgAX_68SQu&_nc_ht=scontent.fhan14-2.fna&oh=d2a1da532bbe424a8921232d0d03d696&oe=60C87905" alt="" />
                                  </div>
                                  <div class="comment-content">
                                    <div class="comment-content-top">
                                      <div class="comment-content-left">
                                        <h6 class="comment-name">Hà Trinh</h6>
                                      </div>
                                      <div class="comment-content-right">
                                        <a href="#"><i class="fa fa-reply"></i>Reply</a>
                                      </div>
                                    </div>

                                    <div class="para-content">
                                      <p>Tớ cux đã mua thử sản phẩm {item?.name} , dùng cực kỳ ưng ý </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            {/* <!-- End - Review Comment Reply--> */}
                          </li>
                          {/* <!-- End - Review Comment list--> */}
                          {/* <!-- Start - Review Comment list--> */}
                          <li class="comment-list">
                            <div class="comment-wrapper">
                              <div class="comment-img">
                                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/p200x200/54524806_103167327521300_2572057752373297152_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=E3V-_AzDVm0AX_Cb6dx&_nc_ht=scontent.fhan14-1.fna&tp=6&oh=e07df0d37181d88d745b5d3d7d192600&oe=60C76284" alt="" />
                              </div>
                              <div class="comment-content">
                                <div class="comment-content-top">
                                  <div class="comment-content-left">
                                    <h6 class="comment-name">Tiệp ngáo</h6>
                                    <ul class="review-star">
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="empty"><i class="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="comment-content-right">
                                    <a href="#"><i class="fa fa-reply"></i>Reply</a>
                                  </div>
                                </div>

                                <div class="para-content">
                                  <p>Dùng rất ưng ý  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* <!-- End - Review Comment list--> */}
                        </ul>
                        {/* <!-- End - Review Comment --> */}
                        <div class="review-form">
                          <div class="review-form-text-top">
                            <h5>ADD A REVIEW</h5>
                            <p>Your email address will not be published. Required fields are marked
                                                    *</p>
                          </div>

                          <form action="#" method="post">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="default-form-box">
                                  <label for="comment-name">Your name <span>*</span></label>
                                  <input id="comment-name" type="text"
                                    placeholder="Enter your name" required />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="default-form-box">
                                  <label for="comment-email">Your Email <span>*</span></label>
                                  <input id="comment-email" type="email"
                                    placeholder="Enter your email" required />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="default-form-box">
                                  <label for="comment-review-text">Your review
                                                                <span>*</span></label>
                                  <textarea id="comment-review-text"
                                    placeholder="Write a review" required></textarea>
                                </div>
                              </div>
                              <div class="col-12">
                                <button class="btn btn-md btn-black-default-hover"
                                  type="submit">Submit</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                  
                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                  </div>
                </div>
                {/* <!-- End Product Details Tab Content --> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
