import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

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
  const [patients, setPatients] = React.useState([
    {
      key: "1",
      firstname: "Jill",
      lastname: "Smith",
      diagnosis: "DF10",
      gender: 2,
      age: 50,
      duration: 0,
      goingtoicu: 0,
      camethroughed: 0,
      contacttype: 1,
    },
    {
      key: "2",
      firstname: "Adam",
      lastname: "Jensen",
      diagnosis: "DZ03",
      gender: 1,
      age: 35,
      duration: 50,
      goingtoicu: 0,
      camethroughed: 0,
      contacttype: 2,
    },
    {
      key: "3",
      firstname: "Eva",
      lastname: "Johnson",
      diagnosis: "DS72",
      gender: 2,
      age: 100,
      duration: 55,
      goingtoicu: 0,
      camethroughed: 0,
      contacttype: 1,
    },
    {
      key: "4",
      firstname: "Michael",
      lastname: "Hansen",
      diagnosis: "DF10",
      gender: 1,
      age: 50,
      duration: 55,
      goingtoicu: 0,
      camethroughed: 0,
      contacttype: 1,
    },
    // {
    //   key: "5",
    //   firstname: "Jill",
    //   lastname: "Smith",
    //   diagnosis: "DF10",
    //   gender: 2,
    //   age: 50,
    //   duration: 0,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
    // {
    //   key: "6",
    //   firstname: "Adam",
    //   lastname: "Jensen",
    //   diagnosis: "DZ03",
    //   gender: 1,
    //   age: 35,
    //   duration: 50,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 2,
    // },
    // {
    //   key: "7",
    //   firstname: "Eva",
    //   lastname: "Johnson",
    //   diagnosis: "DS72",
    //   gender: 2,
    //   age: 100,
    //   duration: 55,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
    // {
    //   key: "8",
    //   firstname: "Michael",
    //   lastname: "Hansen",
    //   diagnosis: "DF10",
    //   gender: 1,
    //   age: 50,
    //   duration: 55,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
    // {
    //   key: "9",
    //   firstname: "Jill",
    //   lastname: "Smith",
    //   diagnosis: "DF10",
    //   gender: 2,
    //   age: 50,
    //   duration: 0,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
    // {
    //   key: "10",
    //   firstname: "Adam",
    //   lastname: "Jensen",
    //   diagnosis: "DZ03",
    //   gender: 1,
    //   age: 35,
    //   duration: 50,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 2,
    // },
    // {
    //   key: "11",
    //   firstname: "Eva",
    //   lastname: "Johnson",
    //   diagnosis: "DS72",
    //   gender: 2,
    //   age: 100,
    //   duration: 55,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
    // {
    //   key: "12",
    //   firstname: "Michael",
    //   lastname: "Hansen",
    //   diagnosis: "DF10",
    //   gender: 1,
    //   age: 50,
    //   duration: 55,
    //   goingtoicu: 0,
    //   camethroughed: 0,
    //   contacttype: 1,
    // },
  ]);

  React.useEffect(() => {
    var trs = document.querySelectorAll("tbody tr");
    for (var i = 0; i < trs.length; i++) {
      var currentRow = trs[i];

      currentRow.addEventListener("click", function () {
        if (this.className === "selected") {
          this.className = "";
        } else {
          var trs = document.querySelectorAll("tr");
          for (var i = 0; i < trs.length; i++) {
            trs[i].className = "";
          }

          this.className = "selected";

          var rowData = patients.find(
            (patient) => patient.key === this.cells[0].innerHTML
          );

          props.setChosenPatient(rowData);
        }
      });
    }
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <FontAwesomeIcon
          icon={faFileArrowUp}
          onClick={() => {
            console.log("hello!!");
          }}
          style={{
            color: "#234E5E",
            marginRight: 10,
            marginBottom: 3,
            height: "25px",
            width: "25px",
          }}
        />
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
          {patients.map((patient) => (
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
