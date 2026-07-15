import React, { useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";

const CreatePost = () => {
  const [message, setMessage] = useState("");

  const sendPost = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const payload = {
      userId: userId,
      message: message,
    };

    const config = {
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3030/create",
        payload,
        config
      );

      console.log(response.data);

      if (response.data.status === "success") {
        alert("Post Created Successfully");
        setMessage("");
      } else {
        alert(response.data.status);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
        <Navbar/>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create Post</h2>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={sendPost}>
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;