import React from "react";
import "./App.css";

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState(null);

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
        <div>
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
            <div className="content">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
            </div>
          )}

          {chosenMenuItem === "Paris" && (
            <div className="content">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
            </div>
          )}

          {chosenMenuItem === "Tokyo" && (
            <div className="content">
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
        ></div>
      </div>
    </div>
  );
}

export default App;
