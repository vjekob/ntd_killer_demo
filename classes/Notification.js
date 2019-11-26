import { Audio } from 'expo-av'

const soundObject = new Audio.Sound();
let initialized = false;
let playQueued = false;

async function initialize() {
    try {
        await soundObject.loadAsync(require("../assets/sounds/notification.mp3"));
        initialized = true;
        if (playQueued) {
            await soundObject.playFromPositionAsync(0);;
            playQueued = false;
        }

    }
    catch (e) {
        console.log(`[Notification] Error during initialization ${e.message}`);
    }
}

initialize();

export class Notification {
    static async play() {
        if (!initialized) {
            playQueued = true;
            return;
        }
        console.log("Playing sound");
        await soundObject.playFromPositionAsync(0);
    }
}
