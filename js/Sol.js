class Sol {
    constructor() {
        this.element = document.querySelector("#sol");
        this.emotions = {
            happy: ":)",
            sad: ":(",
            angry: ">:(",
            laugh: ":D",
            sinister: ">:D",
            thoughtful: ":?",
            joyous: "^-^",
            wonder: ":O",
            neutral: "o_o"
        };
    }

    setEmotion(emotion) {
        this.element.innerText = this.emotions[emotion];
    }
}
