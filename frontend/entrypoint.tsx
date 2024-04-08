/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

import { Page } from "./app.tsx";
import { Window } from "./window.tsx";

export default {
	'/': <Page/>,
	'/window': <Window/>
};