import React from "react";
import "./App.css";

function OpgaveInfoTabContent(props) {
  return (
    <div>
      <h3>Opgave info</h3>
      <p>Opgave 1: {props?.data?.firstname ? props.data.firstname : ""}</p>
      <p>Opgave 2: {props?.data?.lastname ? props.data.lastname : ""}</p>
      <p>Opgave 3: {props?.data?.points ? props.data.points : ""}</p>
    </div>
  );
}

export default OpgaveInfoTabContent;
