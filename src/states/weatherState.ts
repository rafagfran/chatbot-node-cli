import { getCordinates } from "../services/nominatimService.js";
import { getWeather } from "../services/openMeteoService.js";
import { AppStates } from "../types/types.js";
import { displayMessage } from "../utils/displayMessage.js";
import { handleStateError } from "../utils/errorHandler/handleStateError.js";
import { getUserInput } from "../utils/getInput.js";
import { separator } from "../utils/separator.js";
import { toBold } from "../utils/toBold.js";

export async function weatherState(): Promise<AppStates> {
	let city = "";

	console.clear();
	displayMessage("🌦️ === CONSULTA DE CLIMA === 🌦️\n", "header");

	try {
		while (!city) {
			city = getUserInput("Digite o nome da cidade: ").trim();
		}

		console.clear();
		displayMessage("🔎 Buscando dados...", "bold");

		const { lat, lon, name: cityName } = await getCordinates(city);
		const { temperature } = await getWeather(lat, lon);
		const formattedTemperature = Math.round(temperature);

		const message = [
			"📍 Informações encontradas:\n",
			`${toBold("Cidade")}: ${cityName}`,
			`${toBold("Temperatura atual")}: ${formattedTemperature}°C`,
		];

		console.clear();
		separator();
		displayMessage(message.join("\n"));
		separator();
	} catch (error: unknown) {
		console.clear();
		handleStateError(error, "Ocorreu um erro desconhecido ao consultar o clima.");
	}

	return AppStates.MENU;
}
