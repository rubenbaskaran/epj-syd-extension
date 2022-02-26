import React from "react";
import "./App.css";

function LondonMenuContent(props) {
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
            firstname: this.cells[0].innerHTML,
            lastname: this.cells[1].innerHTML,
            points: this.cells[2].innerHTML,
          };

          props.setChosenTableRow(rowData);
        }
      });
    }
  }, []);

  return (
    <div className="menucontent">
      <h2>Zebra Striped Table</h2>
      <p>
        For zebra-striped tables, use the nth-child() selector and add a
        background-color to all even (or odd) table rows:
      </p>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
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

export default LondonMenuContent;
