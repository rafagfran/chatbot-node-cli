import chalk from "chalk";
import { question } from "../utils/getInput.js";
import { weatherState } from "./weatherState.js";

export async function menuState() {
	let userChoice = "";

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

		while (!userChoice) {
			userChoice = question("\nDigite o valor numero correspondente: ").trim();
		}

		switch (userChoice) {
			case "1":
				return await weatherState();
			case "0":
				console.log("\nSaindo... 👋\n");
				return () => null;
			default:
				console.clear();
				console.log(chalk.red("\n❌ Opção inválida. Tente novamente.\n"));
				userChoice = "";
		}
	}
}
