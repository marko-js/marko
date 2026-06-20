// Browser-only binding of the SPA navigation controller to the real Marko DOM
// runtime, and the one-stop client entry point for single-page server-first updates
// (`@marko/runtime-tags/dom/spa-runtime`). This module imports the runtime
// (`init`/`initEmbedded`/`ready`/`run`), which touches `document` at load — so it must
// only run in the browser/bundle. `./navigate` stays free of these imports so it
// remains unit-testable off the DOM.

import {
  createNavigator,
  type NavigatorOptions,
  type SpaNavigator,
  type SpaRuntime,
} from "./navigate";
import { run } from "./queue";
import { init, initEmbedded, ready } from "./resume";

// Re-export the runtime-agnostic controller so this is the single client entry point.
export type {
  ApplyOptions,
  FetchUpdateOptions,
  NavHost,
  NavigateControl,
  NavigatorOptions,
  NavWindow,
  ServerUpdate,
  SpaNavigator,
  SpaRuntime,
  StartNavigationOptions,
} from "./navigate";
export {
  applyServerUpdate,
  createNavigator,
  executeScripts,
  fetchUpdate,
  navigate,
  startSpaNavigation,
} from "./navigate";

/** The real Marko DOM runtime, satisfying the controller's injected `SpaRuntime`. */
export const domRuntime: SpaRuntime = { init, initEmbedded, ready, run };

/**
 * Create a navigator wired to the real DOM runtime. Equivalent to `createNavigator`
 * with `runtime: domRuntime` supplied.
 */
export function createDomNavigator(
  options: Omit<NavigatorOptions, "runtime">,
): SpaNavigator {
  return createNavigator({ ...options, runtime: domRuntime });
}
