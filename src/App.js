import React from "react";
import "./App.css";
import PatientoversigtMenuContent from "./PatientoversigtMenuContent";
import MineOpgaverMenuContent from "./MineOpgaverMenuContent";
import PatientInfoTabContent from "./PatientInfoTabContent";
import OpgaveInfoTabContent from "./OpgaveInfoTabContent";
import HistorikTabContent from "./HistorikTabContent";
import axios from "axios";
import { CircularProgress } from "@mui/material";

// TODO 2: Copy-paste data upload function

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState("Patientoversigt");
  const [chosenTabItem, setChosenTabItem] = React.useState(null);
  const [chosenPatient, setChosenPatient] = React.useState(null);
  const [chosenTask, setChosenTask] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [tasks, setTasks] = React.useState([
    { key: "1", titel: "Operation", type: "A", prioritet: "Høj" },
    { key: "2", titel: "Vaccination", type: "B", prioritet: "Medium" },
    { key: "3", titel: "Lægetjek", type: "C", prioritet: "Lav" },
    { key: "4", titel: "Operation", type: "A", prioritet: "Høj" },
    { key: "5", titel: "Vaccination", type: "B", prioritet: "Medium" },
    { key: "6", titel: "Lægetjek", type: "C", prioritet: "Lav" },
    { key: "7", titel: "Operation", type: "A", prioritet: "Høj" },
    { key: "8", titel: "Vaccination", type: "B", prioritet: "Medium" },
    { key: "9", titel: "Lægetjek", type: "C", prioritet: "Lav" },
    { key: "10", titel: "Operation", type: "A", prioritet: "Høj" },
    { key: "11", titel: "Vaccination", type: "B", prioritet: "Medium" },
    { key: "12", titel: "Lægetjek", type: "C", prioritet: "Lav" },
  ]);

  React.useEffect(() => {
    if (chosenPatient != null || chosenTask != null) {
      document.getElementById("myBtn").click();
    }
  }, [chosenPatient, chosenTask]);

  React.useEffect(() => {
    if (loading !== true && chosenPatient !== null) {
      const foundTask = tasks.find(
        (task) =>
          task.titel === chosenPatient.firstname + " " + chosenPatient.lastname
      );

      if (foundTask) {
        return;
      }

      setLoading(true);
      const data = {
        diagnosis: chosenPatient.diagnosis,
        gender: chosenPatient.gender,
        age: chosenPatient.age,
        duration: chosenPatient.duration,
        goingToIcu: chosenPatient.goingtoicu,
        cameThroughEd: chosenPatient.camethroughed,
        contactType: chosenPatient.contacttype,
      };

      axios
        .post("http://localhost:3001/submit", { data })
        .then(function (response) {
          switch (response.data.output) {
            case 0:
              console.log("Result was 0 (good)");
              break;
            case 1:
              console.log("Result was 1 (bad)");
              AddNewTask();
              break;
            default:
              console.log("Result was invalid (error)");
              break;
          }

          setLoading(false);
        })
        .catch(function (error) {
          console.log("Connection error:");
          console.log(error);
          setLoading(false);
        });
    }
  }, [chosenPatient]);

  function AddNewTask() {
    if (chosenPatient != null) {
      setTasks([
        ...tasks,
        {
          key: tasks.length + 1,
          titel: chosenPatient.firstname + " " + chosenPatient.lastname,
          type: "AUD",
          prioritet: "Høj",
        },
      ]);
      // TODO 1: Show dialog
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "99.7vh",
        width: "99.7vw",
        minHeight: "600px",
        minWidth: "800px",
      }}
    >
      <div
        style={{
          display: "flex",
          minHeight: "10%",
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
          minHeight: "90%",
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
          <div className="menucontent">
            {chosenMenuItem === "Patientoversigt" && (
              <PatientoversigtMenuContent setChosenPatient={setChosenPatient} />
            )}
            {chosenMenuItem === "MineOpgaver" && (
              <MineOpgaverMenuContent
                setChosenTask={setChosenTask}
                tasks={tasks}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
      {loading && (
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress style={{ width: "150px", height: "150px" }} />
        </div>
      )}
    </div>
  );
}

export default App;
