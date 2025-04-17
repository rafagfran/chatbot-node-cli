import chalk from "chalk";
import { AppState } from "../types/types.js";
import { displayMessage } from "../utils/displayMessage.js";
import { getUserInput } from "../utils/getInput.js";

export async function menuState(): Promise<AppState> {
	const options = [
		{ selector: 1, title: "Consultar clima" },
		{ selector: 0, title: "Sair" },
	];

	function showMenu() {
		displayMessage("\nEscolha uma das opções abaixo:\n", "highlight");
		options.map((option) => {
			displayMessage(`${chalk.bold(`[${option.selector}] `) + option.title}`);
		});
	}

	function getMenuChoice() {
		let input = "";
		while (!input) {
			input = getUserInput("\nDigite o valor correspondente: ").trim();
		}
		return input;
	}

	while (true) {
		showMenu();
		const choice = getMenuChoice();

		switch (choice) {
			case "1":
				return AppState.WEATHER;
			case "0":
				return AppState.EXIT;
			default:
				console.clear();
				displayMessage("\n❌ Opção inválida. Tente novamente.\n", "error");
		}
	}
}
