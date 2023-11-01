import logo from "./logo.svg";
import "./App.css";
import Formlar from "./components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [kullanicilar, setKullanicilar] = useState([]);

  const users = (formData) => {
    setKullanicilar({ ...kullanicilar, formData });
  };

  console.log("app.js, deki veriler", kullanicilar);

  return (
    <div className="App">
      <Formlar veriler={users} />
    </div>
  );
}

export default App;
