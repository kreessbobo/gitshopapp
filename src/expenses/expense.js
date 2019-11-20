import React, { Component } from 'react'
import './expense.css';

class Expense extends Component {

    render() {
        return (
            <div>
                <div className="expense mx-auto">
                <div className="form-group border border-secondary p-5 w-0.5 ml-80 bg-faded justify-content-center"/>
                    <h1 className="text-center">  EXPENSES </h1>

                 <label for="">Expense name:</label><br />
                 <input id="name" type="text" placeholder="Expense name" class="form-control form-control-sm"/>

                 <label for="">Amount:</label><br />
                  <input id="name" type="text" placeholder="Amount" class="form-control form-control-sm"/>
                  <br/>

                 <label for="">Birthday:</label><br />
                <input id="name" type="text" placeholder="Birthday" class="form-control form-control-sm" />
                 <br />



                 <button type="submit" name="submit" class="btn btn-danger">SUBMIT</button>
               </div>
               </div>
            
    
    
        );
    }

}

 export default Expense;