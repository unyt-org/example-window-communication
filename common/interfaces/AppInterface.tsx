// deno-lint-ignore-file require-await
@endpoint
export class AppInterface {
	static async helloFromApp() {};
	@property static async helloFromWindow() {
		document.body.append(<div>Hello from Window!</div>);
	};
}