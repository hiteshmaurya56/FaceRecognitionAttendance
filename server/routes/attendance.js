const express = require("express");
const multer = require("multer");
const fs= require("fs");


const base64Image = 'data:image/png;base64,iVBORw0KGgo...'; // Replace with your actual base64 data

// Function to convert and save the base64 image to a file
function convertBase64ToImage(base64Data, outputPath) {
  // Remove the data URI prefix (e.g., 'data:image/png;base64,')
  const base64WithoutPrefix = base64Data.replace(/^data:image\/\w+;base64,/, '');

  // Decode the base64 data to binary
  const binaryData = Buffer.from(base64WithoutPrefix, 'base64');

  // Save the binary data to a file
  fs.writeFile(outputPath, binaryData, 'binary', (err) => {
    if (err) {
      console.error('Error saving the image:', err);
    }
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./python/image");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const { wpawn, spawn, ChildProcess } = require("child_process");
const router = express.Router();

router.post("/image", upload.any(), async (req, res) => {
  const formData = req.body;
  // console.log(req.body);

  if (req.body.images) {
    const { images } = req.body;
    for (let i = 0; i < images.length; i++) {
      // const image = Buffer.from(images[i], "base64");

      // writeFileSync(`./python/image/image_${i}.jpeg`, image);
      convertBase64ToImage(images[i], `./python/image/image_${i}.jpeg`); 
    }


  } else console.log("no");
  const childPython = spawn("python", ["./python/main.py"]);

  childPython.stdout.on("data", (data) => {
    data = data.toString();
    // console.log(data);

    console.log(data);
    return res.status(200).json({ data });
  });

  childPython.stderr.on("data", (error) => {
    error = error.toString();
    console.log(error);
    // return res.status(400).json({ error });
  });
});

router.get("/download", async (req, res) => {
  res.download("./python/students_attendance.csv");
});

module.exports = router;
