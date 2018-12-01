import React, { Component } from "react";
import "./Sidebar.less";

// -------------Components-------------
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <SidebarLogo />
        <SidebarMenu />
      </div>
    );
  }
}
