import { greetingState } from "./states/greetingState.js";

let currentState = greetingState();

function main() {
	while (currentState !== null) {
		const nextState = currentState();
		currentState = nextState;
	}
	console.log("Até logo! 👋");
}
main();
