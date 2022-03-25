import React from "react";
import "./App.css";
import PatientoversigtMenuContent from "./PatientoversigtMenuContent";
import MineOpgaverMenuContent from "./MineOpgaverMenuContent";
import PatientInfoTabContent from "./PatientInfoTabContent";
import HistorikTabContent from "./HistorikTabContent";

// TODO:
// - Opret ny fil til at repræsentere tab indhold for "Opgave"

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState("Patientoversigt");
  const [chosenTabItem, setChosenTabItem] = React.useState(null);
  const [chosenTableRowData, setChosenTableRowData] = React.useState(null);

  React.useEffect(() => {
    if (chosenTableRowData != null) {
      document.getElementById("myBtn").click();
    }
  }, [chosenTableRowData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "99.7vh",
        width: "99.7vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 2,
            backgroundColor: "#234E5E",
            color: "white",
            alignItems: "center",
            fontFamily: "arial",
            fontSize: "16px",
            fontWeight: "bold",
            paddingLeft: "10px",
          }}
        >
          Odense Universitetshospital - Scendborg, OUH Kirurgisk Afsnit A, OUH
          Kirurgisk Afs. A1 (Odense)
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#839C12",
            color: "white",
            alignItems: "center",
            fontFamily: "arial",
            fontSize: "14px",
            fontWeight: "bold",
            paddingLeft: "10px",
          }}
        >
          EPJ SYD Uddannelse
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 9,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginTop: 10,
            marginLeft: 5,
            backgroundColor: "white",
            border: "1px solid #7f7f7f",
          }}
        >
          <div className="menu">
            <button
              className={chosenMenuItem === "Patientoversigt" ? "active" : ""}
              onClick={() => setChosenMenuItem("Patientoversigt")}
            >
              Patientoversigt
            </button>
            <button
              className={chosenMenuItem === "MineOpgaver" ? "active" : ""}
              onClick={() => setChosenMenuItem("MineOpgaver")}
            >
              Mine opgaver
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
            <div className="menucontent">
              {chosenMenuItem === "Patientoversigt" && (
                <PatientoversigtMenuContent
                  setChosenTableRow={setChosenTableRowData}
                />
              )}
              {chosenMenuItem === "MineOpgaver" && <MineOpgaverMenuContent />}
            </div>
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
                id="myBtn"
                className={chosenTabItem === "LeftTab" ? "active" : ""}
                onClick={() => setChosenTabItem("LeftTab")}
              >
                {chosenMenuItem === "Patientoversigt"
                  ? "Patient info"
                  : "Opgave"}
              </button>
              <button
                className={chosenTabItem === "RightTab" ? "active" : ""}
                onClick={() => setChosenTabItem("RightTab")}
              >
                Historik
              </button>
            </div>
            <div className="tabcontent">
              {chosenTabItem === "LeftTab" && (
                <PatientInfoTabContent data={chosenTableRowData} />
              )}
              {chosenTabItem === "RightTab" && <HistorikTabContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
