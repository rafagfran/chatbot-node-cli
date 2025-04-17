import axios from "axios";
import { handleServiceError } from "../utils/errorHandler/handleServiceError.js";

type CityCoordinates = {
	name: string;
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
		handleServiceError(error, "Erro desconhecido ao buscar coordenadas.");
	}
}
