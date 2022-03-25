import React from "react";
import "./App.css";

// TODO 1: Tilføj object array med patient data og loop igennem det med map function
// TODO 2: Vis dialog besked hvis algoritme er positiv (onClick event på patientoversigt tabel)

function PatientoversigtMenuContent(props) {
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
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientoversigtMenuContent;
