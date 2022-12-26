var intervalCount = 0;
var intervalId = null;
const maxInterval = 10;

function removeLicenseDiv() {
    if (intervalCount >= maxInterval && intervalId) {
        clearInterval(intervalId)
        return;
    }
    const licenseDiv = document.getElementsByClassName("license_message-with-link__1n_82")[0]
    if (licenseDiv) {
        licenseDiv.style.display = "none";
        console.log("Drone License Error Removed!")
        if (intervalId) {
            clearInterval(intervalId)
        }
    }
}

function onWindowLoad() {
    intervalId = setInterval(() => {
        intervalCount = intervalCount + 1
        removeLicenseDiv()
    }, 1000)
}
  
window.onload = onWindowLoad;
