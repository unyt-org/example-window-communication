// deno-lint-ignore-file require-await
@endpoint
export class AppToWindow {
	static async helloFromApp() {};
	@property static async helloFromWindow() {
		console.log("Hello from window")
	};
}