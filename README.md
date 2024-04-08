# Example: Window communication

This repository provides a simple setup to showcase a bidirectional communication interface between your app and a popup window.

*[UIX Docs](https://docs.unyt.org/manual/datex/communication-interfaces#window)*

The DATEX API to open a window (page, popup or tab) is similar to the [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) API with the difference that it is asynchronously and returns an object of the remote endpoint (the endpoint of the window) and the actual [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) containing the DOM document.

```ts
import { WindowInterface } from "datex-core-legacy/network/communication-interfaces/window-interface.ts";

const { endpoint, window } = await WindowInterface.createWindow(
	"https://popup.com",   // URL of our window
	"MyWindow",            // Target specifying the name of the context
	`popup=yes`            // Window feature list
);
```

The DATEX app on the window site can connect to the parent site by creating a parentWindow:

```ts
const parentInterface = WindowInterface.createParentInterface(
	globalThis.opener,  // Parent window instance (app)
	"https://myapp.com" // URL of the parent window (app)
);

// The connection event is fired if we got a response from the app
parentInterface.addEventListener("connect", (event) => {
	// connection is established
	// event.endpoint gives us the endpoint of the app
});
```

When the `createWindow` call of the app did resolve, all DATEX traffic of the app directed to the [endpoint](https://docs.unyt.org/manual/datex/endpoints) of the window is directly routed via [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.

---

<sub>&copy; unyt 2024 • [unyt.org](https://unyt.org)</sub>