# Example: Window communication

This repository provides a simple setup to showcase a bidirectional communication interface between your app and a popup window.

*[UIX Docs](https://docs.unyt.org/manual/uix/getting-started)*

The DATEX API to open a window is similar to the [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) API with the difference that it is asynchronously and returns an object of the remote endpoint (window endpoint) and the actual window.

```tsx
import { WindowInterface } from "datex-core-legacy/network/communication-interfaces/window-interface.ts";

const { endpoint, window } = await WindowInterface.createWindow(
	"https://example.com", // URL of our window DATEX app
	"MyWindow",            // Target specifying the name of the context
	`popup=yes`            // Window feature list
);
```


---

<sub>&copy; unyt 2024 • [unyt.org](https://unyt.org)</sub>