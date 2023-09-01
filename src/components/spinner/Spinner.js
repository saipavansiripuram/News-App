import React, { Component } from 'react';
import loading from './loading.gif'
class Spinner extends Component {
    render() {
        return (
            <div className='container'>
            <div className="text-center ">
                <div >

                <img src={loading} alt="loading" className="img-fluid"/>
                </div>
            </div>

            </div>
        );
    }
}

export default Spinner;