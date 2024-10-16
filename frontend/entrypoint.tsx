/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */
import { type Entrypoint } from "uix/providers/entrypoints.ts";
import { Page } from "common/app.tsx";
import { Window } from "common/window.tsx";

export default {
	'/': <Page/>,
	'/window': <Window/>
} satisfies Entrypoint;