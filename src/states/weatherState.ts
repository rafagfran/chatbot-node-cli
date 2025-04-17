import { getCordinates } from "../services/nominatimService.js";
import { getWeather } from "../services/openMeteoService.js";
import { AppState } from "../types/types.js";
import { displayMessage } from "../utils/displayMessage.js";
import { getUserInput } from "../utils/getInput.js";

export async function weatherState(): Promise<AppState> {
	let city = "";

	console.clear();
	displayMessage("🌦️ === CONSULTA DE CLIMA === 🌦️\n", "header");

	try {
		while (!city) {
			city = getUserInput("Digite o nome da cidade: ");
		}

		console.clear();
		displayMessage("🔎 Buscando informacoes...");

		const { lat, lon, name: cityName } = await getCordinates(city);
		const { temperature } = await getWeather(lat, lon);
		const formattedTemperature = Math.round(temperature);

		console.clear();
		displayMessage("=".repeat(30));
		displayMessage(`Cidade: ${cityName}`);
		displayMessage(`Temperatura atual: ${formattedTemperature}°C`);
		displayMessage("=".repeat(30));
	} catch (error) {
		console.error(error);
	}

	return AppState.MENU;
}
