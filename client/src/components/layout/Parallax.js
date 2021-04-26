import React from 'react';
import { Parallax } from 'react-parallax';
import img1 from '../../Images/city.jpg';

const ImgParallax = () => (
   <div>
        <Parallax bgImage={img1} bgImageAlt="the cat" strength={500} >
        <div style={{ height: 350,backgroundColor: "rgba(0, 0, 0, 0.5)"}} >
            <div className="white-text"
                style={{
                    left: "50%", top: "50%",
                    position: "absolute", padding: "20px",
                    transform: "translate(-50%,-50%)"
                }}>
                <h1 className="h1-responsive font-weight-bold text-center my-5">
                    ‘E-Crime System’ provides three facilities in one system that is Reporting,
                    Management, and Visualization of Crimes
                </h1>
            </div>
        </div>
    </Parallax>
   </div>
); 

export default ImgParallax;