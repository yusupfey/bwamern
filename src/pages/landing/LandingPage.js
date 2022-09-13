import React, { Component } from 'react';
import Header from '../../parts/Header';
class LandingPage extends Component {
    render() {
        return (
            <>
                {/* ...this.props ini metode es6 ketika ada spring oprator, dia akan di parsing ke component header*/}
                <Header {...this.props}></Header> 
                {/* Hallo */}
            </>
        );
    }
}

export default LandingPage;