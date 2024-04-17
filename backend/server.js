const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { exec } = require('child_process');

const app = express();
app.use(cors());

// multer for saving files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.wav')
  }
});

const upload = multer({ storage: storage });

// uploading files
app.post('/upload', upload.single('audio'), (req, res) => {
  const filePath = req.file.path;
  const scriptPath = 'path/to/your/python/script.py';

  // for Python script
  exec(`python ${scriptPath} ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(stderr);
    }
    res.send(stdout);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
