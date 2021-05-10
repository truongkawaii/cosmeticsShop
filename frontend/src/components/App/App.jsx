import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
// import Login from '../../container/Login';
import 'react-circular-progressbar/dist/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import 'swiper/swiper.scss';

// // Vendor CSS
// import '../../assets/css/vendor/font-awesome.min.css';
// import '../../assets/css/vendor/ionicons.css';
// import '../../assets/css/vendor/simple-line-icons.css';
// import '../../assets/css/vendor/jquery-ui.min.css';
// //  Plugin CSS
// import '../../assets/css/plugins/swiper-bundle.min.css';
// import '../../assets/css/plugins/animate.min.css';
// import '../../assets/css/plugins/nice-select.css';
// import '../../assets/css/plugins/venobox.min.css';
// import '../../assets/css/plugins/jquery.lineProgressbar.css';
// import '../../assets/css/plugins/aos.min.css';
// import '../../assets/css/style.css';
// JS library 


import Home from '../../container/Home/Home';
import Admin from '../../container/Admin';
import Login from '../../container/Login/Login';
import PrivateRoute from '../../hoc/PrivateRoute';
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin';
import Products from '../../container/Products/Products';
// import Admin from '../../container/Admin';
// import Dashboard from '../../container/Admin/Dashboard/Dashboard';
// import Account from '../../container/Admin/Account/Account';
// import Login from '../../container/Login/Login';
// import CustomersList from '../../container/Admin/Customers/CustomersList/CustomersList';
// import CustomersDetail from '../../container/Admin/Customers/CustomersDetail/CustomersDetail';
// import CustomersEdit from '../../container/Admin/Customers/CustomersEdit/CustomersEdit';
// import ProductList from '../../container/Admin/Products/ProductList/ProductList';
// import ProductCreate from '../../container/Admin/Products/ProductCreate/ProductCreate';
// import OrderList from '../../container/Admin/Orders/OrderList/OrderList';
// import OrderDetails from '../../container/Admin/Orders/OrderDetails/OrderDetails';
// import InvoicesList from '../../container/Admin/Invoices/InvoicesList/InvoicesList';
// import InvoicesDetails from '../../container/Admin/Invoices/InvoicesDetails/InvoicesDetails';
// import Header from '../HeaderLogin';
// import Footer from '../Footer';

// import { getProfileUser } from '../../state/actions';



function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     dispatch(getProfileUser());
  //   }
  // }, [dispatch])
  useEffect(() => {

    return () => {

    }
  }, [])
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/products" exact={true} component={Products} />
        {/* <Route path="/admin" exact={true} component={Admin}/> */}
        <Route path="/login" exact={true} component={Login} />
        <PrivateRoute path="/admin" exact={true} component={Admin} />

        {/* <Route path="/dashboard" exact="true">
            <Admin>
              <Dashboard/>
            </Admin>
          </Route>
          <Route path="/login" exact="true" component={Login}/> */}
        {/* <Redirect from="/"  to="/admin"/> */}
      </Router>

    </React.Fragment>
  );
}

export default React.memo(App);
