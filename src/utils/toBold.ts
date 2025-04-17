import chalk from "chalk";

export function toBold(text: string): string {
	const textBold = chalk.bold(text);
	return textBold;
}
