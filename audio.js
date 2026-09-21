// ========================================
// NEWSROOM LOCKDOWN
// AUDIO SYSTEM
// ========================================

const backgroundMusic = new Audio(
    "audio/background.mp3"
);

const clickSound = new Audio(
    "audio/click.mp3"
);

const successSound = new Audio(
    "audio/success.mp3"
);

const alarmSound = new Audio(
    "audio/alarm.mp3"
);


// Background music

backgroundMusic.loop = true;

backgroundMusic.volume = 0.25;


// Click sound

clickSound.volume = 0.5;


// Success sound

successSound.volume = 0.6;


// Alarm sound

alarmSound.volume = 0.7;


// ========================================
// PLAY FUNCTIONS
// ========================================

export function playBackground() {

    backgroundMusic.play().catch(error => {

        console.log(
            "Background music waiting for user interaction."
        );

    });

}


export function playClick() {

    clickSound.currentTime = 0;

    clickSound.play();

}


export function playSuccess() {

    successSound.currentTime = 0;

    successSound.play();

}


export function playAlarm() {

    alarmSound.currentTime = 0;

    alarmSound.play();

}