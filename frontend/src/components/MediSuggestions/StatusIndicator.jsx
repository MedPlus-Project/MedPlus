// StatusIndicator.js
import React from "react";

const StatusIndicator = ({ status }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "critical":
        return "text-red";
      case "normal":
        return "text-emerald-500";
      default:
        return "text-gray";
    }
  };

  return (
    <h2
      className={`text-4xl font-bold tracking-tight sm:text-6xl ${getStatusColor()}`}
    >
      {status}
    </h2>
  );
};

export default StatusIndicator;
