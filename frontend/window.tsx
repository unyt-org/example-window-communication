import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { WindowToApp } from '../common/interfaces/WindowToApp.ts';
import { Datex } from "unyt_core/datex.ts";
WindowToApp;

@template(function() {
	return <main>
		<h1>Window</h1>
		<div>
			<b>Self:</b> {Datex.Runtime.endpoint.toString()}
		</div>
		<div>
			<b>Other:</b> {this.otherEndpoint}
		</div>
		<button onclick:frontend={() => this.closeWindow()}>
			Close window
		</button>
	</main>
})
export class Window extends Component {
	otherEndpoint = $$("Loading...");

	protected onDisplay(): void | Promise<void> {
		const parentInterface = WindowInterface.createParentInterface(globalThis.opener, new URL(document.referrer).origin);
		parentInterface.addEventListener("connect", this.onConnect.bind(this));
	}

	closeWindow() {
		globalThis.close();	
	}
	async onConnect(event: EndpointConnectEvent) {
		console.log(event)
		this.otherEndpoint.val = event.endpoint.toString();
	}
}