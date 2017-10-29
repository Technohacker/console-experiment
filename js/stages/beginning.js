class Beginning {
    constructor() { }

    start() {
        let user = {};

        game.cM
          .display("Hello.")
          .display("I am Sol.")
          .addAction(() => {
              game.cM.pauseActions();
              user.name = prompt("Sol: Who are you?");
              user.level = 0x00;
              game.cM.resumeActions();
          })
          .addAction(() => {
              document.querySelector("#player-name").innerText = user.name;
              console.log(`Oh, hello ${user.name}`);
          })
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
              game.cM.pauseActions();
              let intrvl = setInterval(() => {
                  if (window.userInput.sol === game.sol.element) {
                      clearInterval(intrvl);
                      game.cM.resumeActions();
                  }
              }, 500);
          })
          .display("Ah! You've found me :D")
          .display("I'm still hiding")
          .display("Interact with the DOM to unhide me")
          .display("Task: Unhide Sol")
          .display("HINT: Set the element style")
          .addAction(() => {
              game.cM.pauseActions();
              let intrvl = setInterval(() => {
                  if (window.userInput.sol.style.display === "block") {
                      clearInterval(intrvl);
                      game.cM.resumeActions();
                  }
              }, 500);
          })
          .addAction(() => {
              game.sol.setEmotion("happy");
              console.log("Now you see me :)");
          })
          .addAction(() => {
              game.sol.setEmotion("neutral");
              console.log("There is a lot more to this world, but it's all hidden");
          })
          .display("You have to interact with it to open it up more")
          .display("Start by getting your HUD up")
          .display("Task: Find your HUD in the DOM and unhide it")
          .addAction(() => {
              let hud = document.querySelector("#hud");
              game.cM.pauseActions();
              let intrvl = setInterval(() => {
                  if (hud.style.display === "block") {
                      clearInterval(intrvl);
                      game.cM.resumeActions();
                  }
              }, 500);
          })
          .display("Easy!")
          .display("The HUD may look sparse now, more will open up later")
          .display("The little box at the top is your stats")
          .display("It shows your level")
          .display("Your level increases as you progress in the DOM")
          .addAction(() => {
              document.querySelector("#play-area").style.display = "block";
              console.log("To progress in the DOM, you go through levels");
          })
          .display("Select a level by setting game.level to the respective element")
          .display("Oh, before I go...")
          .display("Here's some music for you")
          .addAction(() => {
              document.querySelector("audio").play();
          })
          .display("Your adventure starts here")
          .addAction(() => {
              game.sol.setEmotion("wink");
              console.log("Good luck!");
          })
          .addAction(() => {
              game.sol.element.style.display = "none";
              user.progress = {
                  intro: true
              };
              localStorage.setItem("userData", JSON.stringify(user));
              console.log("Game saved");
          });
    }
}
