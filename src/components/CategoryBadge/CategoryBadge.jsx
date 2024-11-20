import React from "react";

import "./categoryBadge.css";

export default function CategoryBadge({ category = "" }) {
  let categoryClass = "";
  switch (category) {
    case "Apparel":
    case "Automotive":
    case "Food":
    case "Footwear":
    case "Entertainment":
    case "Travel":
    case "Technology":
      categoryClass = category;
      break;
    default:
      categoryClass = "default";
  }

  return <div className={`product-category ${categoryClass}`}>{category}</div>;
}
