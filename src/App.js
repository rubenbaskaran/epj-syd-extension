import React from "react";
import "./App.css";
import LondonMenuContent from "./LondonMenuContent";
import ParisMenuContent from "./ParisMenuContent";
import LondonTabContent from "./LondonTabContent";
import ParisTabContent from "./ParisTabContent";

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
          border: "1px solid #ccc",
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
            backgroundColor: "white",
          }}
        >
          {chosenMenuItem === "London" && <LondonMenuContent />}
          {chosenMenuItem === "Paris" && <ParisMenuContent />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3,
            width: "100%",
            backgroundColor: "white",
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
          </div>

          {chosenTabItem === "London" && <LondonTabContent />}
          {chosenTabItem === "Paris" && <ParisTabContent />}
        </div>
      </div>
    </div>
  );
}

export default App;
