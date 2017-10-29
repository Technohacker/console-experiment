game.cM
    .addAction(() => {
        game.sol.setEmotion("neutral");
        game.sol.element.style.display = "block";
        console.log("Get your character to the exit");
    })
    .addAction(() => {
        game.sol.setEmotion("wink");
        console.log("Don't see an exit? Make one ;)");
    })
    .addAction(() => {
        game.sol.element.style.display = "none";
        console.log("Task: Get your character to an exit (ensure they overlap perfectly)");
    })
    .display("HINT: Exits are marked by .exit")
    .addAction(() => {
        game.cM.pauseActions();
        let intrvl = setInterval(() => {
            let exit = document.querySelector(".exit"),
                player = document.querySelector("#player");
            if (exit) {
                let pBR = player.getBoundingClientRect(),
                    eBR = exit.getBoundingClientRect();
                if (player.classList.contains("exit")) {
                    clearInterval(intrvl);
                    console.log("You sneaky lil' XD");
                    game.cM.resumeActions();
                } else if (pBR.x === eBR.x && pBR.y === eBR.y) {
                    clearInterval(intrvl);
                    console.log("Well done!");
                    game.cM.resumeActions();
                }
            }
        }, 500);
    })
    .addAction(() => {
        
    });
