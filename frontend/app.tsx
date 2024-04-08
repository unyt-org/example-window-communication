import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { type WindowInterface as OtherInterface } from '../common/interfaces/WindowInterface.ts';
import { AppInterface as MyInterface} from '../common/interfaces/AppInterface.ts';
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
	</main>
})
export class Page extends Component {
	otherEndpoint = $$("Loading...");
	
	async openWindow() {
		const width = 500;
		const height = 750;
		const left = (screen.width/2)-(width/2);
		const top = (screen.height/2)-(height/2);

		const domain = new URL("/window", globalThis.location.origin);
		const { window, endpoint } = await WindowInterface.createWindow(domain, "Window", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`);
		this.otherEndpoint.val = endpoint!.toString();
	}
}