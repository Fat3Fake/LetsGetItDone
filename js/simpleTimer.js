function simpleTimer() {
	let seconds = 0;

	const timerInterval = setInterval(function () {
		console.log(seconds);
		seconds++;
	}, 1000);
}

simpleTimer();
