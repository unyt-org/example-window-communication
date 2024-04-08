import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { AppToWindow } from '../common/interfaces/AppToWindow.ts';

@template(function() {
	return <>
		Hello from window
	</>
})
export class Window extends Component {
	protected onDisplay(): void | Promise<void> {
		const parentInterface = WindowInterface.createParentInterface(globalThis.opener, new URL(document.referrer).origin);
		parentInterface.addEventListener("connect", this.onConnect.bind(this));
	}
	async onConnect(event: EndpointConnectEvent) {
		console.log(event)
	}
}