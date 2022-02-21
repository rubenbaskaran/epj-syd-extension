import React from "react";
import "./App.css";

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState(null);
  const [chosenTabItem, setChosenTabItem] = React.useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <div className="menu">
          <button
            className={chosenMenuItem === "London" ? "active" : ""}
            onClick={() => setChosenMenuItem("London")}
          >
            London
          </button>
          <button
            className={chosenMenuItem === "Paris" ? "active" : ""}
            onClick={() => setChosenMenuItem("Paris")}
          >
            Paris
          </button>
          <button
            className={chosenMenuItem === "Tokyo" ? "active" : ""}
            onClick={() => setChosenMenuItem("Tokyo")}
          >
            Tokyo
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 4,
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 7,
            width: "100%",
            backgroundColor: "lightblue",
          }}
        >
          {chosenMenuItem === "London" && (
            <div className="menucontent">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
            </div>
          )}

          {chosenMenuItem === "Paris" && (
            <div className="menucontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
            </div>
          )}

          {chosenMenuItem === "Tokyo" && (
            <div className="menucontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3,
            width: "100%",
            backgroundColor: "lightgreen",
          }}
        >
          <div className="tab">
            <button
              className={chosenTabItem === "London" ? "active" : ""}
              onClick={() => setChosenTabItem("London")}
            >
              London
            </button>
            <button
              className={chosenTabItem === "Paris" ? "active" : ""}
              onClick={() => setChosenTabItem("Paris")}
            >
              Paris
            </button>
            <button
              className={chosenTabItem === "Tokyo" ? "active" : ""}
              onClick={() => setChosenTabItem("Tokyo")}
            >
              Tokyo
            </button>
          </div>

          {chosenTabItem === "London" && (
            <div className="tabcontent">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
            </div>
          )}

          {chosenTabItem === "Paris" && (
            <div className="tabcontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
            </div>
          )}

          {chosenTabItem === "Tokyo" && (
            <div className="tabcontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
