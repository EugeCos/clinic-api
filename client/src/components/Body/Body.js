import React, { Component } from "react";

// ---------REDUX---------
import { connect } from "react-redux";

class Body extends Component {
  handleClick = () => {
    console.log(this.props.patients);
  };
  componentDidMount() {
    console.log(this.props.patients);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get patients</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

export default connect(mapStateToProps)(Body);
