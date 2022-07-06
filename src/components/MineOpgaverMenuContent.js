import React from "react";
import "../App.css";

function MineOpgaverMenuContent({ setChosenTask, tasks }) {
  React.useEffect(() => {
    var trs = document.querySelectorAll("tbody tr");
    for (var i = 0; i < trs.length; i++) {
      var currentRow = trs[i];

      currentRow.addEventListener("click", function () {
        var trs = document.querySelectorAll("tr");
        for (var i = 0; i < trs.length; i++) {
          trs[i].className = "";
        }

        this.className = "selected";

        var rowData = {
          titel: this.cells[0].innerHTML,
          type: this.cells[1].innerHTML,
          prioritet: this.cells[2].innerHTML,
        };

        setChosenTask(rowData);
      });
    }
  }, [tasks]);

  return (
    <div>
      <h2>Mine opgaver</h2>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Type</th>
            <th>Prioritet</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.key}>
              <td>{task.titel}</td>
              <td>{task.type}</td>
              <td>{task.prioritet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MineOpgaverMenuContent;
