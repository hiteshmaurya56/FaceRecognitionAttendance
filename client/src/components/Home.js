import React from "react";
import photo from "./images/photo.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="body">
        <div className="left">
          <h1>Attendance Made Simple, Through the Power of Faces.</h1>
          <p>
            Experience the future of attendance management with our cutting-edge{" "}
            <br />
            facial recognition technology where accuracy meets convenience
          </p>
          <button
            onClick={() => {
              navigate("/takeattendance");
            }}
          >
            Take Attendance Now &rarr;
          </button>
        </div>
        <div className="right">
          <img src={photo} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
