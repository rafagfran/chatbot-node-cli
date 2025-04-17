import axios from "axios";
import { handleServiceError } from "../utils/errorHandler/handleServiceError.js";

type AddressInfo = {
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
	regiao: string;
	ddd: string;
	erro?: boolean;
};

export async function getAddressInfo(cep: string): Promise<AddressInfo> {
	try {
		const url = `https://viacep.com.br/ws/${cep}/json/`;

		const { data } = await axios.get<AddressInfo>(url, {
			timeout: 5000,
		});

		if (!data || data.erro) {
			throw new Error("CEP não encontrado");
		}

		return data;
	} catch (error: unknown) {
		handleServiceError(error, "Erro desconhecido ao buscar informações do endereço.");
	}
}
