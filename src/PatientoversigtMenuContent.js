import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button, styled } from "@mui/material";

// diagnosis
// gender
// age
// duration
// going_to_icu
// came_through_ed
// contact_type

// ["DF10", 2, 50, 0, 0, 0, 1] --> 1
// ["DZ03", 1, 35, 50, 0, 0, 2 ] --> 0
// ["DS72", 2, 100, 55, 0, 0, 1] --> 0
// ["DF10", 1, 50, 55, 0, 0, 1] --> 1

function PatientoversigtMenuContent(props) {
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

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      const extractedData = Array.from(reader.result.split("\r\n"));
      var listOfLoadedPatients = [];

      extractedData.forEach((item) => {
        const singlePatientData = Array.from(item.split(","));
        let newLoadedPatient;

        if (singlePatientData.length === 9) {
          newLoadedPatient = {
            key: String(listOfLoadedPatients.length + 1),
            firstname: String(singlePatientData[0]),
            lastname: String(singlePatientData[1]),
            diagnosis: String(singlePatientData[2]),
            gender: parseInt(singlePatientData[3]),
            age: parseInt(singlePatientData[4]),
            duration: parseInt(singlePatientData[5]),
            going_to_icu: parseInt(singlePatientData[6]),
            came_through_ed: parseInt(singlePatientData[7]),
            contact_type: parseInt(singlePatientData[8]),
          };
        } else if (singlePatientData.length === 16) {
          newLoadedPatient = {
            key: String(listOfLoadedPatients.length + 1),
            firstname: String(singlePatientData[0]),
            lastname: String(singlePatientData[1]),
            gender: parseInt(singlePatientData[2]),
            age: parseInt(singlePatientData[3]),
            dias_blod: parseInt(singlePatientData[4]),
            sys_blod: parseInt(singlePatientData[5]),
            saturation: parseInt(singlePatientData[6]),
            temperature: parseInt(singlePatientData[7]),
            bmi: parseInt(singlePatientData[8]),
            weight: parseInt(singlePatientData[9]),
            contact_type: parseInt(singlePatientData[10]),
            came_through_ed: parseInt(singlePatientData[11]),
            going_to_icu: parseInt(singlePatientData[12]),
            icd: String(singlePatientData[13]),
            icd_age: parseInt(singlePatientData[14]),
            los: parseInt(singlePatientData[15]),
          };
        } else if (singlePatientData.length === 22) {
          newLoadedPatient = {
            key: String(listOfLoadedPatients.length + 1),
            firstname: String(singlePatientData[0]),
            lastname: String(singlePatientData[1]),
            gender: parseInt(singlePatientData[2]),
            age: parseInt(singlePatientData[3]),
            dias_blod: parseInt(singlePatientData[4]),
            sys_blod: parseInt(singlePatientData[5]),
            saturation: parseInt(singlePatientData[6]),
            temperature: parseInt(singlePatientData[7]),
            bmi: parseInt(singlePatientData[8]),
            weight: parseInt(singlePatientData[9]),
            contact_type_1: parseInt(singlePatientData[10]),
            came_through_ed_1: parseInt(singlePatientData[11]),
            going_to_icu_1: parseInt(singlePatientData[12]),
            icd_1: String(singlePatientData[13]),
            icd_age_1: parseInt(singlePatientData[14]),
            los_1: parseInt(singlePatientData[15]),
            contact_type_2: parseInt(singlePatientData[16]),
            came_through_ed_2: parseInt(singlePatientData[17]),
            going_to_icu_2: parseInt(singlePatientData[18]),
            icd_2: String(singlePatientData[19]),
            icd_age_2: parseInt(singlePatientData[20]),
            los_2: parseInt(singlePatientData[21]),
          };
        } else {
          return;
        }

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
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <h2>Patientoversigt</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
            alignItems: "center",
          }}
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
                height: "30px",
                width: "30px",
                cursor: "pointer",
              }}
            />
          </label>
        </div>
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
