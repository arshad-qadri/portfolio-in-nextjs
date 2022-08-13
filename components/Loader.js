import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
