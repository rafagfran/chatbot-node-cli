import axios from "axios";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage.js";

type CityCoordinates = {
	lat: string;
	lon: string;
};

export async function getCordinates(city: string): Promise<CityCoordinates> {
	try {
		const url = `https://nominatim.openstreetmap.org/search?format=json&city=${encodeURIComponent(city)}&limit=1`;

		const { data } = await axios.get<CityCoordinates[]>(url, {
			headers: { "User-Agent": "Rafael" },
			timeout: 5000,
		});

		if (!data || data.length === 0) {
			throw new Error("Nenhuma cidade encontrada com este nome.");
		}

		const response = data[0];

		return response;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			const message = getAxiosErrorMessage(error);
			throw new Error(message);
		}
		if (error instanceof Error) {
			throw new Error(`Erro ao buscar coordenadas (${error.message})`);
		}
		throw new Error("Erro desconhecido ao buscar coordenadas.");
	}
}
