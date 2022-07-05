import React from "react";
import "./App.css";

function PatientInfoTabContent(props) {
  return (
    <div>
      <h3>Patient info</h3>
      <p>Fornavn: {props.data ? props.data.firstname : ""}</p>
      <p>Efternavn: {props.data ? props.data.lastname : ""}</p>
      <p>Diagnosis: {props.data ? props.data.diagnosis : ""}</p>
      <p>Gender: {props.data ? props.data.gender : ""}</p>
      <p>Age: {props.data ? props.data.age : ""}</p>
      <p>Duration: {props.data ? props.data.duration : ""}</p>
      <p>Going to ICU: {props.data ? props.data.going_to_icu : ""}</p>
      <p>Came through ED: {props.data ? props.data.came_through_ed : ""}</p>
      <p>Contact type: {props.data ? props.data.contact_type : ""}</p>
    </div>
  );
}

export default PatientInfoTabContent;
