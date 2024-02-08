// TipsComponent.js
import React from "react";

const TipsComponent = ({ tip }) => {
  return (
    <li className="mt-3  text-lg leading-8 text-gray-300">
      {tip}
    </li>
  );
};

export default TipsComponent;
