import readlineSync from "readline-sync";

export function getUserInput(prompt: string) {
	return readlineSync.question(prompt);
}
