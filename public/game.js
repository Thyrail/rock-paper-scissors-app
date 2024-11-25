document.addEventListener('DOMContentLoaded', () =>
{
    const choices = ['rock', 'paper', 'scissors'];

    const playerChoiceElem = document.getElementById('player-choice');
    const computerChoiceElem = document.getElementById('computer-choice');
    const resultElem = document.getElementById('result');

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

    function playGame(playerChoice)
    {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerChoiceElem.textContent = `You chose: ${playerChoice}`;
        computerChoiceElem.textContent = `Computer chose: ${computerChoice}`;

        const result = determineWinner(playerChoice, computerChoice);
        resultElem.textContent = `Result: ${result}`;
    }

    function determineWinner(player, computer)
    {
        if (player === computer) return 'It\'s a tie!';
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        )
        {
            return 'You win!';
        }
        return 'Computer wins!';
    }
});
