function createAccount(pin, amount = 0) {
	let PIN = pin;
	let balance = amount;

	return {
		checkBalance(pinEntry) {
			return pinEntry === PIN ? `$${balance}` : 'Invalid PIN.';
		},
		deposit(pinEntry, amount) {
			if (!amount) return 'No deposit amount was given';
			if (pinEntry === PIN) {
				return `Succesfully deposited $${amount}. Current balance: $${(balance += amount)}.`;
			} else {
				return 'Invalid PIN.';
			}
		},
		withdraw(pinEntry, reqAmount) {
			if (!reqAmount) return 'No withdraw amount was given';
			if (reqAmount > balance) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
			if (pinEntry === PIN) {
				return `Succesfully withdrew $${reqAmount}. Current balance: $${(balance -= reqAmount)}.`;
			} else {
				return 'Invalid PIN.';
			}
		},
		changePin(pinEntry, newPin) {
			if (pinEntry === PIN) {
				PIN = newPin;
				return 'PIN successfully changed!';
			} else {
				return 'Invalid PIN.';
			}
		}
	};
}

module.exports = { createAccount };
