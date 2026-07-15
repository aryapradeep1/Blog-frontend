import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [input, changeInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    // Check password match
    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Data to send to backend
    const data = {
      name: input.name,
      phone: input.phone,
      email: input.email,
      password: input.password,
    };

    axios
      .post("http://localhost:3030/signUp", data)
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "success") {
          alert("Registered Successfully");

          // Clear form
          changeInput({
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          // Example: "email already exist"
          alert(response.data.status);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}
    >
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={input.name}
            onChange={inputHandler}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={input.phone}
            onChange={inputHandler}
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={inputHandler}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={inputHandler}
            placeholder="Enter password"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={inputHandler}
            placeholder="Confirm password"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={readValue}>
            Submit
          </button>

          <button className="btn btn-outline-secondary">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;