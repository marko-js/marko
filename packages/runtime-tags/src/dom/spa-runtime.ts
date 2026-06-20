// Browser-only binding of the SPA navigation controller to the real Marko DOM
// runtime. This module imports the runtime (`init`/`initEmbedded`/`ready`/`run`),
// which touches `document` at load — so it must only run in the browser/bundle.
// `./navigate` stays free of these imports so it remains unit-testable off the DOM.

import {
  createNavigator,
  type NavigatorOptions,
  type SpaNavigator,
  type SpaRuntime,
} from "./navigate";
import { run } from "./queue";
import { init, initEmbedded, ready } from "./resume";

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
