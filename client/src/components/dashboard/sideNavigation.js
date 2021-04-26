import React, { Component } from 'react';
import logo from "../../Images/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import { Link as LinkScroll } from 'react-scroll';
import "../../style.css";

class TopNavigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src={logo} />
                </a>
                <MDBListGroup className="list-group-flush">
                    <Link exact={true} to="/dashboard" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="chart-pie" className="mr-3" />
                        Dashboard
                    </MDBListGroupItem>
                    <Link to="/" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3" />
                        Home
                    </MDBListGroupItem>
                    </Link>

                    </Link>
                    <Link to="/report" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3" />
                        Report a Case
                    </MDBListGroupItem>
                    </Link>
                    <Link to="/profile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="map" className="mr-3" />
                        Profile
                    </MDBListGroupItem>
                    </Link>
                    <LinkScroll
                        onClick={this.handleScroll}
                        to="View"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        style={{ color: "#2189CF" }}>
                        <MDBListGroupItem>
                            <MDBIcon icon="map" className="mr-3" />
                        View Reported Cases
                    </MDBListGroupItem>
                    </LinkScroll>
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Logout
                    </button>
                </MDBListGroup>
            </div>
        );
    }
}
TopNavigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(TopNavigation);




