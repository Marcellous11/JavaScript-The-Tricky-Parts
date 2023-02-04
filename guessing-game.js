function guessingGame() {
	const answer = Math.floor(Math.random() * 99);
	console.log(answer);
	let count = 0;
	let won = false;
	return function game(guess) {
		if (won) {
			return 'The game is over, you already won!';
		} else {
			if (guess === answer) {
				won = true;
				return `You win! You found ${answer} in ${count} guesses. `;
			} else {
				count++;
				return guess > answer ? `${guess} is too high!` : `${guess} is too low!`;
			}
		}
	};
}

module.exports = { guessingGame };
