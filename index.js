function displateTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours();
	let mins = dateTime.getMinutes();
	let secs = dateTime.getSeconds();
	let sessions = document.getElementById("sessions");

	if (hrs >= 12) {
		sessions.innerHTML = "PM";
	} else {
		sessions.innerHTML = "AM";
	}

	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = mins;
	document.getElementById("seconds").innerHTML = secs;
}
setInterval(displateTime, 10);
