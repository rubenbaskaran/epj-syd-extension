import React from "react";
import "../App.css";

function PatientInfoTabContent(props) {
  return (
    <div>
      <h3>Patient info</h3>
      <p>Firstname: {props.data ? props.data.firstname : ""}</p>
      <p>Lastname: {props.data ? props.data.lastname : ""}</p>
      <p>ICD 1: {props.data ? props.data.icd_1 : ""}</p>
      <p>Gender: {props.data ? props.data.gender : ""}</p>
      <p>Age: {props.data ? props.data.age : ""}</p>
      <p>LOS 1: {props.data ? props.data.los_1 : ""}</p>
      <p>Going to ICU 1: {props.data ? props.data.going_to_icu_1 : ""}</p>
      <p>Came through ED 1: {props.data ? props.data.came_through_ed_1 : ""}</p>
      <p>Contact type 1: {props.data ? props.data.contact_type_1 : ""}</p>
      <p>Dias_blod: {props.data ? props.data.dias_blod : ""}</p>
      <p>Sys_blod: {props.data ? props.data.sys_blod : ""}</p>
      <p>Saturation: {props.data ? props.data.saturation : ""}</p>
      <p>Temperature: {props.data ? props.data.temperature : ""}</p>
      <p>BMI: {props.data ? props.data.bmi : ""}</p>
      <p>Weight: {props.data ? props.data.weight : ""}</p>
      <p>ICD Age 1: {props.data ? props.data.icd_age_1 : ""}</p>
      <p>Contact type 2: {props.data ? props.data.contact_type_2 : ""}</p>
      <p>Came through ED 2: {props.data ? props.data.came_through_ed_2 : ""}</p>
      <p>Going to ICU 2: {props.data ? props.data.going_to_icu_2 : ""}</p>
      <p>ICD 2: {props.data ? props.data.icd_2 : ""}</p>
      <p>ICD Age 2: {props.data ? props.data.icd_age_2 : ""}</p>
      <p>LOS 2: {props.data ? props.data.los_2 : ""}</p>
    </div>
  );
}

export default PatientInfoTabContent;
