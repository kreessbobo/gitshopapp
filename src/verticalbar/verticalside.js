import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './verticalbar.css';

class Verticalside extends Component {

    render() {
        return (
            <div>

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
                        <Link to="productpage">Add Products</Link>
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
                        <Link to="Userpage">Add User</Link>
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
                        <Link to="customerpage">Add Customers</Link>
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
                <Link to="Login" class="text-warning">Logout</Link>
            </li>

        </ul>


    </nav>

</div>
</div>

        );

    }

}

export default Verticalside;
