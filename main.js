function updateTime() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();

    // Convert to Lagos time (GMT+1)
    const options = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    const lagosTime = new Intl.DateTimeFormat("en-GB", options).format(now);

    timeDisplay.textContent = lagosTime; // Update time in the DOM
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize time immediately when the script loads
updateTime();
