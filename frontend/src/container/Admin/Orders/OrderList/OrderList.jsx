import React from 'react'
import './OrderList.scss'
function OrderList() {
    return (
        <div className="order-list">
             <h2>Order List</h2>
         
          <p>Dashboard {'>'} <span>Orders</span></p>
       
        
        <div className="table-app">
        <p className="hide">Click the names to see more data.</p>
<table>
	<thead>
	<tr class="table-headers">
    <th>Name</th>
    <th>Number</th>
    <th>Market rate</th>
    <th>Status</th>
    <th>Value</th>
	</tr>
	</thead>
	<tbody>
    <tr>
      <td>PlayCo Group Universal Flex</td>
      <th class="mobile-header">Number</th><td>2489</td>
      <th class="mobile-header">Market rate</th><td>€12.35</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€1,536.96</td>
    </tr>
    <tr>
      <td>House of Dedgeny EUR Flex</td>
      <th class="mobile-header">Number</th><td>5478</td>
      <th class="mobile-header">Market rate</th><td>€42.68	</td>
      <th class="mobile-header">Status</th><td><span className="completed info">COMPLETED</span></td>
      <th class="mobile-header">Value</th><td>€4,676.02</td>
    </tr>
    <tr>
      <td>PlayCo Group Local</td>
      <th class="mobile-header">Number</th><td>123</td>
      <th class="mobile-header">Market rate</th><td>€147.36</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€543.76</td>
    </tr>
    <tr>
      <td>PlayCo Group Low</td>
      <th class="mobile-header">Number</th><td>5477</td>
      <th class="mobile-header">Market rate</th><td>€147.00</td>
      <th class="mobile-header">Status</th><td><span className="completed info">COMPLETED</span></td>
      <th class="mobile-header">Value</th><td>€80,511.90</td>
    </tr>
     <tr>
      <td>House of Dedgeny High</td>
      <th class="mobile-header">Number</th><td>5899</td>
      <th class="mobile-header">Market rate</th><td>€ 288.00</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€67,956.48</td>
    </tr>
    <tr>
      <td>House of Dedgeny USD Med</td>
      <th class="mobile-header">Number</th><td>11477</td>
      <th class="mobile-header">Market rate</th><td>€18.00</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€10,329.30</td>
    </tr>
     <tr>
      <td>Sterck Inc. Med</td>
      <th class="mobile-header">Number</th><td>1476</td>
      <th class="mobile-header">Market rate</th><td>€187.00</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€27,601.20</td>
    </tr>
    <tr>
      <td>PlayCo Group Universal High</td>
      <th class="mobile-header">Number</th><td>6547</td>
      <th class="mobile-header">Market rate</th><td>€782.00</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€614,370.48</td>
    </tr>
     <tr>
      <td>PlayCo Group Universal Low</td>
      <th class="mobile-header">Number</th><td>1476</td>
      <th class="mobile-header">Market rate</th><td>€187.00</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€27,601.20</td>
    </tr>
    <tr>
      <td>PlayCo Group Universal High</td>
      <th class="mobile-header">Number</th><td>1471</td>
      <th class="mobile-header">Market rate</th><td>€148.00</td>
      <th class="mobile-header">Status</th><td><span className="completed info">COMPLETED</span></td>
      <th class="mobile-header">Value</th><td>€39,187.44</td>
    </tr>
     <tr>
      <td>Sterck Inc. Low</td>
      <th class="mobile-header">Number</th><td>1978</td>
      <th class="mobile-header">Market rate</th><td>€68.23</td>
      <th class="mobile-header">Status</th><td><span className="completed info">COMPLETED</span></td>
      <th class="mobile-header">Value</th><td>€14,845.48</td>
    </tr>
    <tr>
      <td>Sterck Inc. Universal High</td>
      <th class="mobile-header">Number</th><td>6512</td>
      <th class="mobile-header">Market rate</th><td>€642.02</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€209,041.71</td>
    </tr>
     <tr>
      <td>Sterck Inc. Flex</td>
      <th class="mobile-header">Number</th><td>5423</td>
      <th class="mobile-header">Market rate</th><td>€78.96</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€29,974.01</td>
    </tr>
    <tr>
      <td>PlayCo Group Universal Med</td>
      <th class="mobile-header">Number</th><td>7812</td>
      <th class="mobile-header">Market rate</th><td>€54.86</td>
      <th class="mobile-header">Status</th><td> <span className="pending info">PENDING</span> </td>
      <th class="mobile-header">Value</th><td>€34,285.31</td>
    </tr>
    <tr class='total'>
      <th>Total</th>
      <td class="total-val" colspan="4">€1,134,860.04</td>
    </tr>
	</tbody>
</table>
        </div>
        
        </div>

    )
}

export default OrderList
