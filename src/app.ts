import { greetingState } from "./states/greetingState.js";

let currentState = greetingState();

async function main() {
	while (currentState) {
		// biome-ignore lint/style/useConst: <explanation>
		let nextState = await currentState();
		currentState = nextState;
	}
}
main();
