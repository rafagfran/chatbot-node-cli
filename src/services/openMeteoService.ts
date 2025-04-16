import { fetchWeatherApi } from "openmeteo";

type CurrentWeather = {
	time: Date;
	temperature: number | undefined;
};

export async function getWeather(
	latitude: string,
	longitude: string,
): Promise<CurrentWeather> {
	const params = {
		latitude,
		longitude,
		current: "temperature_2m",
	};

	const url = "https://api.open-meteo.com/v1/forecast";
	const responses = await fetchWeatherApi(url, params);

	const response = responses[0];
	const current = response.current();

	if (!current) {
		throw new Error("Current weather data is unavailable.");
	}

	const utcOffsetSeconds = response.utcOffsetSeconds();

	const weatherData = {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature: current.variables(0)?.value(),
	};

	return weatherData;
}
