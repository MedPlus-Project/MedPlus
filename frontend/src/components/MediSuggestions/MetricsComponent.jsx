// MetricsComponent.js
import React from "react";

const MetricsComponent = ({ label, value, status }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "high":
        return "text-red";
      case "critical":
        return "text-red";
      case "normal":
        return "text-emerald-500";
      case "low":
        return "text-yellow";
      default:
        return "text-white";
    }
  };

  return (
    <div className="flex flex-col-reverse place-items-center">
      <dt className="text-base leading-7 text-gray-300">{label}</dt>
      <dd
        className={`text-2xl font-bold leading-9 tracking-tight ${getStatusColor()}`}
      >
        {value}
        <br />
        <span className={`text-sm`}>{status}</span>
      </dd>
    </div>
  );
};

export default MetricsComponent;
