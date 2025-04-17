import { fetchWeatherApi } from "openmeteo";
import { handleServiceError } from "../utils/errorHandler/handleServiceError.js";

type CurrentWeather = {
	temperature: number;
};

export async function getWeather(latitude: string, longitude: string): Promise<CurrentWeather> {
	const params = {
		latitude,
		longitude,
		current: ["temperature_2m"],
	};

	const url = "https://api.open-meteo.com/v1/forecast";

	try {
		const responses = await fetchWeatherApi(url, params);

		if (!responses || responses.length === 0) {
			throw new Error("Não foi possível obter a resposta do serviço.");
		}

		const current = responses[0].current();
		if (!current) {
			throw new Error("Dados meteorológicos atuais não estão disponíveis.");
		}

		const temperature = current.variables(0)?.value();
		if (!temperature) {
			throw new Error("Dados sobre a temperatura indisponíveis.");
		}

		const weatherData = {
			temperature,
		};

		return weatherData;
	} catch (error) {
		handleServiceError(error, "Erro desconhecido ao buscar os dados meteorológicos");
	}
}
