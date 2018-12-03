import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SidebarMenu.less";

// ----------Redux----------
import { connect } from "react-redux";
import { updateCurrentPage } from "../../../actions/navigationActions";

class SidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: "home"
    };
  }

  // Sidebar menu to change if user refreshes the page or manually types a URL
  componentDidMount() {
    const location = window.location.pathname;
    if (location !== "/") {
      this.setState({
        selectedItem: location.substr(1)
      });
      this.props.updateCurrentPage(location.substr(1));
    }
  }

  // Sidebar menu to change if user navigates to a specific Sidebar menu item from another location
  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItem: nextProps.currentPage });
  }

  updatePage = pageName => {
    this.setState({ selectedItem: pageName });
    this.props.updateCurrentPage(pageName);
  };

  render() {
    const menuItems = [
      { name: "home", link: "/" },
      { name: "patients", link: "/patients" },
      { name: "search", link: "/search" }
    ];

    let menuItemsJSX = menuItems.map(item => {
      return (
        <Link
          to={item.link}
          className={`sidebar-menu-item-wrapper ${
            item.name === this.state.selectedItem ? "active" : ""
          }`}
          key={item.name}
          onClick={() => this.updatePage(item.name)}
        >
          <span className="sidebar-menu-item">{item.name}</span>
        </Link>
      );
    });
    return <div className="sidebar-menu-wrapper">{menuItemsJSX}</div>;
  }
}

SidebarMenu.propTypes = {
  currentPage: PropTypes.string.isRequired,
  updateCurrentPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

export default connect(
  mapStateToProps,
  { updateCurrentPage }
)(SidebarMenu);
