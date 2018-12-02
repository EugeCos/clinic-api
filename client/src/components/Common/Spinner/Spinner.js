import React from "react";
import "./Spinner.less";

// -------------MATERIAL UI--------------
import CircularProgress from "material-ui/CircularProgress";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <CircularProgress size={60} thickness={5} color={"#fd79a8"} />
    </div>
  );
}
