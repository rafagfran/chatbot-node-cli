import axios from "axios";
import { getAxiosErrorMessage } from "./getAxiosErrorMessage.js";

export function handleServiceError(error: unknown, unknownErrorMsg = "Erro desconhecido"): never {
	let message = unknownErrorMsg;

	if (axios.isAxiosError(error)) {
		message = getAxiosErrorMessage(error);
	} else if (error instanceof Error) {
		message = error.message;
	}

	throw new Error(message);
}
