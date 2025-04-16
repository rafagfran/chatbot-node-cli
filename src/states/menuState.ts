import { question } from "../utils/getInput.js";
import { climateState } from "./climateState.js";

export function menuState() {
	console.log("[1] Clima");
	console.log("[0] Sair");

	// const options = ["Clima"]

	let userChoice = "";
	while (!userChoice) {
		userChoice = question("Digite o valor numero correspondente > ").trim();
	}

	switch (userChoice) {
		case "1":
			return climateState;
		case "0":
			return null;
		default:
			console.log("❌ Opção inválida.");
			return menuState;
	}
}
