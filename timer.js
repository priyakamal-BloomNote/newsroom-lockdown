let timerInterval = null;

let remainingSeconds = 600;


export function startTimer(
    seconds,
    display,
    onComplete
) {

    stopTimer();

    remainingSeconds = seconds;

    updateDisplay(display);


    timerInterval = setInterval(() => {

        remainingSeconds--;

        updateDisplay(display);


        if (remainingSeconds <= 0) {

            stopTimer();

            onComplete();

        }

    }, 1000);

}


function updateDisplay(display) {

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );

    const seconds =
        remainingSeconds % 60;


    display.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


export function stopTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

    }

}