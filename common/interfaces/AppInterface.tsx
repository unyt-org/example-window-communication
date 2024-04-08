// deno-lint-ignore-file require-await
@endpoint
export class AppInterface {
	static async helloFromApp() {};

	// Exposing the "helloFromWindow" method 
	// to be called via DATEX
	@property static async helloFromWindow() {
		document.body.append(<div>Hello from Window!</div>);
	};
}