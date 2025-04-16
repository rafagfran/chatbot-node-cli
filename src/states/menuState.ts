import chalk from "chalk";
import { AppState } from "../types/types.js";
import { getMenuChoice } from "../utils/getInput.js";

export async function menuState(): Promise<AppState> {
	const options = [
		{ selector: 1, title: "Consultar clima" },
		{ selector: 0, title: "Sair" },
	];

	function showMenu() {
		console.log(chalk.yellow("Escolha uma das opções abaixo:\n"));
		options.map((option) => {
			return console.log(chalk.bold(`[${option.selector}]`), option.title);
		});
	}

	console.log("=== Menu Principal ===\n");

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
				console.log(chalk.red("\n❌ Opção inválida. Tente novamente.\n"));
		}
	}
}
