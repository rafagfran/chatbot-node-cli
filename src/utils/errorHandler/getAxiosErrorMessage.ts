import { AxiosError } from "axios";

export function getAxiosErrorMessage(error: AxiosError): string {
	const code = error.code;
	const status = error.response?.status;
	const message = error.message;

	if (code === AxiosError.ECONNABORTED) {
		return "A requisição demorou demais e foi abortada.";
	}
	if (code === AxiosError.ERR_NETWORK) {
		return "Erro de rede. Verifique sua conexão com a internet.";
	}
	if (status === 400) {
		return "Os dados enviados estão no formato incorreto. Verifique e tente novamente.";
	}

	if (message === "socket hang up") {
		return "A conexão com o servidor foi encerrada. Tente novamente.";
	}
	return `Erro na requisição: ${message}`;
}
