// deno-lint-ignore-file require-await
@endpoint
export class WindowInterface {
	static async helloFromWindow() {};
	@property static async helloFromApp() {
		console.log("Hello from app")
	};
}