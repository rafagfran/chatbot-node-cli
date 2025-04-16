import { AxiosError } from "axios";

export function getAxiosErrorMessage(error: AxiosError): string {
	switch (error.code) {
		case AxiosError.ECONNABORTED:
			return "A requisição demorou demais e foi abortada.";
		case AxiosError.ERR_NETWORK:
			return "Erro de rede. Verifique sua conexão com a internet.";
		default:
			if (error.message === "socket hang up") {
				return "A conexão com o servidor foi encerrada. Tente novamente.";
			}

			return `Erro na requisição: ${error.message}`;
	}
}
