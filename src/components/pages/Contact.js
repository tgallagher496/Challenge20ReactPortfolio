import React, { useState } from "react";
import "../../assets/stylesheet.css";
import {validateEmail} from '../../utils/helpers'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment,setComment] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value, comment } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        <div>
          <form className="form">
            <input
              value={name}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
            <input
              value={email}
              name="email"
              id="emailInput"
              onChange={handleInputChange}
              type="text"
              placeholder="Email"
            />
            <input
              value={comment}
              name="comment"
              id="commentInput"
              onChange={handleInputChange}
              type="text"
              placeholder="Comment"
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
