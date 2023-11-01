import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const Formlar = ({ submitted }) => {
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
    submitted(formData);
    console.log("submit oldu mu ?", formData);
  };

  const formDataSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("This section can not be empty.")
      .min(3, "Can not be less than 3 characters."),
    password: Yup.string()
      .required("Password is necessary.")
      .min(8, "Minumum 8 character."),
    mail: Yup.string()
      .required("This section can not be empty.")
      .email("Please enter valid mail address."),
    active: Yup.boolean(),
  });

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
