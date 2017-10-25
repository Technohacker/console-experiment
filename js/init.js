console.log("Begin the game with start()");

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

function start() {
    window.userInput = {};

    document.querySelector("#user-message").style.display = "none";

    let cM = new ConsoleMessages(),
        user = {},
        sol = new Sol();

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
          let intrvl = setInterval(() => {
              if (window.userInput.sol === sol.element) {
                  clearInterval(intrvl);
                  cM.resumeActions();
              }
          }, 500);
      })
      .display("Ah! You've found me :D")
      .display("I'm still hiding")
      .display("Interact with the DOM to unhide me")
      .display("Task: Unhide Sol")
      .display("HINT: Set the element style")
      .addAction(() => {
          cM.pauseActions();
          let intrvl = setInterval(() => {
              if (window.userInput.sol.style.display === "block") {
                  clearInterval(intrvl);
                  cM.resumeActions();
              }
          }, 500);
      })
      .display("Now you see me :)")
      .addAction(() => {
          sol.setEmotion("happy");
          console.log(":)");
      });
}
