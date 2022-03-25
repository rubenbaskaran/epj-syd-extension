import React from "react";
import "./App.css";
import PatientoversigtMenuContent from "./PatientoversigtMenuContent";
import MineOpgaverMenuContent from "./MineOpgaverMenuContent";
import PatientInfoTabContent from "./PatientInfoTabContent";
import OpgaveInfoTabContent from "./OpgaveInfoTabContent";
import HistorikTabContent from "./HistorikTabContent";

// TODO 3: Modtag ny data fra "PatientoversigtMenuContent", opret et data object her og send det til "MineOpgaverMenuContent"

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState("Patientoversigt");
  const [chosenTabItem, setChosenTabItem] = React.useState(null);
  const [chosenPatient, setChosenPatient] = React.useState(null);
  const [chosenTask, setChosenTask] = React.useState(null);

  React.useEffect(() => {
    if (chosenPatient != null || chosenPatient != null) {
      document.getElementById("myBtn").click();
    }
  }, [chosenPatient, chosenTask]);

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
          Odense Universitetshospital - Svendborg, OUH Kirurgisk Afsnit A, OUH
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
              onClick={() => {
                setChosenMenuItem("Patientoversigt");
                setChosenTask(null);
              }}
            >
              Patientoversigt
            </button>
            <button
              className={chosenMenuItem === "MineOpgaver" ? "active" : ""}
              onClick={() => {
                setChosenMenuItem("MineOpgaver");
                setChosenPatient(null);
              }}
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
                  setChosenPatient={setChosenPatient}
                />
              )}
              {chosenMenuItem === "MineOpgaver" && (
                <MineOpgaverMenuContent setChosenTask={setChosenTask} />
              )}
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
                  : "Opgave info"}
              </button>
              <button
                className={chosenTabItem === "RightTab" ? "active" : ""}
                onClick={() => setChosenTabItem("RightTab")}
              >
                Historik
              </button>
            </div>
            <div className="tabcontent">
              {chosenTabItem === "LeftTab" &&
                (chosenMenuItem === "Patientoversigt" ? (
                  <PatientInfoTabContent data={chosenPatient} />
                ) : (
                  <OpgaveInfoTabContent data={chosenTask} />
                ))}
              {chosenTabItem === "RightTab" && <HistorikTabContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
