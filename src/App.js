import React from "react";
import "./App.css";
import PatientoversigtMenuContent from "./components/PatientoversigtMenuContent";
import MineOpgaverMenuContent from "./components/MineOpgaverMenuContent";
import PatientInfoTabContent from "./components/PatientInfoTabContent";
import OpgaveInfoTabContent from "./components/OpgaveInfoTabContent";
import HistorikTabContent from "./components/HistorikTabContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Dialog,
} from "@mui/material";

function App() {
  const [chosenMenuItem, setChosenMenuItem] = React.useState("Patientoversigt");
  const [chosenTabItem, setChosenTabItem] = React.useState(null);
  const [chosenPatient, setChosenPatient] = React.useState(null);
  const [chosenTask, setChosenTask] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [dialogFullname, setDialogFullname] = React.useState("");
  const [tasks, setTasks] = React.useState([
    { key: "1", titel: "Operation", type: "A", prioritet: "Høj" },
    { key: "2", titel: "Vaccination", type: "B", prioritet: "Medium" },
    { key: "3", titel: "Lægetjek", type: "C", prioritet: "Lav" },
  ]);
  const [patients, setPatients] = React.useState([
    // Returns AUD positive (1)
    {
      key: "1",
      firstname: "Jill",
      lastname: "Smith",
      icd_1: "DF10",
      gender: 2,
      age: 50,
      los_1: 0,
      going_to_icu_1: 0,
      came_through_ed_1: 0,
      contact_type_1: 1,
    },
    // Returns AUD negative (0)
    {
      key: "2",
      firstname: "Adam",
      lastname: "Jensen",
      icd_1: "DZ03",
      gender: 1,
      age: 35,
      los_1: 50,
      going_to_icu_1: 0,
      came_through_ed_1: 0,
      contact_type_1: 2,
    },
    // Returns AUD negative (0)
    {
      key: "3",
      firstname: "Eva",
      lastname: "Johnson",
      icd_1: "DS72",
      gender: 2,
      age: 100,
      los_1: 55,
      going_to_icu_1: 0,
      came_through_ed_1: 0,
      contact_type_1: 1,
    },
    // Returns AUD positive (1)
    {
      key: "4",
      firstname: "Michael",
      lastname: "Hansen",
      icd_1: "DF10",
      gender: 1,
      age: 50,
      los_1: 55,
      going_to_icu_1: 0,
      came_through_ed_1: 0,
      contact_type_1: 1,
    },
    // Returns AUD positive (1)
    {
      key: "5",
      firstname: "Model 1",
      lastname: "Mike",
      gender: 1,
      age: 50,
      dias_blod: 92,
      sys_blod: 156,
      saturation: 97,
      temperature: 36.8,
      bmi: 42.09,
      weight: 145.2,
      contact_type_1: 0,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DM75",
      icd_age_1: 49,
      los_1: 285.5,
    },
    // Returns AUD positive (1)
    {
      key: "6",
      firstname: "Model 1",
      lastname: "Ellen",
      gender: 2,
      age: 45,
      dias_blod: 98,
      sys_blod: 114,
      saturation: 98,
      temperature: 37.3,
      bmi: 21.47,
      weight: 65,
      contact_type_1: 1,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DF10",
      icd_age_1: 45,
      los_1: 0,
    },
    // Returns AUD negative (0)
    {
      key: "7",
      firstname: "Model 1",
      lastname: "Jack",
      gender: 1,
      age: 43,
      dias_blod: 91.8,
      sys_blod: 146,
      saturation: 97.2,
      temperature: 36.82,
      bmi: 17.52,
      weight: 52.6,
      contact_type_1: 0,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DK50",
      icd_age_1: 41,
      los_1: 0,
    },
    // Returns AUD negative (0)
    {
      key: "8",
      firstname: "Model 1",
      lastname: "No gender",
      gender: 0,
      age: 77,
      dias_blod: 60.67,
      sys_blod: 116,
      saturation: 94.5,
      temperature: 36.95,
      bmi: 24.97,
      weight: 93,
      contact_type_1: 1,
      came_through_ed_1: 1,
      going_to_icu_1: 0,
      icd_1: "DS72",
      icd_age_1: 77,
      los_1: 0,
    },
    // Returns AUD positive (1)
    {
      key: "9",
      firstname: "Model 2",
      lastname: "Peter",
      gender: 1,
      age: 50,
      dias_blod: 92,
      sys_blod: 156,
      saturation: 97,
      temperature: 36.8,
      bmi: 42.09,
      weight: 145.2,
      contact_type_1: 0,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DM75",
      icd_age_1: 49,
      los_1: 285.5,
      contact_type_2: 0,
      came_through_ed_2: 0,
      going_to_icu_2: 0,
      icd_2: "DM75",
      icd_age_2: 49,
      los_2: 16,
    },
    // Returns AUD positive (1)
    {
      key: "10",
      firstname: "Model 2",
      lastname: "Lotte",
      gender: 2,
      age: 51,
      dias_blod: 71.14,
      sys_blod: 106,
      saturation: 96.57,
      temperature: 37.56,
      bmi: 23.22,
      weight: 63.2,
      contact_type_1: 1,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DF10",
      icd_age_1: 50,
      los_1: 0,
      contact_type_2: 0,
      came_through_ed_2: 0,
      going_to_icu_2: 0,
      icd_2: "DK70",
      icd_age_2: 50,
      los_2: 0,
    },
    // Returns AUD negative (0)
    {
      key: "11",
      firstname: "Model 2",
      lastname: "Hans",
      gender: 1,
      age: 26,
      dias_blod: 96.33,
      sys_blod: 155.67,
      saturation: 98.5,
      temperature: 37.1,
      bmi: 17.44,
      weight: 51,
      contact_type_1: 0,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DT92",
      icd_age_1: 25,
      los_1: 0,
      contact_type_2: 0,
      came_through_ed_2: 0,
      going_to_icu_2: 0,
      icd_2: "DD50",
      icd_age_2: 26,
      los_2: 0,
    },
    // Returns AUD negative (0)
    {
      key: "12",
      firstname: "Model 2",
      lastname: "Mette",
      gender: 2,
      age: 32,
      dias_blod: 73,
      sys_blod: 129.5,
      saturation: 93,
      temperature: 37.8,
      bmi: 24.49,
      weight: 75,
      contact_type_1: 0,
      came_through_ed_1: 0,
      going_to_icu_1: 0,
      icd_1: "DQ65",
      icd_age_1: 32,
      los_1: 0,
      contact_type_2: 0,
      came_through_ed_2: 0,
      going_to_icu_2: 0,
      icd_2: "DK70",
      icd_age_2: 32,
      los_2: 0,
    },
  ]);

  React.useEffect(() => {
    OpenLeftTabOnItemSelect();
  }, [chosenPatient, chosenTask]);

  function OpenLeftTabOnItemSelect() {
    if (chosenPatient != null || chosenTask != null) {
      document.getElementById("myBtn").click();
    }
  }

  React.useEffect(() => {
    if (chosenPatient !== null) {
      if (TaskAlreadyAdded()) {
        return;
      } else {
        RunAudModelOnBackend();
      }
    }
  }, [chosenPatient]);

  function TaskAlreadyAdded() {
    const foundTask = tasks.find(
      (task) =>
        task.titel === chosenPatient.firstname + " " + chosenPatient.lastname
    );

    if (foundTask) {
      return true;
    } else {
      return false;
    }
  }

  function RunAudModelOnBackend() {
    setLoading(true);
    let data = null;

    if (Object.keys(chosenPatient).length === 10) {
      data = {
        icd_1: chosenPatient.icd_1,
        gender: chosenPatient.gender,
        age: chosenPatient.age,
        los_1: chosenPatient.los_1,
        going_to_icu_1: chosenPatient.going_to_icu_1,
        came_through_ed_1: chosenPatient.came_through_ed_1,
        contact_type_1: chosenPatient.contact_type_1,
      };
    } else if (Object.keys(chosenPatient).length === 17) {
      data = {
        gender: chosenPatient.gender,
        age: chosenPatient.age,
        dias_blod: chosenPatient.dias_blod,
        sys_blod: chosenPatient.sys_blod,
        saturation: chosenPatient.saturation,
        temperature: chosenPatient.temperature,
        bmi: chosenPatient.bmi,
        weight: chosenPatient.weight,
        contact_type_1: chosenPatient.contact_type_1,
        came_through_ed_1: chosenPatient.came_through_ed_1,
        going_to_icu_1: chosenPatient.going_to_icu_1,
        icd_1: chosenPatient.icd_1,
        icd_age_1: chosenPatient.icd_age_1,
        los_1: chosenPatient.los_1,
      };
    } else if (Object.keys(chosenPatient).length === 23) {
      data = {
        gender: chosenPatient.gender,
        age: chosenPatient.age,
        dias_blod: chosenPatient.dias_blod,
        sys_blod: chosenPatient.sys_blod,
        saturation: chosenPatient.saturation,
        temperature: chosenPatient.temperature,
        bmi: chosenPatient.bmi,
        weight: chosenPatient.weight,
        contact_type_1: chosenPatient.contact_type_1,
        came_through_ed_1: chosenPatient.came_through_ed_1,
        going_to_icu_1: chosenPatient.going_to_icu_1,
        icd_1: chosenPatient.icd_1,
        icd_age_1: chosenPatient.icd_age_1,
        los_1: chosenPatient.los_1,
        contact_type_2: chosenPatient.contact_type_2,
        came_through_ed_2: chosenPatient.came_through_ed_2,
        going_to_icu_2: chosenPatient.going_to_icu_2,
        icd_2: chosenPatient.icd_2,
        icd_age_2: chosenPatient.icd_age_2,
        los_2: chosenPatient.los_2,
      };
    }

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

  function AddNewTask() {
    if (chosenPatient != null) {
      setTasks((oldData) => [
        ...oldData,
        {
          key: String(oldData.length + 1),
          titel: chosenPatient.firstname + " " + chosenPatient.lastname,
          type: "AUD",
          prioritet: "Høj",
        },
      ]);
      handleDialogOpen(chosenPatient.firstname + " " + chosenPatient.lastname);
    }
  }

  const handleDialogOpen = (fullname) => {
    setShowDialog(true);
    setDialogFullname(fullname);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

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
      <Dialog
        open={showDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{
              color: "#234E5E",
              marginRight: 10,
              marginBottom: -2,
              height: "25px",
              width: "25px",
            }}
          />
          Ny opgave tilføjet
        </DialogTitle>
        <DialogContent>
          Denne patient kræver AUD behandling
          <br />
          <br />- {dialogFullname}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>OK</Button>
        </DialogActions>
      </Dialog>
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
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 9,
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
          {loading && (
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "right",
                paddingRight: "10px",
              }}
            >
              <CircularProgress />
            </div>
          )}
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
            marginBottom: 10,
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
              <PatientoversigtMenuContent
                setChosenPatient={setChosenPatient}
                patients={patients}
                setPatients={setPatients}
              />
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
    </div>
  );
}

export default App;
