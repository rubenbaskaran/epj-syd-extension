function App() {
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
          backgroundColor: "pink",
        }}
      ></div>
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
        ></div>
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
