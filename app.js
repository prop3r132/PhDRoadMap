const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 8080;

const apiRouter = require('/routes/api.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/PhDRoadMap.html');
    res.sendFile(__dirname + '/public/node_mon');
});

// Use the API router
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    openBrowser(); // Open the browser after starting the server
});

function openBrowser() {
    const url = `http://localhost:${port}`;
  
    // Cross-platform solution to open the browser
    const platform = process.platform;
    let command;
    switch (platform) {
      case 'win32':
        command = `start ${url}`;
        break;
      case 'darwin':
        command = `open ${url}`;
        break;
      case 'linux':
        command = `firefox ${url}`;
        break;
      default:
        console.error('Unsupported platform');
        return;
    }
  
    exec(command, (err) => {
      if (err) {
        console.error(`Error opening browser: ${err}`);
      }
    });
  }
