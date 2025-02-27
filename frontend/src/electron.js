const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = true

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1400,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    
    console.log(isDev)
    const startURL = isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`;
  
    mainWindow.loadURL(startURL);
    console.log(startURL)
  
    mainWindow.on('closed', () => (mainWindow = null));
  }
  

  app.on('ready', createWindow);
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });