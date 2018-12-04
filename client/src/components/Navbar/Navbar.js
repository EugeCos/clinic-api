import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenuIcon: false,
      menuItems: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Patients",
          link: "/patients"
        },
        {
          name: "Search",
          link: "/search"
        }
      ]
    };
  }

  toggleMenuIcon = () => {
    this.setState({
      toggleMenuIcon: !this.state.toggleMenuIcon
    });
  };

  closeMenu = () => {
    this.setState({
      toggleMenuIcon: false
    });
  };

  render() {
    const screenWidth = window.innerHeight;
    const { toggleMenuIcon, menuItems } = this.state;

    return (
      <div className="navbar-container">
        {screenWidth < 1024 ? (
          <div className="navbar-logo-wrapper">iWound</div>
        ) : (
          ""
        )}
        <div
          className="three-bars-icon-container"
          onClick={this.toggleMenuIcon}
        >
          <div className={`bar-1 ${toggleMenuIcon ? "change-1" : ""}`} />
          <div className={`bar-2 ${toggleMenuIcon ? "change-2" : ""}`} />
          <div className={`bar-3 ${toggleMenuIcon ? "change-3" : ""}`} />
        </div>

        {screenWidth < 1024 ? (
          <MenuListMobile
            menuItems={menuItems}
            toggleMenuIcon={toggleMenuIcon}
            closeMenu={this.closeMenu}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Navbar;

const MenuListMobile = ({ ...props }) => {
  const { menuItems, toggleMenuIcon, closeMenu } = props;
  let menuItemsJSX = menuItems.map(item => {
    return (
      <Link
        to={item.link}
        key={item.name}
        className={`menu-item ${item.name.replace(/\s/g, "").toLowerCase()}`}
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  });

  return (
    <div className={`menu-items-container ${toggleMenuIcon ? "" : "hide"}`}>
      <div className="menu-item-wrapper">{menuItemsJSX}</div>
      {/* Background dark overlay  */}
      <div
        onClick={toggleMenuIcon}
        className="overlay"
        style={
          toggleMenuIcon
            ? { background: "#000000" }
            : { background: "transparent", pointerEvents: "none" }
        }
      />
    </div>
  );
};
