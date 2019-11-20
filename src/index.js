import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import Dashyb from './dashyb/dashybpage';
import Login from './login/login';
import Product from './product/productpage';
import Customer from './customer/customerpage';
import User from './user/userpage';
import Expense from './expenses/expensepage';
import Verticalbar from './verticalbar/verticalbar';




const routing = (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/dashybpage" component={Dashyb} />
        <Route path="/productpage" component={Product} />
        <Route path="/customerpage" component={Customer} />
        <Route path="/userpage" component={User} />
        <Route path="/expensepage" component={Expense} />
        <Route path="/verticalbar" component={Verticalbar} />
        
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



//http://create-react-app-dev 
