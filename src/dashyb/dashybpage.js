import React, { Component } from 'react'
import Dashyb from './dashyb';
import Verticaltop from '../verticalbar/verticaltop';
import Verticalside from '../verticalbar/verticalside';

class Dashybpage extends Component {

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
                        <Dashyb />
                    </div>
                </div>
            </div>




        )
    }
}

export default Dashybpage;