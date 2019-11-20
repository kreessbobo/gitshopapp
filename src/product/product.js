import React, { Component } from 'react'
import './product.css';

class Product extends Component {

    render() {
        return (
            <div>
                <form class="product mx-auto">
                    <div class="form-group border border-secondary p-5 w-200 ml-80 bg-inverse justify-content-center">
                        <h3 class="text-center">  PRODUCT INFO </h3>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                
                                
                                <input id="name" type="text" placeholder="Product name" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group col-md-6">
                            
                                
                                <input id="name" type="text" placeholder="Ram Specs" class="form-control form-control-sm" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            
                                <input id="star" type="text" placeholder="OS" list="OS" class="form-control form-control-sm" />
                                <datalist id="OS">
                                    <option value="k" />
                                    <option value="y" />
                                    <option value="L" />
                                </datalist>
                            </div>
                            <div class="form-group col-md-6">
                                
                                <input id="star" type="text" placeholder="Color" list="Color" class="form-control form-control-sm" />
                                <datalist id="Color">
                                    <option value="white" />
                                    <option value="black" />
                                    <option value="gold" />
                                </datalist>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            
                                
                                <input id="name" type="text" placeholder="Year of make" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                
                                
                                <input id="name" type="text" placeholder="Network info" class="form-control form-control-sm" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            
                                
                                <input id="name" type="text" placeholder="Model" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group col-md-6">
                            
                                
                                <input id="name" type="text" placeholder="Serial no" class="form-control form-control-sm" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                
                                
                                <input id="name" type="text" placeholder="Imei no" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                
                            
                                <input id="name" type="text" placeholder="Camera Specs" class="form-control form-control-sm" />
                            </div>
                        </div>

                        
                        <input id="name" type="text" placeholder="Rom Specs" class="form-control form-control-sm" />
                        
                         <br/>
                        
                        <input id="star" type="text" placeholder="Brand" List="Brand" class="form-control form-control-sm" />
                        <datalist id="Brand">
                            <option value="Nokia" />
                            <option value="Samsung" />
                            <option value="Iphone" />
                        </datalist>
                            
                        <button type="submit" name="submit" class="btn btn-danger">SUBMIT</button>
                    </div>

                </form>

            </div>



        );

    }

}

export default Product;