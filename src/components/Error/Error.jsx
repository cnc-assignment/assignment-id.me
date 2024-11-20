import React from "react";
import PropTypes from "prop-types";
import "./Error.css";

function Error({ errorMessage }) {
  return <div className="error-banner">{errorMessage}</div>;
}

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
