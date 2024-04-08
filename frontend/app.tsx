import { Component } from "uix/components/Component.ts";
import { WindowInterface } from "unyt_core/network/communication-interfaces/window-interface.ts";
import { AppToWindow } from '../common/interfaces/AppToWindow.ts';
import { Datex } from "unyt_core/mod.ts";

@template(function() {
	return <>
		{this.otherEndpoint}
		<br/>
		<button onclick:frontend={() => this.openWindow()}>Open window</button>
	</>
})
export class Page extends Component {
	otherEndpoint = $$("");
	
	async openWindow() {
		const width = 500;
		const height = 750;
		const left = (screen.width/2)-(width/2);
		const top = (screen.height/2)-(height/2);

		const domain = new URL("/window", globalThis.location.origin);
		const { window, endpoint } = await WindowInterface.createWindow(domain, "Window", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`);
		console.log(window, endpoint, AppToWindow)
		this.otherEndpoint.val = endpoint!.toString();
	}
}