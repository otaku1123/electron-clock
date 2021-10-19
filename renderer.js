// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let clockArea = document.getElementById('clock')

const updateClock = () => {
    const dt = new Date()
    const hour = dt.getHours()
    const min = dt.getMinutes()
    const sec = dt.getSeconds()
    clockArea.innerText = `${hour}:${min}:${sec}`
}

setInterval(updateClock, 100)