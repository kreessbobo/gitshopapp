import React, { Component } from 'react'
import './customer.css';

class Customer extends Component {

    render() {
        return (
            <div>
                <form class="customer mx-auto">
                    <div class="form-group border border-primary p-5 w-200 ml-80 bg-faded justify-content-center">
                      <h1 class="text-center">  CUSTOMER INFO </h1>

                 <label for="">Phone:</label><br />
                 <input id="name" type="text" placeholder="Phone no" class="form-control form-control-sm"/>

                 <label for="">Fullname:</label><br />
                  <input id="name" type="text" placeholder="Fullname" class="form-control form-control-sm"/>

                 <label for="">Birthday:</label><br />
                  <input id="name" type="text" placeholder="Birthday" class="form-control form-control-sm"/>
                     <br/>
                     <br/>

                 <button type="submit" class="btn btn-danger">SUMMIT</button> 
        </div>
</form>
           </div>



        );

    }

}

export default Customer;