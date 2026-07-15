import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        token: token,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3030/viewall",
        {},
        config
      );

      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch posts");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">View All Posts</h2>

      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Post</h5>
                <p className="card-text">{post.message}</p>
              </div>

              <div className="card-footer text-muted">
                <strong>Posted Date:</strong> {post.postedDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;