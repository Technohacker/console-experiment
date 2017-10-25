console.log("Begin the game with start()");

class ConsoleMessages {
    constructor() {
        this.actions = [];
        this.backlog = [];
        this.waitTillFinished = false;

        // Message printing loop
        setInterval(() => {
            let action = this.actions.shift();
            if (!this.waitTillFinished && action) {
                action();
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

function start() {
    window.userInput = {};

    document.querySelector("#user-message").style.display = "none";

    let cM = new ConsoleMessages(),
        user = {},
        sol = document.querySelector("#sol");

    cM.display("Hello.")
      .display("I am Sol.")
      .addAction(() => {
          cM.pauseActions();
          user.name = prompt("Sol: Who are you?");
          cM.resumeActions();
      })
      .addAction(() => console.log(`Oh, hello ${user.name}`))
      .display("You may be wondering...")
      .display("What is all this?")
      .display("Well...")
      .display("This is the console")
      .display("A way to communicate with me")
      .display("And a way to interact with this world that I live in")
      .display("This world I live in, is the DOM")
      .display("You would've seen it, it's everywhere")
      .display("Try interacting with it")
      .display("Find me ;)")
      .display("Task: Find Sol in the DOM, and set window.userInput.sol to it")
      .display("HINT: Use the DOM JS functions")
      .addAction(() => {
          cM.pauseActions();
          console.log(sol);
          let intrvl = setInterval(() => {
              if (window.userInput.sol === sol) {
                  clearInterval(intrvl);
                  cM.resumeActions();
              }
          }, 500);
      })
      .display("Ah! You've found me :D");
}