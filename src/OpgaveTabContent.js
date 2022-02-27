import React from "react";
import "./App.css";

function LondonTabContent(props) {
  return (
    <div>
      <h3>Opgave</h3>
      <p>Firstname: {props?.data?.firstname ? props.data.firstname : ""}</p>
      <p>Lastname: {props?.data?.lastname ? props.data.lastname : ""}</p>
      <p>Points: {props?.data?.points ? props.data.points : ""}</p>
    </div>
  );
}

export default LondonTabContent;
