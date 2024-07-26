let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".optionsMenu");

let computerChoice = () => {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let calculateChoice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[calculateChoice];

}

let result = document.getElementById("msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        const userSelect = document.getElementById("userSelected");
        if (userSelect.textContent === "") {
            userSelect.textContent = choiceId;

        } else {
            userSelect.textContent = "";
            userSelect.textContent = choiceId; 
        }


        let botSelect = document.getElementById("botSelected");
        if (botSelect.textContent === "") {
            botSelect.textContent = computerChoice();

        } else {
            botSelect.textContent = "";
            botSelect.textContent = computerChoice();
        }


        // logic

        if (userSelect.textContent === botSelect.textContent) {

            result.innerHTML = " Draw ho gya wapas Khelo";
            result.style.backgroundColor = "yellow";
            result.style.color = "black";
        } else if (userSelect.textContent === "Rock" && botSelect.textContent === "Paper") {

            compScore++;
            result.innerHTML = " Paper beats Rock Computer won";
            result.style.backgroundColor = "red";
        } else if (userSelect.textContent === "Paper" && botSelect.textContent === "Scissors") {

            compScore++;
            result.innerHTML = "Scissors beats Paper Computer won";
            result.style.backgroundColor = "red";
        }
        else if (userSelect.textContent === "Scissors" && botSelect.textContent === "Rock") {

            compScore++;
            result.innerHTML = "Rock beats Scissors Computer won";
            result.style.backgroundColor = "red";
        } else if (botSelect.textContent === "Rock" && userSelect.textContent === "Paper") {

            userScore++;
            result.innerHTML = "Paper beats Rock You won";
            result.style.backgroundColor = "Green";
            result.style.color = "white";
        } else if (botSelect.textContent === "Paper" && userSelect.textContent === "Scissors") {

            userScore++;
            result.innerHTML = "Scissors beats Paper You Won";
            result.style.backgroundColor = "Green";
            result.style.color = "white";
        }
        else if (botSelect.textContent === "Scissors" && userSelect.textContent === "Rock") {

            userScore++;
            result.innerHTML = "Rock beats Scissors You won";
            result.style.backgroundColor = "Green";
            result.style.color = "white";
        } else {
            console.log("Something is broken");
        }

        if (userScore === 5) {
            alert(`Your Score is ${userScore} \nYou Won !!!`);
            userScore = 0;
            compScore = 0;
            userSelect.textContent = "";
            botSelect.textContent = "";
            result.innerHTML = "Play your move";
            result.style.backgroundColor = "blue";
            result.style.color = "white";


        } else if (compScore === 5) {
            alert(`Computer's Score is ${compScore} \nComputer Won\nTry Again !!!`);
            userScore = 0;
            compScore = 0;
            userSelect.textContent = "";
            botSelect.textContent = "";
            result.innerHTML = "Play your move";
            result.style.backgroundColor = "blue";
            result.style.color = "white";

        }

        let userScored = document.getElementById("user-score");
        userScored.innerHTML = userScore;

        let botScored = document.getElementById("comp-score");
        botScored.innerHTML = compScore;










    })
})