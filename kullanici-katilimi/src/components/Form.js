import React, { useState } from "react";

const Formlar = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    mail: "",
    active: false,
  });

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit oldu mu ?", formData);
  };
  //   const inputChangeHandler = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     setProduct({ ...product, [name]: type === "checkbox" ? checked : value });

  //     checkValidationFor(name, type === "checkbox" ? checked : value);
  //   };
  console.log(formData);

  return (
    <div>
      <h2>Membership Form:</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          Full Name :
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          E-mail :
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          <input
            id="active"
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={changeHandler}
          />
          I have read and agree to the terms of services.
        </label>
        {/* id="active" type="checkbox" label="Aktif mi?" onChange=
        {inputChangeHandler}
        checked={product.active}
        name="active" */}
        <br />
        <button>Submit ! </button>
      </form>
    </div>
  );
};

export default Formlar;
