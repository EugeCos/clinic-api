import React from "react";
import PropTypes from "prop-types";
import "./PageHeader.less";

const PageHeader = ({ pageText }) => {
  return (
    <div className="page-header-container">
      <h2>{pageText}</h2>
    </div>
  );
};

PageHeader.propTypes = {
  pageText: PropTypes.string.isRequired
};

export default PageHeader;
