import React, { useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import image from "../images/image.jpg";
const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <div>
      <h1>Home Page</h1>
      <img src = {image} alt ="Background"/>
      </div>
    </Layout>
  );
};

export default HomePage;