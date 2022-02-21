import React from "react";
import "./App.css";

function LondonMenuContent() {
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
