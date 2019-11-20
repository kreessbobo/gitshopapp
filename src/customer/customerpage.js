import React, { Component } from 'react'
import Customer from './customer';
import Verticaltop from '../verticalbar/verticaltop';
import Verticalside from '../verticalbar/verticalside';

class Customerpage extends Component {

   render() {
      return ( 

<div className="container-fluid">
      <div className="row">
           <div className="col-md-12">
               <Verticaltop />
           </div>
      </div>
      <div className="row">
            <div className="col-md-2">
                <Verticalside />
            </div>
            <div className="col-md-10">
                <Customer />
            </div>
     </div>
</div>


      )
  }
}


export default Customerpage;