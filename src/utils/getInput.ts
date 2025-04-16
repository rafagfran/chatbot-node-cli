import readlineSync from "readline-sync";

export function getUserInput(prompt: string) {
	return readlineSync.question(prompt);
}

export function getMenuChoice() {
	let input = "";

	while (!input) {
		input = getUserInput("\nDigite o valor numero correspondente: ").trim();
	}

	return input;
}
