import { getAddressInfo } from "../services/viaCepService.js";
import { AppStates } from "../types/types.js";
import { displayMessage } from "../utils/displayMessage.js";
import { handleStateError } from "../utils/errorHandler/handleStateError.js";
import { getUserInput } from "../utils/getInput.js";
import { separator } from "../utils/separator.js";
import { toBold } from "../utils/toBold.js";

export async function cepState(): Promise<AppStates> {
	let zipCode = "";

	console.clear();
	displayMessage("📍 === CONSULTA DE CEP === 📍\n", "header");

	try {
		while (!zipCode) {
			zipCode = getUserInput("Digite o cep: ").trim();
		}

		console.clear();
		displayMessage("🔎 Buscando dados...", "bold");

		const { cep, bairro, ddd, localidade, logradouro, regiao, uf } = await getAddressInfo(zipCode);

		const address = {
			cep: cep || "N/A",
			logradouro: logradouro || "N/A",
			bairro: bairro || "N/A",
			localidade: localidade || "N/A",
			uf: uf || "N/A",
			regiao: regiao || "N/A",
			ddd: ddd || "N/A",
		};

		const message = [
			"📍 Endereço encontrado:\n",
			`${toBold("CEP")}: ${address.cep}`,
			`${toBold("Logradouro")}: ${address.logradouro}`,
			`${toBold("Bairro")}: ${address.bairro}`,
			`${toBold("Cidade")}: ${address.localidade}`,
			`${toBold("UF")}: ${address.uf}`,
			`${toBold("Região")}: ${address.regiao}`,
			`${toBold("DDD")}: ${address.ddd}`,
		];

		console.clear();
		separator();
		displayMessage(message.join("\n"));
		separator();
	} catch (error: unknown) {
		console.clear();
		handleStateError(error, "Ocorreu um erro desconhecido ao consultar o CEP.");
	}

	return AppStates.MENU;
}
