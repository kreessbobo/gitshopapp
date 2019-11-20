import React, { Component } from 'react'
import './login.css';

class Login extends Component {

    render() {
     return (
     <div>
         <form class="expense mx-auto">
             <div class="form-group border border-primary p-5 w-200 ml-80 bg-info justify-content-center">
                     <h1 class="text-center"> LOGIN PAGE </h1>
                 <label for="">Email:</label><br/>
                 <input id="name" type="text" placeholder="Email Address" class="form-control form-control-sm"/>

                     <label for="">Password:</label><br />
                     <input id="name" type="text" placeholder="password" class="form-control form-control-sm"/>
                         <br/>

                             <button type="submit" class="btn btn-danger">SUMMIT</button>
    
    </div>
   </form>
 </div>
     );

    }

}

export default Login;