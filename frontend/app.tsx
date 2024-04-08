import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { type WindowInterface as OtherInterface } from '../common/interfaces/WindowInterface.tsx';
import { AppInterface as MyInterface} from '../common/interfaces/AppInterface.tsx';
import { Datex } from "unyt_core/datex.ts";
MyInterface;

@template(function() {
	return <main>
		<h1>App</h1>
		<div>
			<b>Self:</b> {Datex.Runtime.endpoint.toString()}
		</div>
		<div>
			<b>Other:</b> {this.otherEndpoint}
		</div>
		<button onclick:frontend={() => this.openWindow()}>
			Open window
		</button>
		<button onclick:frontend={() => this.ping()}>
			Ping
		</button>
	</main>
})
export class Page extends Component {
	otherEndpoint = $$("Loading...");
	private windowInterface?: typeof OtherInterface;

	async openWindow() {
		const width = 500;
		const height = 750;
		const left = (screen.width/2)-(width/2);
		const top = (screen.height/2)-(height/2);

		const domain = new URL("/window", globalThis.location.origin);
		const { endpoint } = await WindowInterface.createWindow(domain, "Window", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`);
		this.otherEndpoint.val = endpoint!.toString();
		this.windowInterface = await datex`${endpoint}.WindowInterface`;
	}

	public ping() {
		this.windowInterface?.helloFromApp();
	}
}