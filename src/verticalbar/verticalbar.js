import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import './verticalbar.css';



class Verticalbar extends Component {

    render() {
        return (
           <div>


                <div class="head border border-info pt-3 mb-1">
                    <div class="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a href="#"><i class="fas fa-bell fa-2x mb-5"></i></a></li>
                            <li><a href="#"><i class="fas fa-circle fa-3x mb-5"></i></a></li>

                        </ul>
                    </div>
                </div>


                <div class="wrapper">
                    
        <nav id="sidebar">
                        <div class="sidebar-header">
                            <h5 class="text-warning">Dashboard</h5>
                        </div>
                        <br />

                        <ul class="list-unstyled components">
                            <li class="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle text-warning">Products</a>
                                <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Add Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Stocks</a>
                                    </li>
                                </ul>
                            </li>
                            <br />

                            <li>
                                <a href="#userSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle text-warning">Users</a>
                                <ul class="collapse list-unstyled" id="userSubmenu">
                                    <li>
                                        <a href="#">Add Staff</a>
                                    </li>
                                    <li>
                                        <a href="#">View Staff List</a>
                                    </li>
                                </ul>
                            </li>
                            <br />

                            <li>
                                <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle text-warning">Customers</a>
                                <ul class="collapse list-unstyled" id="customerSubmenu">
                                    <li>
                                        <a href="#">Add Customers</a>
                                    </li>
                                    <li>
                                        <a href="#">View Customer List</a>
                                    </li>
                                </ul>
                            </li>
                            <br />
                            <br />
                            <br />
                            <br />
                            <li>
                                <a href="#" class="text-warning">Logout</a>
                            </li>

                        </ul>


                    </nav>

                </div>
         
           </div>


        );

    }

}

export default Verticalbar;

