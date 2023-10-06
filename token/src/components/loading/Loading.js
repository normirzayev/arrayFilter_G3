import React from "react";

export default function Loading({ load }) {
  return (
    <div className={load ? "showLoad" : "closeLoad"}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
