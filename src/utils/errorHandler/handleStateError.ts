import { displayMessage } from "../displayMessage.js";

export function handleStateError(
	error: unknown,
	unknownErrorMsg = "Erro desconhecido no estado da maquina",
) {
	let message = unknownErrorMsg;

	if (error instanceof Error) {
		message = error.message;
	}

	displayMessage(`❌ ${message}`, "error");
}
