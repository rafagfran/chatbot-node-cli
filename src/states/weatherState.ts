import { getCordinates } from "../services/nominatimService.js";
import { getWeather } from "../services/openMeteoService.js";
import { AppState } from "../types/types.js";
import { getUserInput } from "../utils/getInput.js";

export async function weatherState(): Promise<AppState> {
	let city = "";

	try {
		while (!city) {
			city = getUserInput("Digite o nome da cidade > ");
		}
		console.log("🔎 Buscando informacoes...");

		const { lat, lon, name } = await getCordinates(city);
		const { temperature } = await getWeather(lat, lon);

		console.log(`Temperatura atual em ${name}: ${temperature?.toFixed(2)}°C`);
	} catch (error) {
		console.error(error);
	}

	return AppState.MENU;
}
