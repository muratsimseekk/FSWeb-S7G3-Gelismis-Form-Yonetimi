import logo from "./logo.svg";
import "./App.css";
import Formlar from "./components/Form";
import { useState } from "react";
function App() {
  const [kullaniciList, setKullaniciList] = useState([]);
  const AddMember = (formData) => {
    setKullaniciList(...AddMember, formData);
  };

  return (
    <div className="App">
      <Formlar submitted={AddMember} />
    </div>
  );
}

export default App;
