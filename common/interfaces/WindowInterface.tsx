// deno-lint-ignore-file require-await
@endpoint
export class WindowInterface {
	static async helloFromWindow() {};
	@property static async helloFromApp() {
		document.body.append(<div>Hello from App!</div>);
	};
}