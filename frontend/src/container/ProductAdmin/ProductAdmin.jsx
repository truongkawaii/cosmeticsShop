import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Pagination, Spin, Space, Button, Modal } from 'antd';
import { paginationProduct, removeCart, updateCartItem } from '../../state/actions'
import './ProductAdmin.scss'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin';
import UpfileService from '../../Services/upfile.service';
function ProductAdmin() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.dataProductSort);
  const totalSize = useSelector(state => state.products.total);
  const modalState = useSelector(state => state.products.showModal);
  const perPage = useSelector(state => state.products.perPage);
  const [totalCart, setTotalCart] = useState(0);
  const [itemCarts, setItemCarts] = useState(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {

    setItemCarts(products);
    return () => {
    }
  }, [products])


  const handlerUpFile = async (e) => {
    let file = e.target.files[0];
    const data = new FormData();
    data.append('file', file)
    try {
      const res = await UpfileService.upfile(data);
      console.log(res);
    } catch (error) {

    }
    // function* handlerEditJob(action) {
    //   const {file} = action.payload;
    //   const jobData = action.payload;
    //   const data = new FormData()
    //   data.append('file', file)
    //   try {
    //     const res = yield call(UpfileService.upfile,data);
    //     yield call(RecruitmentService.editJob,{...jobData,thumbnail:res.url});
    //     yield toastSuccess('Tạo Job thành công!');
    //     const listJob = yield call(RecruitmentService.listJob);
    //     yield put(getAllJobSuccess(listJob))
    //   } catch (error) {}
    // }

  }
  const handlerRemoveItem = (id) => {
    // const updateData = itemCarts.filter(item => item.id !== id);
    // setItemCarts(updateData)
  }


  const renderCart = () => {
    let totalPrice = 0;
    const itemCart = products?.map((item, index) => {
      totalPrice += (item.price * item.count);
      let quantity = item.count;
      return <tr>
        <td className="product_remove"><span onClick={() => handlerRemoveItem(item.id)}><i className="fa fa-trash-o"></i></span>
        </td>
        <td className="product_thumb"><a href="product-details-default.html"><img
          src={item.image} alt="" /></a></td>
        <td className="product_name"><Link to={`/product/${item.id}`}>{item.name}</Link></td>
        <td className="product-price">{item.price}đ</td>
        <td className="product_quantity">Bath Body</td>
        <td className="product-price"> {item.count} </td>
        <td className="product_total">
          <span><i className="fa fa-edit"></i></span>
          <span><i className="fa fa-trash"></i></span>
        </td>
        {/* <input type="text" value={data}/> */}
      </tr>
    })
    return { itemCart, totalPrice };
  }
  const updateCart = () => {

    // dispatch(updateCartItem(itemCarts))
  }
  const handlerProductList = (page) => {
    // dispatch(showModal())
    dispatch(paginationProduct(page));
  }
  return (
    <LayoutAdmin>
      <input type="file" onChange={handlerUpFile} />
      <Modal
        title="Modal 1000px width"
        // centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      {/* <!-- ...:::: Start Cart Section:::... --> */}
      <div className="cart-section product-admin">


        {/* <!-- Start Cart Table --> */}
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <Button type="primary" className="btn-add-product" onClick={() => setVisible(true)}>Add New Product</Button>
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      {/* <!-- Start Cart Table Head --> */}
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Brand</th>
                          <th className="product-price">Quantity</th>
                          <th className="product_total">Action</th>
                        </tr>
                      </thead>
                      {/* <!-- End Cart Table Head --> */}
                      <tbody>
                        {itemCarts?.length === 0 && <h2 className="notice">No have items in cart</h2>}
                        {renderCart().itemCart}


                      </tbody>
                    </table>

                    <Pagination
                      defaultCurrent={1}
                      showSizeChanger={false}
                      pageSize={perPage}
                      total={totalSize}
                      onChange={handlerProductList}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Cart Table --> */}

        {/* <!-- Start Coupon Start --> */}
        {/* <!-- End Coupon Start --> */}
      </div>
      {/* <!-- ...:::: End Cart Section:::... --> */}
      {/* code thuần -> thư viện  */}
      {/* HTML , CSS , JS thuần => 1 số thư viện React  */}
    </LayoutAdmin>
  )
}

export default ProductAdmin
