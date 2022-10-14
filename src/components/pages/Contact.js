import React, { useState } from "react";
import "../../assets/stylesheet.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailChange = document.querySelector("#emailInput");
  var matcher = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName" ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        <div>
          <p>Hello {name}</p>
          <form className="form">
            <input
              value={name}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={email}
              name="email"
              id="emailInput"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
            />
            <p id="response"></p>
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </p>
    </div>
  );
}
