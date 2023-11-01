import React, { useState } from "react";

const Formlar = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    mail: "",
    terms: "",
  });

  return (
    <div>
      <h2>Membership Form:</h2>
      <form>
        <label>
          Full Name :
          <input type="text" name="fullName" />
        </label>
        <br />
        <label>
          Password :
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          E-mail :
          <input type="email" name="mail" />
        </label>
        <br />
        <label>
          <input type="checkbox" name="subscribe" />I have read and agree to the
          terms of services.
        </label>
        <br />
        <button>Submit ! </button>
      </form>
    </div>
  );
};

export default Formlar;
