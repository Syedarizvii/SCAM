import React, { Component } from "react";
import { MDBRow, MDBCol} from "mdbreact";
import Chart from './Chart';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4
          style={{
            color: "#00247E",
            textAlign: "center",
            fontSize: "40px",
          }}
          className="font-weight-bold signup-signin-heading mb-5"
        >
          Visualization of Cases
        </h4>
        <h3
          style={{
            color: "#00247E",
            textDecoration: "underline",
            fontFamily: "Libre Baskerville",
            fontWeight: "bold",
          }}
          className="mb-5"
        >
          Total Number Of Cases:
        </h3>
        <MDBRow>
          <MDBCol size="4" md="4">
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                padding: "20px",
              }}
              width="360vh"
              height="480vh"
              src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=26af24a0-ca95-4a73-a5f3-ce86c6158bbb&theme=light"
            ></iframe>
          </MDBCol>
          <MDBCol size="4" md="4">
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                padding: "20px",
                marginBottom: "20px",
              }}
              width="350"
              height="215"
              src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=8628d462-afd4-4aff-a291-1970ddecd260&theme=light"
            ></iframe>
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                padding: "20px",
                marginTop: "20px",
              }}
              width="350"
              height="220"
              src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=026faad2-a2b7-43e2-bd7d-123ca92a9b74&theme=light"
            ></iframe>
          </MDBCol>
          <MDBCol size="4" md="4">
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: " 2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                padding: "20px",
                marginBottom: "20px",
              }}
              width="350"
              height="215"
              src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=d2c585e0-b51f-4ac6-b081-749bd67f3dd3&theme=light"
            ></iframe>
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                padding: "20px",
                marginTop: "20px",
              }}
              width="350"
              height="220"
              src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=5a3cdc37-c466-47b5-8e1f-e7e3be6e4503&theme=light"
            ></iframe>
          </MDBCol>
        </MDBRow>

        <br />
        <br />
        <h3
          style={{
            color: "#00247E",
            textDecoration: "underline",
            fontFamily: "Libre Baskerville",
            fontWeight: "bold",
          }}
          className="mb-5"
        >
          Crime Ratio in a Country:
        </h3>
        <div style={{textAlign:"center"}}>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="1000"
            height="500"
            src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=b42a5962-e0f1-4021-a1ca-8e46f83840ba&autoRefresh=10&theme=light"
          ></iframe>
        </div>

        <br/>
        <br/>
        <h3
          style={{
            color: "#00247E",
            textDecoration: "underline",
            fontFamily: "Libre Baskerville",
            fontWeight: "bold",
          }}
          className="mb-5"
        >
          Total Cases of Each Category:
        </h3>
        <div style={{textAlign:"center"}}>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="1000"
            height="500"
            src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=33c3ad1d-42d2-478c-9cbb-13ad5f277dee&theme=light"
          ></iframe>
        </div>
        {/* <Chart/> */}
      </div>
    );
  }
}

export default Dashboard;
