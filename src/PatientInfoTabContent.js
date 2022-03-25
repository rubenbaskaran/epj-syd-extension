import React from "react";
import "./App.css";

function PatientInfoTabContent(props) {
  return (
    <div>
      <h3>Patient info</h3>
      <p>Fornavn: {props?.data?.fornavn ? props.data.fornavn : ""}</p>
      <p>Efternavn: {props?.data?.efternavn ? props.data.efternavn : ""}</p>
      <p>Alder: {props?.data?.alder ? props.data.alder : ""}</p>
    </div>
  );
}

export default PatientInfoTabContent;
