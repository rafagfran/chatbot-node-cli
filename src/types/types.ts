export enum AppStates {
	MENU = "menu",
	WEATHER = "weather",
	CEP = "cep",
	EXIT = "exit",
}
export type StateFunction = () => Promise<AppStates | null>;
