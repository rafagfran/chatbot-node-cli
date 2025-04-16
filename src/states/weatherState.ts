import { getCordinates } from "../services/nominatimService.js";
import { getWeather } from "../services/openMeteoService.js";
import { question } from "../utils/getInput.js";
import { menuState } from "./menuState.js";

export async function weatherState() {
	let city = "";

	while (!city) {
		city = question("Digite o nome da cidade > ");
	}

	try {
		console.log("🔎 Buscando informacoes...");
		const { lat, lon } = await getCordinates(city);

		const { temperature, time } = await getWeather(lat, lon);

		console.log("Horario: ", time);
		console.log("Temperatura: ", temperature);
	} catch (error) {
		console.error(error);
	}

	return menuState;
}
