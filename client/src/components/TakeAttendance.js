import React, { useState } from "react";
import fileDownload from "react-file-download";
import WebcamCapture from "./WebcamCapture";

const TakeAttendance = () => {
  const [status, setStatus] = useState(0);
  const [showed, setShowed] = useState(false);
  const [camera, setCamera] = useState(false);

  const [images, setImages] = useState([]);
  const [attend, setAttend] = useState([]);

  const handleSubmit = async (e) => {
    setStatus(-1);
    setShowed(true);
    e.preventDefault();
    let formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append(`images[${i}]`, images[i]);
    }
    const response = await fetch("http://localhost:5000/api/image", {
      method: "POST",
      body: formData,
    });

    let json = await response.json();

    let { data } = json;
    console.log(json);
    console.log(data);
    setStatus(1);
  };

  const download = async () => {
    const response = await fetch("http://localhost:5000/api/download", {
      method: "GET",
    });
    const blob = await response.blob();
    const day=new Date().toISOString();

    fileDownload(blob, `${day}.csv`);
    setTimeout(() => {
      setStatus(0);
    }, 2000);
  };

  const handleOnChange = async (e) => {
    setImages(e.target.files);
  };

  return (
    <>
      {camera == false ? (
        <section className="attendance">
          <div className="image-upload">
            <form onSubmit={handleSubmit}>
              <label htmlFor="image">Upload all the images of class: </label>
              {status === 0 && (
                <input
                  type="file"
                  multiple
                  name="image"
                  id="image"
                  onChange={handleOnChange}
                  required
                  accept=".jpg,.png"
                />
              )}
              {status === 0 ? (
                <button>Submit</button>
              ) : status === 1 ? (
                <button onClick={download}>Download Excel File</button>
              ) : (
                <div className="loadingio-spinner-spinner-e5lrqgsl2lq">
                  <div className="ldio-n3xuj4coxdc">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div id="or">
            <h1>OR</h1>
          </div>
          <div className="image-upload">
            <form onSubmit={handleSubmit}>
              <label htmlFor="image">Take pictures of the class: </label>

              {status === 0 ? (
                <button onClick={() => setCamera(true)}>Capture Photo</button>
              ) : status === 1 ? (
                <button onClick={download}>Download Excel File</button>
              ) : (
                <div className="loadingio-spinner-spinner-e5lrqgsl2lq">
                  <div className="ldio-n3xuj4coxdc">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
              {images.length > 0 && status === 0 && <button>Submit</button>}
            </form>
          </div>
        </section>
      ) : (
        <WebcamCapture functions={{ images, setImages, setCamera }} />
      )}
    </>
  );
};

export default TakeAttendance;
