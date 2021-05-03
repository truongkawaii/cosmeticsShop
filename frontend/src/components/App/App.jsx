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
import Admin from '../../container/Admin';
import Dashboard from '../../container/Admin/Dashboard/Dashboard';
import Account from '../../container/Admin/Account/Account';
import Login from '../../container/Login/Login';
import CustomersList from '../../container/Admin/Customers/CustomersList/CustomersList';
import CustomersDetail from '../../container/Admin/Customers/CustomersDetail/CustomersDetail';
import CustomersEdit from '../../container/Admin/Customers/CustomersEdit/CustomersEdit';
import ProductList from '../../container/Admin/Products/ProductList/ProductList';
import ProductCreate from '../../container/Admin/Products/ProductCreate/ProductCreate';
import OrderList from '../../container/Admin/Orders/OrderList/OrderList';
import OrderDetails from '../../container/Admin/Orders/OrderDetails/OrderDetails';
import InvoicesList from '../../container/Admin/Invoices/InvoicesList/InvoicesList';
import InvoicesDetails from '../../container/Admin/Invoices/InvoicesDetails/InvoicesDetails';
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

  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        
          <Route path="/dashboard" exact="true">
            <Admin>
              <Dashboard/>
            </Admin>
          </Route>

          <Route path="/account" exact="true">
            <Admin>
              <Account/>
            </Admin>
          </Route>
          <Route path="/customers/list" exact="true">
            <Admin>
               <CustomersList/>
            </Admin>
          </Route>
          <Route path="/customers/detail" exact="true">
            <Admin>
               <CustomersDetail/>
            </Admin>
          </Route>
          <Route path="/customers/edit" exact="true">
            <Admin>
               <CustomersEdit/>
            </Admin>
          </Route>
          <Route path="/product/list" exact="true">
            <Admin>
               <ProductList/>
            </Admin>
          </Route>
          <Route path="/product/create" exact="true">
            <Admin>
                <ProductCreate/>
            </Admin>
          </Route>
          <Route path="/orders/list" exact="true">
            <Admin>
                <OrderList/>
            </Admin>
          </Route>
          <Route path="/orders/detail" exact="true">
            <Admin>
                 <OrderDetails/>
            </Admin>
          </Route>
          <Route path="/invoices/list" exact="true">
            <Admin>
                  <InvoicesList/>
            </Admin>
          </Route>
          <Route path="/invoices/detail" exact="true">
            <Admin>
                  <InvoicesDetails/>
            </Admin>
          </Route>
          
          
          <Route path="/login" exact="true" component={Login}/>
          <Redirect from="/"  to="/dashboard"/>
      </Router>

    </React.Fragment>
  );
}

export default React.memo(App);
