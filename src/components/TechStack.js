import React from "react";
import "./TechStack.css";

export default function TechStack(props) {
  const { title } = props;
  return (
    <div className="tech-stack-container">
      <span className="tech-stack-title">{title}</span>
    </div>
  );
}
