import React, { Component } from 'react'
import './user.css';

class User extends Component {

    render() {
      return (
        <div>

              <form class="user mx-auto">
                <div class="form-group border border-primary p-5 w-200 ml-80 bg-primary justify-content-center">
                   <h1 class="text-center">  USER </h1>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                  
                         <input id="name" type="text" placeholder="Firstname" class="form-control form-control-sm"/>
                          </div>
                           <div class="form-group col-md-6">
                    
                    
                              <input id="name" type="text" placeholder="Lastname" class="form-control form-control-sm"/>
                          </div>
                    </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">
                      
                                <input id="star" type="text" placeholder="Stafftype" list="Stafftype" class="form-control form-control-sm"/>
                                 <datalist id="Stafftype">
                                     <option value="Manager"/>
                                     <option value="Supervisor"/>
                                     <option value="Cleaner"/>
                                </datalist>
                             </div>

                        <div class="form-group col-md-6">
                              
                               <input id="star" type="text" placeholder="Gender" list="Gender" class="form-control form-control-sm"/>
                                   <datalist id="Gender">
                                      <option value="Male"/>
                                      <option value="Female"/>
                                      <option value="Others"/>
                                   </datalist>
                       </div>

                 </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                              
                              <input id="name" type="text" placeholder="Phone" class="form-control form-control-sm"/>
                 </div>
                                  <div class="form-group col-md-6">
                                        
                                        
                               <input id="name" type="text" placeholder="Email" class="form-control form-control-sm"/>
                 </div>
                 </div>


                           <div class="form-row">
                                 <div class="form-group col-md-6">
                                        
                                            
                                     <input id="name" type="text" placeholder="Salary Grade" class="form-control form-control-sm"/>
                </div>
                                        <div class="form-group col-md-6">
                                            
                                          
                                     <input id="name" type="text" placeholder="Guarantor fullname" class="form-control form-control-sm"/>
                </div>
                                          </div>

                                          <div class="form-row">
                                            <div class="form-group col-md-6">
                                              
                                                
                                              <input id="name" type="text" placeholder="Guarantor Phone" class="form-control form-control-sm"/>
                </div>
                                              <div class="form-group col-md-6">
                                                
                                                  
                                                <input id="name" type="text" placeholder="Guarantor Address" class="form-control form-control-sm"/>
                </div>
                                              </div>

                                              
                                              <input id="pos" type="text" placeholder="Position" List="Position" class="form-control form-control-sm"/>
                                                <datalist id="Position">
                                                  <option value="Director"/>
                                                    <option value="Accountant"/>
                                                      <option value="Cleaner"/>
                                                         </datalist>
                                                             <br />
                                                      
                                                      <input id="name" type="text" placeholder="Staff Address" class="form-control form-control-sm"/>
                                                        <br/>
                                                          <button type="submit" name="submit" class="btn btn-danger">SUBMIT</button>
</div>

        </form>
        
   </div>
      );
   }
                                  
  }
                                  
 export default User;
