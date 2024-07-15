function getComputerChoice()
{
    const choice = ["Rock", "Paper", "Scissor"];
    let temp = Math.floor(Math.random() * (100 - 1) + 1);

    temp %= 3;
    return choice[temp];
}

let playerScore = 0;
let computerScore = 0;

const myH1 = document.querySelector("#myH1");
const img2 = document.querySelector("#img2");
const backdrop = document.querySelector(".backdrop");
console.log(backdrop);

function playRound(PlayerSelection, ComputerSelection)
{
    const player = document.querySelector("#player");
    const computer = document.querySelector("#computer");
    
    if (PlayerSelection == ComputerSelection)
    {
        player.textContent = `Player : ${playerScore}`;
        computer.textContent = `Computer : ${computerScore}`;

        img2.textContent = `${img1.textContent}`;
    }
    else if (PlayerSelection == "Rock")
    {
        if (ComputerSelection == "Paper")
        {
            computerScore += 1;
            
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "🖐🏻";
        }
        else if (ComputerSelection == "Scissor")
        {
            playerScore += 1;
            
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "✌🏻";
        }
    }
    else if (PlayerSelection == "Paper")
    {
        if (ComputerSelection == "Rock")
        {
            playerScore += 1;
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "✊🏻";
        }
        else if (ComputerSelection == "Scissor")
        {
            computerScore += 1;
            
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "✌🏻";
        }
    }
    else if (PlayerSelection == "Scissor")
    {
        if (ComputerSelection == "Rock")
        {
            computerScore += 1;
            
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "✊🏻";
            
        }
        else if (ComputerSelection == "Paper")
        {
            playerScore += 1;
            
            player.textContent = `Player : ${playerScore}`;
            computer.textContent = `Computer : ${computerScore}`;

            img2.textContent = "🖐🏻";
        }
    }
    if (playerScore == 5)
    {
        myH1.textContent = "You win! 🥳";
        backdrop.style.display = "flex";
    }
    else if (computerScore == 5)
    {
        myH1.textContent = "Computer wins! 😎";
        backdrop.style.display = "flex";
    }
}
    
    // function playGame()
    // {
        //     let playerScore = 0;
//     let computerScore = 0;

//     for (let i=0; i<5; i++)
//     {
//         let PlayerSelection = prompt("Enter your choice: ").toUpperCase();
//         let ComputerSelection = getComputerChoice().toUpperCase();

//         console.log("Player : " + PlayerSelection);
//         console.log("Computer : " + ComputerSelection);

//         let Winner = playRound(PlayerSelection, ComputerSelection);

//         if (Winner == "Computer")
//         {
//             computerScore += 1;
//         }
//         else if (Winner == "You")
//         {
//             playerScore += 1;
//         }
//     }

//     console.log("YourScore : " + playerScore);
//     console.log("ComputerScore : " + computerScore);

//     if (computerScore > playerScore)
//     {
//         return "Computer Wins!!!";
//     }
//     else if (playerScore > computerScore)
//     {
//         return "You Win!!!";
//     }
//     else
//     {
//         return "Tie!!!";
//     }
// }

// console.log(playGame());

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", (e) => 
{
    let temp = e.target.textContent;
    const playerSelection = temp.substring(0, temp.length-4);
    const computerSelection = getComputerChoice();

    const img1 = document.querySelector("#img1");
    img1.textContent = "✊🏻";

    playRound(playerSelection.trim(), computerSelection);
})

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", (e) => 
{
    let temp = e.target.textContent;
    const playerSelection = temp.substring(0, temp.length-4);
    const computerSelection = getComputerChoice();

    const img1 = document.querySelector("#img1");
    img1.textContent = "🖐🏻";

    playRound(playerSelection.trim(), computerSelection);
})

const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener("click", (e) => 
{
    let temp = e.target.textContent;
    const playerSelection = temp.substring(0, temp.length-4);
    const computerSelection = getComputerChoice();

    const img1 = document.querySelector("#img1");
    img1.textContent = "✌🏻";

    playRound(playerSelection.trim(), computerSelection);
})

const playAgain = document.querySelector("#playAgain");
console.log(playAgain);

playAgain.addEventListener("click", (e) => 
{
    playerScore = 0;
    computerScore = 0;

    player.textContent = `Player : ${playerScore}`;
    computer.textContent = `Computer : ${computerScore}`;

    img1.textContent = "？";
    img2.textContent = "？";

    backdrop.style.display = "none";
})