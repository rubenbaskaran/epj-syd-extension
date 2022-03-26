import React from "react";
import "./App.css";

// TODO 2: Tilføj ny list item til Mine Opgaver, ved klik på en patient (sæt variabel modtaget via. props, så ny list item sendes til app.js)

function PatientoversigtMenuContent(props) {
  const [patients, setPatients] = React.useState([
    { fornavn: "Jill", efternavn: "Smith", alder: "50" },
    { fornavn: "Eva", efternavn: "Jensen", alder: "94" },
    { fornavn: "Adam", efternavn: "Johnson", alder: "67" },
    { fornavn: "Michael", efternavn: "Hansen", alder: "45" },
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

          var rowData = {
            fornavn: this.cells[0].innerHTML,
            efternavn: this.cells[1].innerHTML,
            alder: this.cells[2].innerHTML,
          };

          props.setChosenPatient(rowData);
        }
      });
    }
  }, []);

  return (
    <div>
      <h2>Patientoversigt</h2>
      <table>
        <thead>
          <tr>
            <th>Fornavn</th>
            <th>Efternavn</th>
            <th>Alder</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr>
              <td>{patient.fornavn}</td>
              <td>{patient.efternavn}</td>
              <td>{patient.alder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientoversigtMenuContent;
