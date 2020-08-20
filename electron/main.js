const { app, BrowserWindow, autoUpdater, dialog } = require('electron')

const path = require('path');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'client',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    })

    mainWindow.webContents.openDevTools()
    mainWindow.menuBarVisible = false
    mainWindow.loadURL('http://localhost:4200')
        /* mainWindow.loadURL(`file://${__dirname}/../angulardist/iotClientDesktop/index.html`) */
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})