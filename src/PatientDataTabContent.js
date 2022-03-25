import React from "react";
import "./App.css";

function PatientDataTabContent(props) {
  return (
    <div>
      <h3>Patient data</h3>
      <p>Firstname: {props?.data?.firstname ? props.data.firstname : ""}</p>
      <p>Lastname: {props?.data?.lastname ? props.data.lastname : ""}</p>
      <p>Points: {props?.data?.points ? props.data.points : ""}</p>
    </div>
  );
}

export default PatientDataTabContent;
