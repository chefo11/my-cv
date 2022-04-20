import React from "react";
import "./basicDetails.css";

function BasicDetails() {
  return (
    <div className="info-container">
      <div className="basic-details">
        <div className="basic-details-header">
          <div className="name">Chukwuemeka Francis</div>
          <div className="title">Software Engineer</div>
        </div>
        <div className="basic-details-body">
          <div className="email">fran6cool@gmail.com</div>
          <div className="phone">+2347068541072</div>
          <div className="address">27 olajide Street</div>
          <div className="website">https://github.com/chefo11</div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
