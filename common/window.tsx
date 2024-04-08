import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { WindowInterface as MyInterface } from './interfaces/WindowInterface.tsx';
import { type AppInterface as OtherInterface } from './interfaces/AppInterface.tsx';
import { Datex } from "unyt_core/datex.ts";

// Exposing the interface "WindowInterface" via DATEX
MyInterface;

@template(function() {
	return <main>
		<h1>Window</h1>
		<div>
			<b>Self:</b> {Datex.Runtime.endpoint.toString()}
		</div>
		<div>
			<b>Other:</b> {this.otherEndpoint}
		</div>
		<button onclick:frontend={globalThis.close}>
			Close window
		</button>
		<button onclick:frontend={() => this.pong()}>
			Pong
		</button>
	</main>
})
export class Window extends Component {
	otherEndpoint = $$("Loading...");
	private appInterface?: typeof OtherInterface;

	protected onDisplay(): void | Promise<void> {
		const parentInterface = WindowInterface.createParentInterface(
			globalThis.opener,
			new URL(document.referrer).origin
		);
		parentInterface.addEventListener("connect", this.onConnect.bind(this));
	}

	async onConnect(event: EndpointConnectEvent) {
		const endpoint = event.endpoint as Datex.Endpoint;
		this.otherEndpoint.val = endpoint.toString();
		this.appInterface = await datex`${endpoint}.AppInterface`;
	}
	pong() {
		this.appInterface?.helloFromWindow();
	}
}