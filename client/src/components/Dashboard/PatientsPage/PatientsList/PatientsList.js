import React, { Component } from "react";
import "./PatientsList.less";

// -----------Material UI------------
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

export default class PatientsList extends Component {
  render() {
    return (
      <div className="patients-list-container">
        <List>
          <ListItem
            primaryText="Adelle Charles"
            secondaryText="Number of wounds: 10"
            leftAvatar={<Avatar src="img/bg_abstract.JPG" />}
            rightIcon={
              <div class="severity-tooltip">
                <span class="tooltiptext">Injury severity level</span>
              </div>
            }
          />
          <ListItem
            primaryText="Adelle Charles"
            leftAvatar={<Avatar src="images/adellecharles-128.jpg" />}
          />
          <ListItem
            primaryText="Adelle Charles"
            leftAvatar={<Avatar src="images/adellecharles-128.jpg" />}
          />
          <ListItem
            primaryText="Adelle Charles"
            leftAvatar={<Avatar src="images/adellecharles-128.jpg" />}
          />
        </List>
      </div>
    );
  }
}
