// deno-lint-ignore-file require-await
@endpoint
export class WindowToApp {
	static async helloFromWindow() {};
	@property static async helloFromApp() {
		console.log("Hello from app")
	};
}