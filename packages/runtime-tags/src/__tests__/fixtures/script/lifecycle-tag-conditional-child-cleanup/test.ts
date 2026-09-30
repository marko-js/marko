import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A child component whose only interactive feature is a `<lifecycle>` (no
// `let`, no closures, no source `$signal`). Its `onDestroy` cleanup is wired
// through `$signal` at runtime, which requires the scope to resume with its
// closest branch linked. Toggling the `<if>` off after resume must run the
// cleanup, matching client-side rendering.
export const config: TestConfig = {
  steps: [{}, click("#toggle")],
};
