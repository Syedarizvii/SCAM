import React from "react";
import { MDBBtn, MDBRow, MDBContainer, MDBCol, MDBAnimation } from "mdbreact";
import "../../style.css";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="main-image">
        <div>
        <MDBRow>
          <MDBCol
            lg="4"
            style={{
              marginTop: "100px",
              marginLeft: "50px",
              textAlign: "justify"
            }}
            className="Landing-size-4-col"
          >
            <h1 className="text-center">E-CRIME SYSTEM</h1>
            <div className="heading-line">
              <div className="heading-line-dot"></div>
            </div>
            <p className="mt-4">
              “E-CRIME SYSTEM” (Online Crime Reporting, Management and
              Visualization), which aims to provide faster and portable crime
              management and reporting system. It is a perfect and handy
              solution for reporting a crime, managing crime records and
              visualizing these records through charts.
            </p>
            <MDBBtn gradient="blue" href="About.js">
              Learn More
            </MDBBtn>
          </MDBCol>

          <MDBCol lg="7" className="Landing-size-8-col">
            <img
              className="management"
              src={require("../../Images/manage.jpg")}
              alt=""
            />
            <MDBAnimation type="bounce" infinite className="slower">
              <img
                className="manage-text"
                src={require("../../Images/manage-text.png")}
                alt=""
              />
            </MDBAnimation>

            <img
              className="visualization"
              src={require("../../Images/visualisation.jpg")}
              alt=""
            />
            <MDBAnimation type="bounce" infinite className="slower">
              <img
                className="Visualize-text"
                src={require("../../Images/visualiza-text.png")}
                alt=""
              />
            </MDBAnimation>

            <img
              className="reporting"
              src={require("../../Images/reportt.jpg")}
              alt=""
            />
            <MDBAnimation type="bounce" infinite className="slower">
              <img
                className="report-text"
                src={require("../../Images/report-text.png")}
                alt=""
              />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        </div>
      </div>
    </div>
  );
};

export default Landing;
