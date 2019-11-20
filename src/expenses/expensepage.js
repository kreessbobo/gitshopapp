import React, { Component } from 'react'
import Expense from './expense';
import Verticaltop from '../verticalbar/verticaltop';
import Verticalside from '../verticalbar/verticalside';

class Expensepage extends Component {

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
                        <Expense />
                    </div>
                </div>
            </div>




        )
    }
}

export default Expensepage;