import { exitState } from "./states/exitState.js";
import { menuState } from "./states/menuState.js";
import { weatherState } from "./states/weatherState.js";
import { AppState, type StateFunction } from "./types/types.js";
import { displayMessage } from "./utils/displayMessage.js";

const states: Record<AppState, StateFunction> = {
	menu: menuState,
	weather: weatherState,
	exit: exitState,
};

// Classe que encapsula lógica da maquina de estados
export class StateMachine {
	private currentState: AppState;

	constructor(initialState: AppState = AppState.MENU) {
		this.currentState = initialState;
	}

	async run() {
		console.clear()
		displayMessage("👋 Olá, seja bem vindo de volta!\n", "header");
		while (true) {
			const nextState = await states[this.currentState]();
			if (!nextState) break;
			this.currentState = nextState;
		}
	}
}
