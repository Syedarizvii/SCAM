import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import SideNavigation from "./sideNavigation";
import Routes from "./Routes";
import DashboardNavbar from "./dashboardNavbar";
import AdminDashboard from '../AdminDashboard/Dashboard';
import SideNavigationforAdmin from "../AdminDashboard/SideNavigationforAdmin";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        {user.email === "admin1@gmail.com" ? (
          <div>
            <DashboardNavbar />
            <SideNavigationforAdmin />
            <main id="content" className="p-5">
              <AdminDashboard/>
              {/* <p>This is admin dashboard</p> */}
            </main>
          </div>
        ) : (
          <div>
            <DashboardNavbar />
            <SideNavigation />
            <main id="content" className="p-5">
              <Routes />
            </main>
          </div>
        )}
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
