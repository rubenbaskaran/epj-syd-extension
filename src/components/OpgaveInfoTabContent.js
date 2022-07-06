import React from "react";
import "../App.css";

function OpgaveInfoTabContent(props) {
  return (
    <div>
      <h3>Opgave info</h3>
      <p>Titel: {props?.data?.titel ? props.data.titel : ""}</p>
      <p>Type: {props?.data?.type ? props.data.type : ""}</p>
      <p>Prioritet: {props?.data?.prioritet ? props.data.prioritet : ""}</p>
    </div>
  );
}

export default OpgaveInfoTabContent;
