import "./App.css";
import Areatext from "./components/Areatext";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return ( 
    <>
      <Navbar title="TextEdits" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Areatext
          showAlert={showAlert}
          heading="Try TextEdits - word counter, character counter, remove extra spaces"
        />
      </div>
    </>
  );
}
export default App;
