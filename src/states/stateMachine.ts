import { AppState, type StateFunction } from "../types/types.js";
import { exitState } from "./exitState.js";
import { menuState } from "./menuState.js";
import { weatherState } from "./weatherState.js";

const states: Record<AppState, StateFunction> = {
	menu: menuState,
	weather: weatherState,
	exit: exitState,
};

export class StateMachine {
	private currentState: AppState;

	constructor(initialState: AppState = AppState.MENU) {
		this.currentState = initialState;
	}

	async run() {
		while (true) {
			const nextState = await states[this.currentState]();
			if (!nextState) break;
			this.currentState = nextState;
		}
	}
}
