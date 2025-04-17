import chalk from "chalk";

type messageVariant = "info" | "error" | "header" | "highlight" | "bold";

export function displayMessage(
	message: string,
	variant: messageVariant = "info",
) {
	const styles = {
		header: chalk.blueBright.bold,
		info: chalk.white,
		error: chalk.redBright,
		highlight: chalk.yellow,
		bold: chalk.bold,
	};

	console.log(styles[variant](message));
}
