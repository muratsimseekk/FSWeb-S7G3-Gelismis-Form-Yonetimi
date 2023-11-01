import logo from "./logo.svg";
import "./App.css";
import Formlar from "./components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [gonderilenVeri, setGonderilenVeri] = useState([]);

  const addMember = (formData) => {
    setGonderilenVeri({ ...gonderilenVeri, formData });
  };

  console.log("app.js, deki veriler", gonderilenVeri);

  return (
    <div className="App">
      <Formlar veriler={addMember} />
    </div>
  );
}

export default App;
