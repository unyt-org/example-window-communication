// deno-lint-ignore-file require-await
@endpoint
export class WindowInterface {
	static async helloFromWindow() {};

	// Exposing the "helloFromApp" method 
	// to be called via DATEX
	@property static async helloFromApp() {
		document.body.append(<div>Hello from App!</div>);
	};
}