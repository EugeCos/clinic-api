import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.less";

export default class SidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: "Home"
    };
  }
  render() {
    const menuItems = [
      { name: "Home", link: "/" },
      { name: "Patients", link: "/patients" },
      { name: "Search", link: "/search" }
    ];

    let menuItemsJSX = menuItems.map(item => {
      return (
        <Link
          to={item.link}
          className={`sidebar-menu-item-wrapper ${
            item.name === this.state.selectedItem ? "active" : ""
          }`}
          key={item.name}
          onClick={() => this.setState({ selectedItem: item.name })}
        >
          <span className="sidebar-menu-item">{item.name}</span>
        </Link>
      );
    });
    return <div className="sidebar-menu-wrapper">{menuItemsJSX}</div>;
  }
}
