console.log("Begin the game with game.start()");

class ConsoleMessages {
    constructor() {
        this.actions = [];
        this.backlog = [];
        this.waitTillFinished = false;

        // Message printing loop
        setInterval(() => {
            if (!this.waitTillFinished) {
                let action = this.actions.shift();
                if (action) {
                    action();
                }
            }
        }, 2000);
    }

    display(message) {
        if (this.waitTillFinished) {
            this.backlog.push(() => console.log(message))
        } else {
            this.actions.push(() => console.log(message));
        }
        return this;
    }

    addAction(action) {
        if (this.waitTillFinished) {
            this.backlog.push(action);
        } else {
            this.actions.push(action);
        }
        return this;
    }

    pauseActions() {
        this.waitTillFinished = true;
    }

    resumeActions() {
        this.waitTillFinished = false;
        this.backlog.forEach(action => this.actions.push(action));
        return this;
    }
}

window.game = {
    cM: new ConsoleMessages(),
    sol: new Sol(),
    start() {
        window.userInput = {};

        document.querySelector("#user-message").style.display = "none";

        let userData = JSON.parse(window.localStorage.getItem("userData"));

        if (userData) {
            document.querySelector("#hud").style.display = "block";
            document.querySelector("#play-area").style.display = "block";

            document.querySelector("#player-name").innerText = userData.name;
            let userLevel = ("0000000" + userData.level.toString(2)).substr(-8);
            document.querySelector("#player-level").innerText = userLevel;
            document.querySelector("audio").play();
            if (!userData.progress.intro) {
                new Beginning().start();
            }
            console.log("Loaded gamesave");
        } else {
            new Beginning().start();
        }
    },
    set level(levelElem) {
        console.log("Current level: ", levelElem);
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            document.querySelector("#levels").style.display = "none";
            document.querySelector("#play-area").appendChild(this.response.querySelector("#levelData"));
            let script = document.createElement("script");
            script.src = `levels/${levelElem.id}/${levelElem.id}.js`
            console.log(script);
            document.body.appendChild(script);
        }
        xhr.responseType = "document";
        xhr.open("GET", `levels/${levelElem.id}/${levelElem.id}.html`);
        xhr.send();
    },
    returnToMainMenu() {
        let currentLevel = document.querySelector("#levelData");
    }
}
