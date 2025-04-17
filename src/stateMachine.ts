import { cepState } from "./states/cepState.js";
import { exitState } from "./states/exitState.js";
import { menuState } from "./states/menuState.js";
import { weatherState } from "./states/weatherState.js";
import { AppStates, type StateFunction } from "./types/types.js";
import { displayMessage } from "./utils/displayMessage.js";

const states: Record<AppStates, StateFunction> = {
	menu: menuState,
	weather: weatherState,
	exit: exitState,
	cep: cepState,
};
export class StateMachine {
	private currentState: AppStates;

	constructor(initialState: AppStates = AppStates.MENU) {
		this.currentState = initialState;
	}

	async run() {
		console.clear();
		displayMessage("👋 Olá, seja bem vindo de volta!\n", "header");

		while (true) {
			const nextState = await states[this.currentState]();
			if (!nextState) break;
			this.currentState = nextState;
		}
	}
}
