import React, { Component } from 'react';
import Landing from './Landing';
import Features from './Features';
import Footer from './footer';
import Parallax from './Parallax';
import About from './About';

class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Landing/>
                <About/>
                <Parallax/>
                <Features/>
                <Footer/>
            </div>
         );
    }
}
 
export default Index;