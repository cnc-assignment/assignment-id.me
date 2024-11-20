import React from "react";
import PropTypes from "prop-types";
import "./locationIcon.css";

function CustomLocationIcon({ url }) {
  return <img className="location-icon" src={url} />;
}

CustomLocationIcon.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CustomLocationIcon;
