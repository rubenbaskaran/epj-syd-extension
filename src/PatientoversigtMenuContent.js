import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button, styled } from "@mui/material";

// diagnosis
// gender
// age
// duration
// goingtoicu
// camethroughed
// contacttype

// ["DF10", 2, 50, 0, 0, 0, 1] --> 1
// ["DZ03", 1, 35, 50, 0, 0, 2 ] --> 0
// ["DS72", 2, 100, 55, 0, 0, 1] --> 0
// ["DF10", 1, 50, 55, 0, 0, 1] --> 1

// TODO 1: Copy-paste data upload function

function PatientoversigtMenuContent(props) {
  const [filename, setFilename] = React.useState(null);

  function CustomEventHandler() {
    if (this.className === "selected") {
      this.className = "";
    } else {
      var trs = document.querySelectorAll("tr");
      for (var i = 0; i < trs.length; i++) {
        trs[i].className = "";
      }

      this.className = "selected";

      var rowData = props.patients.find(
        (patient) => patient.key === this.cells[0].innerHTML
      );

      props.setChosenPatient(rowData);
    }
  }

  React.useEffect(() => {
    var trs = document.querySelectorAll("tbody tr");
    for (var i = 0; i < trs.length; i++) {
      var currentRow = trs[i];

      currentRow.addEventListener("click", CustomEventHandler);
    }

    return () => {
      var trs = document.querySelectorAll("tbody tr");
      for (var i = 0; i < trs.length; i++) {
        var currentRow = trs[i];

        currentRow.removeEventListener("click", CustomEventHandler);
      }
    };
  }, [props.patients]);

  const Input = styled("input")({
    display: "none",
  });

  function handleFiles(data) {
    const file = data.target.files[0];

    if (!file) {
      return;
    }

    setFilename(file.name);
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      const extractedData = Array.from(reader.result.split("\r\n"));
      var listOfLoadedPatients = [];

      extractedData.forEach((item) => {
        const singlePatientData = Array.from(item.split(","));

        const newLoadedPatient = {
          key: String(listOfLoadedPatients.length + 1),
          firstname: String(singlePatientData[0]),
          lastname: String(singlePatientData[1]),
          diagnosis: String(singlePatientData[2]),
          gender: parseInt(singlePatientData[3]),
          age: parseInt(singlePatientData[4]),
          duration: parseInt(singlePatientData[5]),
          goingtoicu: parseInt(singlePatientData[6]),
          camethroughed: parseInt(singlePatientData[7]),
          contacttype: parseInt(singlePatientData[8]),
        };

        listOfLoadedPatients.push(newLoadedPatient);
      });

      props.setChosenPatient(null);
      props.setPatients(listOfLoadedPatients);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <label htmlFor="input">
          <Input
            id="input"
            type="file"
            accept=".csv"
            onChange={(event) => handleFiles(event)}
          />
          <FontAwesomeIcon
            id="input"
            icon={faFileArrowUp}
            style={{
              color: "#234E5E",
              marginRight: 10,
              marginBottom: 3,
              height: "25px",
              width: "25px",
            }}
          />
        </label>
        <h2>Patientoversigt</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fornavn</th>
            <th>Efternavn</th>
          </tr>
        </thead>
        <tbody>
          {props.patients.map((patient) => (
            <tr key={patient.key}>
              <td>{patient.key}</td>
              <td>{patient.firstname}</td>
              <td>{patient.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientoversigtMenuContent;
