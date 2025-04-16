export enum AppState {
	MENU = "menu",
	WEATHER = "weather",
	EXIT = "exit",
}
export type StateFunction = () => Promise<AppState | null>;
