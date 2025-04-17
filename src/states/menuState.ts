import chalk from "chalk";
import { AppStates } from "../types/types.js";
import { displayMessage } from "../utils/displayMessage.js";
import { getUserInput } from "../utils/getInput.js";

type MenuOption = { selector: string; title: string; state: AppStates };

export async function menuState(): Promise<AppStates> {
	const menuOptions: MenuOption[] = [
		{ selector: "1", title: "Consultar clima", state: AppStates.WEATHER },
		{ selector: "2", title: "Consultar CEP", state: AppStates.CEP },
		{ selector: "0", title: "Sair", state: AppStates.EXIT },
	];

	function showMenu() {
		displayMessage("\nEscolha uma das opções abaixo:\n", "highlight");
		for (const option of menuOptions) {
			displayMessage(`[${chalk.bold(option.selector)}] ${option.title}`);
		}
	}

	function getUserChoice() {
		let input = "";
		while (!input) {
			input = getUserInput("\nDigite o valor correspondente: ").trim();
		}
		return input;
	}

	while (true) {
		showMenu();
		const choice = getUserChoice();

		const nextState = menuOptions.find((option) => option.selector === choice)?.state;

		if (nextState !== undefined) return nextState;

		console.clear();
		displayMessage("\n❌ Opção inválida. Tente novamente.\n", "error");
	}
}
