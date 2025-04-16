import chalk from "chalk";
import { menuState } from "./menuState.js";

export function greetingState() {
	console.clear();
	console.log(chalk.bold.cyan("CHAT BOT"));
	console.log("\n");

	return menuState;
}
