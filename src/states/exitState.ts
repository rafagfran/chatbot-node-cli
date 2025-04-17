import { displayMessage } from "../utils/displayMessage.js";

export async function exitState() {
	console.clear();
	displayMessage("\nObrigado por usar o chatbot. Até logo!\n", "bold");
	return null;
}
