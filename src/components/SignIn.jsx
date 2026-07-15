import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [input, changeInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3030/signIn", input)
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "success") {
          sessionStorage.setItem("userId", response.data.userId);
          sessionStorage.setItem("token", response.data.token);

          alert("Login Successful");

          changeInput({
            email: "",
            password: "",
          });
        } else {
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
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign In</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={inputHandler}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={inputHandler}
            placeholder="Enter your password"
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={readValue}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;