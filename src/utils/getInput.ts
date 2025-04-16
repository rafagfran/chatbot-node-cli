import readlineSync from "readline-sync";

export function question(prompt: string) {
	return readlineSync.question(prompt);
}
