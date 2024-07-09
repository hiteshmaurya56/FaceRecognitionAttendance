import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = { width: 1920, height: 1080, facingMode: "user" };

const WebcamCapture = ({ functions }) => {
  const { setImages, images, setCamera } = functions;
  const webcamRef = useRef(null);

  const capture = async (e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    console.log(images);
    setImages([...images, imageSrc]);
    setCamera(false);
  };

  return (
    <>
      <section className="video">
        <Webcam
          audio={false}
          height={1080}
          width={1920}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture</button>
      </section>
    </>
  );
};

export default WebcamCapture;
